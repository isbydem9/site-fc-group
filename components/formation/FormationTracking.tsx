"use client";

import { useEffect, useRef } from "react";
import { generateEventId } from "@/lib/meta";
import { formationOffer } from "@/lib/formation-offer";

export type CheckoutSource = "sticky" | "vsl" | "offer" | "final";
type VslEvent = "VSLStart" | "VSL25" | "VSL50" | "VSL75" | "VSLComplete";

const onlineOfferData = {
  content_name: "Formation Créer des sites avec l’IA",
  content_ids: [formationOffer.online.id],
  content_type: "product",
  value: formationOffer.online.price,
  currency: formationOffer.online.currency,
} as const;

function sendPixel(eventName: "ViewContent" | "InitiateCheckout", eventId: string, data: Record<string, unknown>) {
  try {
    window.fbq?.("track", eventName, data, { eventID: eventId });
  } catch {}
}

function sendCapi(eventName: "ViewContent" | "InitiateCheckout", eventId: string, source: string) {
  void fetch("/api/meta-capi", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      eventName,
      eventId,
      eventSourceUrl: window.location.href,
      source,
      contentName: onlineOfferData.content_name,
      contentCategory: eventName === "ViewContent" ? "Formation en ligne" : undefined,
      contentIds: onlineOfferData.content_ids,
      contentType: onlineOfferData.content_type,
      value: onlineOfferData.value,
      currency: onlineOfferData.currency,
    }),
    keepalive: true,
  }).catch(() => {});
}

export function trackCheckout(source: CheckoutSource) {
  const eventId = generateEventId();
  sendPixel("InitiateCheckout", eventId, { ...onlineOfferData, source });
  sendCapi("InitiateCheckout", eventId, source);
}

export function trackVslEvent(eventName: VslEvent) {
  const sessionKey = `fc-formation-${eventName}`;
  if (sessionStorage.getItem(sessionKey)) return;
  sessionStorage.setItem(sessionKey, "1");
  try {
    window.fbq?.("trackCustom", eventName, {
      content_name: "VSL Formation IA",
      video_id: formationOffer.vsl.videoId,
      page_path: "/formation",
    });
  } catch {}
}

export function OfferViewTracker() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const sessionKey = "fc-formation-offer-view";
      if (!sessionStorage.getItem(sessionKey)) {
        sessionStorage.setItem(sessionKey, "1");
        const eventId = generateEventId();
        sendPixel("ViewContent", eventId, { ...onlineOfferData, content_category: "Formation en ligne" });
        sendCapi("ViewContent", eventId, "offer");
      }
      observer.disconnect();
    }, { threshold: 0.35 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className="absolute inset-0 -z-10" aria-hidden="true" />;
}
