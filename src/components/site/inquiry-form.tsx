"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type State = "idle" | "sending" | "sent" | "error" | "unconfigured";

const inputClass =
  "w-full border border-ink-ghost/70 bg-paper/70 px-3 py-2.5 font-body text-[1rem] text-ink " +
  "transition-colors duration-200 placeholder:text-ink-faint/60 " +
  "focus:border-verdigris-ink focus:bg-paper focus:outline-none";

export function InquiryForm() {
  const [state, setState] = useState<State>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");

    const form = new FormData(e.currentTarget);
    // Honeypot — bots fill hidden fields, people do not.
    if (form.get("company")) {
      setState("sent");
      return;
    }

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          subject: form.get("subject"),
          message: form.get("message"),
        }),
      });
      const json = await res.json();

      if (res.ok && json.ok) {
        setState("sent");
      } else if (res.status === 501) {
        setState("unconfigured");
        setMessage(json.error ?? "");
      } else {
        setState("error");
        setMessage(json.error ?? "Something went wrong.");
      }
    } catch {
      setState("error");
      setMessage("Could not reach the server.");
    }
  }

  if (state === "sent") {
    return (
      <div className="py-10 text-center">
        <p className="font-hand text-3xl text-ink">Received.</p>
        <p className="mt-2 text-[1rem] italic text-ink-soft">
          Filed, and answered as soon as the ink dries.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="folio mb-1.5 block text-ink-faint">Name</label>
          <input id="name" name="name" required autoComplete="name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="folio mb-1.5 block text-ink-faint">Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="folio mb-1.5 block text-ink-faint">Regarding</label>
        <input id="subject" name="subject" className={inputClass} placeholder="A new commission, a question, a hello" />
      </div>

      <div>
        <label htmlFor="message" className="folio mb-1.5 block text-ink-faint">The letter</label>
        <textarea id="message" name="message" required rows={7} className={cn(inputClass, "resize-y leading-relaxed")} />
      </div>

      {/* honeypot */}
      <div aria-hidden="true" className="absolute left-[-9999px]">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      {(state === "error" || state === "unconfigured") && (
        <p
          role="alert"
          className={cn(
            "border px-3 py-2 text-[0.95rem]",
            state === "unconfigured"
              ? "border-wash-deep/70 bg-wash/40 text-ink-soft"
              : "border-sanguine/60 bg-blush/40 text-sanguine-ink"
          )}
        >
          {state === "unconfigured"
            ? "This form is not yet connected to a store. Set CONTENT_SOURCE=airtable to capture inquiries."
            : message}
        </p>
      )}

      <Button type="submit" variant="chalk" size="lg" disabled={state === "sending"}>
        {state === "sending" ? "Sending…" : "Send the letter"}
      </Button>
    </form>
  );
}
