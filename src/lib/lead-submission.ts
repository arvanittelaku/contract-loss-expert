import { appendRow, type CellValue } from "@/lib/google-sheets";
import { BRAND_NAME } from "@/lib/leadNotification";

export { BRAND_NAME };

/** Row 1 headers in Google Sheets, must match column order in buildLeadSheetRow */
export const LEAD_SHEET_HEADERS = [
  "Timestamp",
  "Full Name",
  "Email",
  "Phone Number",
  "Organisation",
  "Message",
  "Brand Name",
] as const;

export interface LeadSubmission {
  fullName: string;
  email: string;
  phone: string;
  formType?: "contact" | "instruct";
  organisation?: string;
  message?: string;
}

function sanitize(str: string): string {
  return str.replace(/<[^>]*>/g, "").trim();
}

function opt(value: unknown): string {
  if (value == null) return "";
  return sanitize(String(value));
}

/** Prevent Sheets from treating +1… as a formula when using USER_ENTERED */
function formatPhoneForSheet(phone: string): string {
  if (!phone) return "";
  if (phone.startsWith("+") || phone.startsWith("=") || phone.startsWith("-")) {
    return `'${phone}`;
  }
  return phone;
}

export function parseLeadBody(body: unknown): LeadSubmission | null {
  if (!body || typeof body !== "object") return null;

  const b = body as Record<string, unknown>;
  const fullName = opt(b.fullName);
  const email = opt(b.email).toLowerCase();

  if (!fullName || !email) return null;

  const formType = b.formType === "instruct" ? "instruct" : "contact";

  return {
    fullName,
    email,
    phone: b.phone != null ? String(b.phone).trim() : "",
    formType,
    organisation: opt(b.organisation),
    message: opt(b.message),
  };
}

export function buildLeadSheetRow(lead: LeadSubmission): CellValue[] {
  return [
    new Date().toISOString(),
    lead.fullName,
    lead.email,
    formatPhoneForSheet(lead.phone),
    lead.organisation ?? "",
    lead.message ?? "",
    BRAND_NAME,
  ];
}

export async function appendLeadToSheet(lead: LeadSubmission): Promise<void> {
  await appendRow(buildLeadSheetRow(lead));
}
