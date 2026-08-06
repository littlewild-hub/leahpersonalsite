import type { Metadata } from "next";
import { content } from "@/lib/content";
import { Paper } from "@/components/notebook/paper";
import { Divider, SpiralMark } from "@/components/notebook/ornaments";
import { InquiryForm } from "@/components/site/inquiry-form";

export const metadata: Metadata = {
  title: "Get in Touch",
  description: "Start a conversation about new work.",
};

export default async function ContactPage() {
  const profile = await content.getProfile();

  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <p className="folio text-sanguine-ink">Letters received here</p>
      <h1 className="mt-3 font-hand text-[clamp(2.5rem,6vw,4rem)] font-semibold leading-[0.95] text-ink">
        Get in Touch
      </h1>
      {profile.availability && (
        <p className="mt-4 max-w-xl font-hand text-[1.35rem] italic leading-snug text-verdigris-ink">
          {profile.availability}
        </p>
      )}

      <Divider className="my-10" />

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <Paper ground="ruled" className="p-6 sm:p-8" folio="verso">
          <InquiryForm />
        </Paper>

        <aside className="space-y-6">
          {profile.email && (
            <div>
              <p className="folio text-ink-faint">Or write directly</p>
              <a href={`mailto:${profile.email}`} className="link-ink mt-1 block font-note text-sm">
                {profile.email}
              </a>
            </div>
          )}
          {profile.socials.length > 0 && (
            <div>
              <p className="folio text-ink-faint">Found elsewhere</p>
              <ul className="mt-2 space-y-1">
                {profile.socials.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-ink text-[0.95rem]"
                    >
                      {s.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="h-20 w-28 text-sanguine opacity-50" aria-hidden="true">
            <SpiralMark />
          </div>
        </aside>
      </div>
    </section>
  );
}
