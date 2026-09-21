import { cmsPost } from "@/lib/cms/client";
import { NextResponse } from "next/server";

function blankToNull(value: unknown) {
  if (typeof value !== "string") return value ?? null;
  const trimmed = value.trim();
  return trimmed === "" ? null : trimmed;
}

export async function POST(request: Request) {
  try {
    const incoming = (await request.json()) as Record<string, unknown>;
    const payload = {
      name: String(incoming.name ?? "").trim(),
      email: String(incoming.email ?? "").trim(),
      phone: blankToNull(incoming.phone),
      company: blankToNull(incoming.company),
      service: String(incoming.service ?? "").trim(),
      message: String(incoming.message ?? "").trim(),
    };
    const result = await cmsPost("/contact", {
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
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
