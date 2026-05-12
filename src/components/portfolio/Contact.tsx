import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-surface/60 p-8 md:p-14">
          <div
            className="pointer-events-none absolute inset-0 -z-0"
            style={{ background: "var(--gradient-radial)" }}
          />
          <div className="relative grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div className="reveal">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">04 · Contact</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Have something<br />in mind?
              </h2>
              <p className="mt-5 max-w-md text-muted-foreground">
                I take on a small number of projects each quarter. Tell me about your product
                and timeline — I usually reply within 48 hours.
              </p>
              <div className="mt-8 space-y-3 text-sm">
                <a href="mailto:hello@alexrivera.dev" className="block text-foreground hover:text-primary">
                  hello@alexrivera.dev
                </a>
                <div className="text-muted-foreground">Lisbon · UTC+1</div>
              </div>
            </div>

            <form
              className="reveal grid gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Ada Lovelace" />
                <Field label="Email" name="email" type="email" placeholder="ada@company.com" />
              </div>
              <Field label="Company" name="company" placeholder="Optional" />
              <div>
                <label className="mb-2 block font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  Project
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="What are you building? Timeline, budget, team — anything helps."
                  className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <button
                type="submit"
                disabled={sent}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-70"
              >
                {sent ? "Thanks — I'll be in touch ✦" : "Send message →"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={name !== "company"}
        className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}
