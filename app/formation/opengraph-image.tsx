import { ImageResponse } from "next/og";
import { formationOffer } from "@/lib/formation-offer";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "edge";

export default function Image() {
  return new ImageResponse(
    <div style={{ alignItems: "flex-start", background: "#0A1628", borderBottom: "8px solid #C9A76B", color: "#E8DFC8", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", padding: "70px 86px 62px", width: "100%" }}>
      <div style={{ color: "#C9A76B", display: "flex", fontSize: 23, fontWeight: 700, letterSpacing: "7px" }}>FC GROUP · FORMATION EN LIGNE</div>
      <div style={{ display: "flex", fontSize: 67, fontWeight: 700, lineHeight: 1.06, maxWidth: 1030 }}>Créer des sites avec l’IA et monétiser ses compétences</div>
      <div style={{ alignItems: "center", display: "flex", justifyContent: "space-between", width: "100%" }}><span style={{ color: "#E0C48A", fontSize: 26 }}>Sans coder · Suivi WhatsApp</span><span style={{ color: "#C9A76B", fontSize: 34, fontWeight: 700 }}>{formationOffer.online.priceLabel}</span></div>
    </div>, size,
  );
}
