import { google, sheets_v4 } from "googleapis";

function readEnv(name: string): string | undefined {
  const value = process.env[name];
  return value?.trim() || undefined;
}

function getAuthClient() {
  const clientEmail = readEnv("GOOGLE_SERVICE_ACCOUNT_EMAIL");
  const privateKey = readEnv("GOOGLE_PRIVATE_KEY")?.replace(/\\n/g, "\n");

  if (!clientEmail || !privateKey) {
    throw new Error(
      "Missing Google credentials: set GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_PRIVATE_KEY"
    );
  }

  return new google.auth.GoogleAuth({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

function getSheetsClient(): sheets_v4.Sheets {
  return google.sheets({ version: "v4", auth: getAuthClient() });
}

export type CellValue = string | number | boolean | null;

export interface SheetTarget {
  spreadsheetId?: string;
  sheetName?: string;
}

export interface AppendResult {
  success: boolean;
  updatedRange: string | null | undefined;
}

export interface ReadResult {
  success: boolean;
  rows: CellValue[][];
}

export async function appendRow(
  values: CellValue[],
  target?: SheetTarget
): Promise<AppendResult> {
  const sheets = getSheetsClient();
  const spreadsheetId = target?.spreadsheetId || readEnv("GOOGLE_SHEET_ID");
  const sheetName =
    target?.sheetName || readEnv("GOOGLE_SHEET_TAB_NAME") || "Sheet1";

  if (!spreadsheetId) {
    throw new Error("Missing spreadsheet ID: set GOOGLE_SHEET_ID or pass spreadsheetId");
  }

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheetName}!A:A`,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [values],
    },
  });

  return {
    success: true,
    updatedRange: response.data.updates?.updatedRange,
  };
}

export async function readRows(
  range?: string,
  target?: SheetTarget
): Promise<ReadResult> {
  const sheets = getSheetsClient();
  const spreadsheetId = target?.spreadsheetId || readEnv("GOOGLE_SHEET_ID");
  const sheetName =
    target?.sheetName || readEnv("GOOGLE_SHEET_TAB_NAME") || "Sheet1";

  if (!spreadsheetId) {
    throw new Error("Missing spreadsheet ID");
  }

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: range || sheetName,
  });

  return {
    success: true,
    rows: (response.data.values as CellValue[][]) || [],
  };
}

export async function getSpreadsheetInfo(spreadsheetId?: string) {
  const sheets = getSheetsClient();
  const id = spreadsheetId || readEnv("GOOGLE_SHEET_ID");

  if (!id) {
    throw new Error("Missing spreadsheet ID");
  }

  const response = await sheets.spreadsheets.get({
    spreadsheetId: id,
  });

  return {
    title: response.data.properties?.title,
    sheets: response.data.sheets?.map((s) => ({
      name: s.properties?.title,
      sheetId: s.properties?.sheetId,
      rowCount: s.properties?.gridProperties?.rowCount,
      columnCount: s.properties?.gridProperties?.columnCount,
    })),
  };
}

export function isGoogleSheetsConfigured(): boolean {
  return Boolean(
    readEnv("GOOGLE_SERVICE_ACCOUNT_EMAIL") &&
      readEnv("GOOGLE_PRIVATE_KEY") &&
      readEnv("GOOGLE_SHEET_ID")
  );
}

export function getLeadWebhookUrl(): string | undefined {
  return readEnv("Lead_notification_url") || readEnv("LEAD_NOTIFICATION_URL");
}
