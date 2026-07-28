export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim() ?? "";
export const IS_META_PIXEL_CONFIGURED = META_PIXEL_ID.length > 0;
export const META_API_VERSION = "v21.0";

export function generateEventId(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export function normalizeMalianPhoneNumber(rawPhoneNumber: string): string {
  const digits = rawPhoneNumber.replace(/\D/g, "");

  if (digits.startsWith("223")) {
    return digits;
  }

  if (digits.length === 8) {
    return `223${digits}`;
  }

  return digits;
}
