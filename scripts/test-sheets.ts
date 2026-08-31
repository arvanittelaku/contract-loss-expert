import { appendRow, getSpreadsheetInfo, readRows } from "../src/lib/google-sheets";
import { buildLeadSheetRow } from "../src/lib/lead-submission";

async function test() {
  console.log("--- Testing Google Sheets Connection ---\n");

  try {
    const info = await getSpreadsheetInfo();
    console.log("Spreadsheet found:", info.title);
    console.log("Tabs:", info.sheets?.map((s) => s.name).join(", "));
  } catch (error) {
    console.error("Failed to read spreadsheet info:", error);
    process.exit(1);
  }

  try {
    const result = await appendRow(
      buildLeadSheetRow({
        fullName: "Test Entry",
        email: "test@example.com",
        phone: "+1 555 123 4567",
        formType: "contact",
        organisation: "Test Firm LLP",
        message: "Test row from scripts/test-sheets.ts",
      })
    );
    console.log("Row written:", result.updatedRange);
  } catch (error) {
    console.error("Failed to write row:", error);
    process.exit(1);
  }

  try {
    const result = await readRows();
    console.log(`Read ${result.rows.length} rows (including header if present)`);
    console.log("Last row:", result.rows[result.rows.length - 1]);
  } catch (error) {
    console.error("Failed to read rows:", error);
    process.exit(1);
  }

  console.log("\n--- All tests passed ---");
}

test();
