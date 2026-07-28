import { createHash } from "node:crypto";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import {
  META_API_VERSION,
  META_PIXEL_ID,
  normalizeMalianPhoneNumber,
} from "@/lib/meta";

export const runtime = "nodejs";

type MetaCapiRequest = {
  eventName: string;
  eventId: string;
  eventSourceUrl: string;
  source: string;
  user: {
    nom: string;
    telephone: string;
  };
};

function hash(value: string): string {
  return createHash("sha256").update(value).digest("hex");
}

function isMetaCapiRequest(value: unknown): value is MetaCapiRequest {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Record<string, unknown>;
  const user = candidate.user;

  return (
    typeof candidate.eventName === "string" &&
    typeof candidate.eventId === "string" &&
    typeof candidate.eventSourceUrl === "string" &&
    typeof candidate.source === "string" &&
    !!user &&
    typeof user === "object" &&
    typeof (user as Record<string, unknown>).nom === "string" &&
    typeof (user as Record<string, unknown>).telephone === "string"
  );
}

export async function POST(request: Request) {
  const token = process.env.META_CAPI_TOKEN;

  if (!token) {
    console.warn("Meta CAPI: envoi ignoré, META_CAPI_TOKEN est absent.");
    return NextResponse.json({ success: true, skipped: true });
  }

  try {
    const body: unknown = await request.json();

    if (!isMetaCapiRequest(body)) {
      console.error("Meta CAPI: charge utile invalide.");
      return NextResponse.json({ success: false });
    }

    const firstName = body.user.nom.trim().split(/\s+/)[0]?.toLowerCase() ?? "";
    const phoneNumber = normalizeMalianPhoneNumber(body.user.telephone);
    const forwardedFor = request.headers.get("x-forwarded-for");
    const clientIpAddress = forwardedFor?.split(",")[0]?.trim();
    const clientUserAgent = request.headers.get("user-agent") ?? undefined;
    const cookieStore = cookies();
    const fbp = cookieStore.get("_fbp")?.value;
    const fbc = cookieStore.get("_fbc")?.value;

    const userData = {
      fn: hash(firstName),
      ph: hash(phoneNumber),
      ...(clientIpAddress ? { client_ip_address: clientIpAddress } : {}),
      ...(clientUserAgent ? { client_user_agent: clientUserAgent } : {}),
      ...(fbp ? { fbp } : {}),
      ...(fbc ? { fbc } : {}),
    };

    const testEventCode = process.env.META_TEST_EVENT_CODE?.trim();
    const payload = {
      data: [
        {
          event_name: body.eventName,
          event_time: Math.floor(Date.now() / 1000),
          event_id: body.eventId,
          event_source_url: body.eventSourceUrl,
          action_source: "website",
          user_data: userData,
          custom_data: {
            content_name: body.source,
            content_category: body.source,
          },
        },
      ],
      ...(testEventCode ? { test_event_code: testEventCode } : {}),
    };

    const endpoint =
      `https://graph.facebook.com/${META_API_VERSION}/${META_PIXEL_ID}/events` +
      `?access_token=${encodeURIComponent(token)}`;
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error(`Meta CAPI: réponse non valide (${response.status}).`);
      return NextResponse.json({ success: false });
    }

    return NextResponse.json({ success: true });
  } catch {
    console.error("Meta CAPI: échec de l'envoi.");
    return NextResponse.json({ success: false });
  }
}
