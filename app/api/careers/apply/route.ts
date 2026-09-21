import { cmsPost } from "@/lib/cms/client";
import { NextResponse } from "next/server";

function blankToNull(value: unknown) {
  if (typeof value !== "string") return value ?? null;
  const trimmed = value.trim();
  return trimmed === "" ? null : trimmed;
}

function jsonPayload(incoming: Record<string, unknown>) {
  return {
    name: String(incoming.name ?? "").trim(),
    email: String(incoming.email ?? "").trim(),
    phone: blankToNull(incoming.phone),
    role: String(incoming.role ?? "").trim(),
    linkedin: blankToNull(incoming.linkedin),
    portfolio: blankToNull(incoming.portfolio),
    message: String(incoming.message ?? "").trim(),
  };
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") ?? "";
    if (contentType.includes("multipart/form-data")) {
      const incoming = await request.formData();
      const outbound = new FormData();
      for (const [key, value] of incoming.entries()) {
        if (typeof value === "string") {
          const trimmed = value.trim();
          if (
            (key === "phone" || key === "linkedin" || key === "portfolio") &&
            trimmed === ""
          ) {
            continue;
          }
          outbound.append(key, trimmed);
        } else {
          outbound.append(key, value);
        }
      }
      const result = await cmsPost("/careers/apply", { body: outbound });
      return NextResponse.json(result.body ?? { success: false }, {
        status: result.status,
        headers: { "Cache-Control": "no-store" },
      });
    }

    const incoming = (await request.json()) as Record<string, unknown>;
    const result = await cmsPost("/careers/apply", {
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(jsonPayload(incoming)),
    });
    return NextResponse.json(result.body ?? { success: false }, {
      status: result.status,
      headers: { "Cache-Control": "no-store" },
    });
  } catch {
    return NextResponse.json({ success: false }, {
      status: 500,
      headers: { "Cache-Control": "no-store" },
    });
  }
}
