import { createHash } from "node:crypto";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import {
  IS_META_PIXEL_CONFIGURED,
  META_API_VERSION,
  META_PIXEL_ID,
  normalizeMalianPhoneNumber,
} from "@/lib/meta";

export const runtime = "nodejs";

const ALLOWED_EVENTS = new Set(["ViewContent", "InitiateCheckout", "Lead"] as const);
const ONLINE_OFFER = {
  contentName: "Formation Créer des sites avec l’IA",
  contentCategory: "Formation en ligne",
  contentId: "formation-ia-online-25000-xof",
  contentType: "product",
  value: 25000,
  currency: "XOF",
} as const;
const IN_PERSON_OFFER = {
  contentName: "Formation présentielle IA",
  contentCategory: "Formation présentielle",
  value: 75000,
  currency: "XOF",
  source: "Formation présentielle",
} as const;

type AllowedEvent = "ViewContent" | "InitiateCheckout" | "Lead";
type MetaCapiRequest = {
  eventName: AllowedEvent;
  eventId: string;
  eventSourceUrl: string;
  source: string;
  contentName: string;
  contentCategory?: string;
  contentIds?: string[];
  contentType?: string;
  value?: number;
  currency?: string;
  user?: { nom: string; telephone: string };
};

function hash(value: string): string {
  return createHash("sha256").update(value).digest("hex");
}

function boundedString(value: unknown, max: number, allowEmpty = false): value is string {
  return typeof value === "string" && value.length <= max && (allowEmpty || value.trim().length > 0);
}

function exactOnlineOffer(candidate: Record<string, unknown>): boolean {
  return candidate.contentName === ONLINE_OFFER.contentName &&
    candidate.contentType === ONLINE_OFFER.contentType &&
    candidate.value === ONLINE_OFFER.value &&
    candidate.currency === ONLINE_OFFER.currency &&
    Array.isArray(candidate.contentIds) &&
    candidate.contentIds.length === 1 &&
    candidate.contentIds[0] === ONLINE_OFFER.contentId;
}

function isMetaCapiRequest(value: unknown): value is MetaCapiRequest {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Record<string, unknown>;
  if (!boundedString(candidate.eventName, 32) || !ALLOWED_EVENTS.has(candidate.eventName as AllowedEvent)) return false;
  if (!boundedString(candidate.eventId, 128) || !/^[A-Za-z0-9._:-]+$/.test(candidate.eventId)) return false;
  if (!boundedString(candidate.eventSourceUrl, 2048) || !/^https?:\/\//.test(candidate.eventSourceUrl)) return false;
  if (!boundedString(candidate.source, 64) || !boundedString(candidate.contentName, 128)) return false;
  if (candidate.contentCategory !== undefined && !boundedString(candidate.contentCategory, 128)) return false;
  if (candidate.contentType !== undefined && !boundedString(candidate.contentType, 32)) return false;
  if (candidate.currency !== undefined && !boundedString(candidate.currency, 3)) return false;
  if (candidate.value !== undefined && (typeof candidate.value !== "number" || !Number.isFinite(candidate.value) || candidate.value < 0)) return false;
  if (candidate.contentIds !== undefined && (!Array.isArray(candidate.contentIds) || candidate.contentIds.length > 10 || candidate.contentIds.some((id) => !boundedString(id, 100)))) return false;

  const user = candidate.user;
  if (user !== undefined && (!user || typeof user !== "object" ||
    !boundedString((user as Record<string, unknown>).nom, 100) ||
    !boundedString((user as Record<string, unknown>).telephone, 32))) return false;

  if (candidate.eventName === "ViewContent") {
    return exactOnlineOffer(candidate) && candidate.contentCategory === ONLINE_OFFER.contentCategory && candidate.source === "offer";
  }
  if (candidate.eventName === "InitiateCheckout") {
    return exactOnlineOffer(candidate) && ["sticky", "vsl", "offer", "final"].includes(candidate.source as string);
  }
  if (candidate.eventName === "Lead" && candidate.contentName === IN_PERSON_OFFER.contentName) {
    return candidate.contentCategory === IN_PERSON_OFFER.contentCategory &&
      candidate.value === IN_PERSON_OFFER.value && candidate.currency === IN_PERSON_OFFER.currency &&
      candidate.source === IN_PERSON_OFFER.source && user !== undefined;
  }
  return candidate.value === undefined && candidate.currency === undefined && candidate.contentIds === undefined && candidate.contentType === undefined;
}

export async function POST(request: Request) {
  let body: MetaCapiRequest;
  try {
    const candidate: unknown = await request.json();
    if (!isMetaCapiRequest(candidate)) {
      console.error("Meta CAPI: charge utile invalide.");
      return NextResponse.json({ success: false }, { status: 400 });
    }
    body = candidate;
  } catch {
    console.error("Meta CAPI: charge utile invalide.");
    return NextResponse.json({ success: false }, { status: 400 });
  }

  const token = process.env.META_CAPI_TOKEN;
  if (!IS_META_PIXEL_CONFIGURED) {
    console.warn("Meta CAPI: envoi ignoré, NEXT_PUBLIC_META_PIXEL_ID est absent.");
    return NextResponse.json({ success: true, skipped: true });
  }
  if (!token) {
    console.warn("Meta CAPI: envoi ignoré, META_CAPI_TOKEN est absent.");
    return NextResponse.json({ success: true, skipped: true });
  }

  try {
    const firstName = body.user?.nom.trim().split(/\s+/)[0]?.toLowerCase() ?? "";
    const phoneNumber = normalizeMalianPhoneNumber(body.user?.telephone ?? "");
    const forwardedFor = request.headers.get("x-forwarded-for");
    const clientIpAddress = forwardedFor?.split(",")[0]?.trim();
    const clientUserAgent = request.headers.get("user-agent") ?? undefined;
    const cookieStore = cookies();
    const fbp = cookieStore.get("_fbp")?.value;
    const fbc = cookieStore.get("_fbc")?.value;

    const userData = {
      ...(firstName ? { fn: hash(firstName) } : {}),
      ...(phoneNumber ? { ph: hash(phoneNumber) } : {}),
      ...(clientIpAddress ? { client_ip_address: clientIpAddress } : {}),
      ...(clientUserAgent ? { client_user_agent: clientUserAgent } : {}),
      ...(fbp ? { fbp } : {}),
      ...(fbc ? { fbc } : {}),
    };
    const testEventCode = process.env.META_TEST_EVENT_CODE?.trim();
    const payload = {
      data: [{
        event_name: body.eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: body.eventId,
        event_source_url: body.eventSourceUrl,
        action_source: "website",
        user_data: userData,
        custom_data: {
          content_name: body.contentName,
          ...(body.contentCategory ? { content_category: body.contentCategory } : {}),
          ...(body.contentIds ? { content_ids: body.contentIds } : {}),
          ...(body.contentType ? { content_type: body.contentType } : {}),
          ...(body.value !== undefined ? { value: body.value } : {}),
          ...(body.currency ? { currency: body.currency } : {}),
          source: body.source,
        },
      }],
      ...(testEventCode ? { test_event_code: testEventCode } : {}),
    };
    const endpoint = `https://graph.facebook.com/${META_API_VERSION}/${META_PIXEL_ID}/events?access_token=${encodeURIComponent(token)}`;
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      console.error(`Meta CAPI: réponse non valide (${response.status}).`);
      return NextResponse.json({ success: false }, { status: 502 });
    }
    return NextResponse.json({ success: true });
  } catch {
    console.error("Meta CAPI: échec de l'envoi.");
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
