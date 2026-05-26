/**
 * Legacy standalone function (n8n webhook only).
 * Production uses Next.js /api/submit-lead (Google Sheets + optional webhook).
 * Update BRAND_NAME per site when copying to another project.
 */
const BRAND_NAME = "ContractLossExpert";

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return json(405, { error: "Method not allowed" });
  }

  const webhookUrl =
    process.env.Lead_notification_url || process.env.LEAD_NOTIFICATION_URL;

  if (!webhookUrl) {
    console.error("Lead_notification_url is not configured");
    return json(500, { error: "Lead notification is not configured" });
  }

  let body;
  try {
    body = JSON.parse(event.body || "{}");
  } catch {
    return json(400, { error: "Invalid JSON body" });
  }

  const fullName = typeof body.fullName === "string" ? body.fullName.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone =
    body.phone != null && body.phone !== undefined ? String(body.phone).trim() : "";

  if (!fullName || !email) {
    return json(400, { error: "fullName and email are required" });
  }

  const outbound = {
    "Full Name": fullName,
    Email: email,
    "Phone Number": phone,
    "Brand name": BRAND_NAME,
  };

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(outbound),
    });

    if (!res.ok) {
      console.error("Webhook responded with", res.status, await res.text());
      return json(502, { error: "Failed to deliver lead" });
    }

    return json(200, { ok: true });
  } catch (err) {
    console.error("Webhook request failed", err);
    return json(502, { error: "Failed to deliver lead" });
  }
};

function json(statusCode, data) {
  return {
    statusCode,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
}
