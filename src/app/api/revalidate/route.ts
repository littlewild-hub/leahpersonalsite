import { NextResponse } from "next/server";
import { revalidateTag, revalidatePath } from "next/cache";

/* ---------------------------------------------------------------------------
 * On-demand revalidation.
 *
 * Point an Airtable automation ("When record updated -> Send web request") at
 * POST https://<your-domain>/api/revalidate
 *   header: x-revalidate-secret: <REVALIDATE_SECRET>
 *   body:   { "path": "/work" }   (optional; omit to flush all content)
 *
 * Edits in Airtable then appear on the site within seconds, with no redeploy.
 * ------------------------------------------------------------------------- */

export async function POST(req: Request) {
  const secret = process.env.REVALIDATE_SECRET;

  if (!secret || secret === "change-me") {
    return NextResponse.json(
      { ok: false, error: "REVALIDATE_SECRET is not set." },
      { status: 503 }
    );
  }
  if (req.headers.get("x-revalidate-secret") !== secret) {
    return NextResponse.json({ ok: false, error: "Unauthorized." }, { status: 401 });
  }

  let path: string | undefined;
  try {
    const body = (await req.json()) as { path?: string };
    path = typeof body?.path === "string" ? body.path : undefined;
  } catch {
    /* body is optional */
  }

  if (path) {
    revalidatePath(path);
  } else {
    revalidateTag("content");
    revalidatePath("/", "layout");
  }

  return NextResponse.json({ ok: true, revalidated: path ?? "content", at: Date.now() });
}
