import { appendRow, type CellValue } from "@/lib/google-sheets";

export const BRAND_NAME = "ContractLossExpert";

/** Row 1 headers in Google Sheets (Sheet9), must match column order in buildLeadSheetRow */
export const LEAD_SHEET_HEADERS = [
  "Timestamp",
  "Full Name",
  "Email",
  "Phone Number",
  "Organisation",
  "Loss Type",
  "Sector",
  "Court / Forum",
  "Expert Type",
  "Claim Value",
  "Deadline Date",
  "Urgency",
  "Case Description",
  "Brand Name",
] as const;

export interface LeadSubmission {
  fullName: string;
  email: string;
  phone: string;
  organisation?: string;
  lossType?: string;
  sector?: string;
  court?: string;
  expertType?: string;
  claimValue?: string;
  deadline?: string;
  urgency?: string;
  description?: string;
}

function sanitize(str: string): string {
  return str.replace(/<[^>]*>/g, "").trim();
}

function opt(value: unknown): string {
  if (value == null) return "";
  return sanitize(String(value));
}

/** Prevent Sheets from treating +44… as a formula when using USER_ENTERED */
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

  return {
    fullName,
    email,
    phone: b.phone != null ? String(b.phone).trim() : "",
    organisation: opt(b.organisation),
    lossType: opt(b.lossType),
    sector: opt(b.sector),
    court: opt(b.court),
    expertType: opt(b.expertType),
    claimValue: opt(b.claimValue),
    deadline: opt(b.deadline),
    urgency: opt(b.urgency),
    description: opt(b.description),
  };
}

export function buildLeadSheetRow(lead: LeadSubmission): CellValue[] {
  return [
    new Date().toISOString(),
    lead.fullName,
    lead.email,
    formatPhoneForSheet(lead.phone),
    lead.organisation ?? "",
    lead.lossType ?? "",
    lead.sector ?? "",
    lead.court ?? "",
    lead.expertType ?? "",
    lead.claimValue ?? "",
    lead.deadline ?? "",
    lead.urgency ?? "",
    lead.description ?? "",
    BRAND_NAME,
  ];
}

export function buildWebhookPayload(lead: LeadSubmission) {
  return {
    "Full Name": lead.fullName,
    Email: lead.email,
    "Phone Number": lead.phone,
    "Brand name": BRAND_NAME,
  };
}

export async function appendLeadToSheet(lead: LeadSubmission): Promise<void> {
  await appendRow(buildLeadSheetRow(lead));
}

export async function notifyLeadWebhook(
  lead: LeadSubmission,
  webhookUrl: string
): Promise<boolean> {
  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(buildWebhookPayload(lead)),
    });
    return res.ok;
  } catch (err) {
    console.error("Lead webhook failed:", err);
    return false;
  }
}
