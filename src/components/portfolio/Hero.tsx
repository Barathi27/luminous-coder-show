import heroImg from "@/assets/hero-abstract.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="absolute inset-0 -z-10 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-radial)" }}
      />
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="relative grid h-2 w-2 place-items-center">
              <span className="absolute inset-0 animate-ping rounded-full bg-primary/60" />
              <span className="h-2 w-2 rounded-full bg-primary" />
            </span>
            Open to opportunities · 2026
          </div>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
            Hi, I'm <span className="text-gradient">Barathi</span>
            <br />
            MERN Stack Developer.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I build fast, responsive, and scalable web applications using MongoDB, Express,
            React, and Node.js — turning ideas into clean, production-ready products.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Download Resume
              <span aria-hidden>↓</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-5 py-3 text-sm font-medium text-foreground backdrop-blur hover:bg-surface-elevated"
            >
              Get in touch
            </a>
          </div>
          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border/60 pt-8">
            {[
              ["3+", "Years coding"],
              ["15+", "Projects built"],
              ["8", "Core technologies"],
            ].map(([k, v]) => (
              <div key={v}>
                <dt className="font-display text-2xl font-semibold">{k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="reveal relative">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 to-transparent blur-3xl" />
            <div className="relative h-full w-full overflow-hidden rounded-3xl border border-border/60 bg-surface glow animate-float">
              <img
                src={heroImg}
                alt="Abstract artwork representing full-stack development"
                width={1280}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -left-6 bottom-8 rounded-2xl border border-border/60 bg-surface-elevated/90 p-4 backdrop-blur shadow-card">
              <div className="font-mono text-[11px] text-muted-foreground">~/now</div>
              <div className="mt-1 text-sm">
                Crafting full-stack apps with the <span className="text-primary">MERN</span> stack.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 overflow-hidden border-y border-border/60 py-5">
        <div className="flex w-max animate-marquee items-center gap-12 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {Array.from({ length: 2 }).flatMap((_, i) =>
            ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "SQL", "Java"].map((t) => (
              <span key={`${i}-${t}`} className="flex items-center gap-12">
                {t}
                <span className="h-1 w-1 rounded-full bg-primary" />
              </span>
            )),
          )}
        </div>
      </div>
    </section>
  );
}
