export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr]">
          <div className="reveal">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">01 · About</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Engineer first.<br />Designer always.
            </h2>
          </div>
          <div className="reveal space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              I've spent the past eight years bridging the gap between product, design, and
              engineering — most recently leading platform work at a YC-backed fintech and
              shipping developer tooling used by thousands of teams.
            </p>
            <p>
              My favourite projects sit at the boundary: a CLI that <em className="text-foreground">feels</em> like an app,
              a dashboard that loads in 200ms, an API surface that documents itself.
            </p>
            <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
              {[
                ["Currently", "Senior Engineer · Lumen Labs"],
                ["Previously", "Stripe · Linear · Vercel (consult)"],
                ["Based in", "Lisbon, Portugal — remote"],
                ["Speaks", "English, Portuguese, Spanish"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl border border-border/60 bg-surface/60 p-4">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{k}</div>
                  <div className="mt-1 text-sm text-foreground">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
