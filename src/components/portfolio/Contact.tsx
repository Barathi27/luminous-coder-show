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
                Let's build<br />something together.
              </h2>
              <p className="mt-5 max-w-md text-muted-foreground">
                Have a project in mind, a role to fill, or just want to say hi? Drop a message —
                I usually reply within 48 hours.
              </p>
              <div className="mt-8 space-y-3 text-sm">
                <a href="mailto:barathi@example.com" className="block text-foreground hover:text-primary">
                  barathi@example.com
                </a>
                <div className="text-muted-foreground">India · IST</div>
              </div>
            </div>

            <form
              className="reveal grid gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <Field label="Name" name="name" placeholder="Your name" />
              <Field label="Email" name="email" type="email" placeholder="you@email.com" />
              <div>
                <label className="mb-2 block font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about your project, role, or just say hi."
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
        required
        className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}
