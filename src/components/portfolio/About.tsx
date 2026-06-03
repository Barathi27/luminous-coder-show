export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr]">
          <div className="reveal">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">01 · About</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              About me.<br />Curious by nature.
            </h2>
          </div>
          <div className="reveal space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm Barathi — a MERN stack developer passionate about building modern, responsive
              web experiences. I love turning ideas into clean, maintainable code that just works.
            </p>
            <p>
              From crafting pixel-perfect UIs in React to designing robust APIs with Node and
              MongoDB, I enjoy <em className="text-foreground">every</em> layer of the stack — and
              I'm always learning something new.
            </p>
            <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
              {[
                ["Role", "MERN Stack Developer"],
                ["Focus", "Full-stack web apps"],
                ["Based in", "India — open to remote"],
                ["Stack", "MongoDB · Express · React · Node"],
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
