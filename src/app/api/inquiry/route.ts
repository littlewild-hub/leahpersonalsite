import { NextResponse } from "next/server";
import { z } from "zod";
import { content } from "@/lib/content";

const schema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email().max(200),
  subject: z.string().max(200).optional().nullable(),
  message: z.string().min(1).max(5000),
});

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Malformed request." }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid submission." },
      { status: 400 }
    );
  }

  if (!content.createInquiry) {
    return NextResponse.json(
      { ok: false, error: "The current content source cannot store inquiries." },
      { status: 501 }
    );
  }

  try {
    const result = await content.createInquiry({
      ...parsed.data,
      subject: parsed.data.subject ?? undefined,
      source: "website",
    });

    if (!result.ok) {
      // The local provider always lands here — it has nowhere to write.
      return NextResponse.json(
        { ok: false, error: "Inquiry capture is not configured for this content source." },
        { status: 501 }
      );
    }
    return NextResponse.json({ ok: true, id: result.id });
  } catch (err) {
    console.error("[api/inquiry]", err);
    return NextResponse.json({ ok: false, error: "Could not file the inquiry." }, { status: 500 });
  }
}
