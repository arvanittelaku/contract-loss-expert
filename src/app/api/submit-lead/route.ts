import { NextResponse } from "next/server";
import {
  getLeadWebhookUrl,
  isGoogleSheetsConfigured,
} from "@/lib/google-sheets";
import {
  appendLeadToSheet,
  notifyLeadWebhook,
  parseLeadBody,
} from "@/lib/lead-submission";

export async function POST(request: Request) {
  const webhookUrl = getLeadWebhookUrl();
  const sheetsConfigured = isGoogleSheetsConfigured();

  if (!sheetsConfigured && !webhookUrl) {
    console.error("Lead submission not configured: missing Google Sheets env vars and webhook URL");
    return NextResponse.json(
      { error: "Lead submission is not configured" },
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const lead = parseLeadBody(body);
  if (!lead) {
    return NextResponse.json(
      { error: "fullName and email are required" },
      { status: 400 }
    );
  }

  if (sheetsConfigured) {
    try {
      await appendLeadToSheet(lead);
    } catch (err) {
      console.error("Google Sheets write failed:", {
        message: err instanceof Error ? err.message : "Unknown error",
        sheetId: process.env.GOOGLE_SHEET_ID?.trim().slice(0, 8) + "...",
        tab: process.env.GOOGLE_SHEET_TAB_NAME?.trim(),
      });
      return NextResponse.json(
        { error: "Failed to save submission" },
        { status: 502 }
      );
    }
  }

  if (webhookUrl) {
    const webhookOk = await notifyLeadWebhook(lead, webhookUrl);
    if (!webhookOk && !sheetsConfigured) {
      return NextResponse.json({ error: "Failed to deliver lead" }, { status: 502 });
    }
  }

  return NextResponse.json({ ok: true });
}
