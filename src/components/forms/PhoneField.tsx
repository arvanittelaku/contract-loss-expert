"use client";

const PREFIXES = [
  { value: "+44", label: "UK +44" },
  { value: "+353", label: "IE +353" },
  { value: "+1", label: "US/CA +1" },
  { value: "+61", label: "AU +61" },
  { value: "+49", label: "DE +49" },
  { value: "+33", label: "FR +33" },
  { value: "+971", label: "UAE +971" },
  { value: "+65", label: "SG +65" },
];

interface PhoneFieldProps {
  inputClass: string;
  labelClass: string;
}

export function PhoneField({ inputClass, labelClass }: PhoneFieldProps) {
  return (
    <div>
      <label htmlFor="phone" className={labelClass}>
        Phone
      </label>
      <div className="flex min-w-0 flex-col gap-2 sm:flex-row">
        <select
          id="phonePrefix"
          name="phonePrefix"
          defaultValue="+44"
          aria-label="Country calling code"
          className={`${inputClass} sm:max-w-[8.5rem] sm:shrink-0`}
        >
          {PREFIXES.map((p) => (
            <option key={p.value} value={p.value}>
              {p.label}
            </option>
          ))}
        </select>
        <input
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel-national"
          placeholder="7123 456789"
          className={`${inputClass} min-w-0 flex-1`}
        />
      </div>
    </div>
  );
}

/** Combine prefix + national digits for API payload */
export function formatPhoneFromFormData(data: FormData): string {
  const prefix = String(data.get("phonePrefix") || "+44").trim();
  const national = String(data.get("phone") || "")
    .replace(/\s/g, "")
    .trim();
  if (!national) return "";
  const normalizedPrefix = prefix.startsWith("+") ? prefix : `+${prefix}`;
  return `${normalizedPrefix}${national}`;
}
