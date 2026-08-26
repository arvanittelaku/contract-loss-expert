import { getSiteDomain } from "@/lib/site";

export const BRAND_NAME = "ContractLossExpert";

export interface LeadWebhookInput {
  fullName: string;
  email: string;
  phone: string;
}

/** Outbound n8n payload — five keys, identical across all brand sites */
export function buildWebhookPayload(lead: LeadWebhookInput) {
  return {
    "Full Name": lead.fullName,
    Email: lead.email,
    "Phone Number": lead.phone,
    "Brand name": BRAND_NAME,
    domain: getSiteDomain(),
  };
}

export function getLeadWebhookUrl(): string | undefined {
  const value =
    process.env.Lead_notification_url?.trim() ||
    process.env.LEAD_NOTIFICATION_URL?.trim();
  return value || undefined;
}

export async function notifyLeadWebhook(
  lead: LeadWebhookInput,
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
