const groups = [
  {
    title: "Languages",
    items: ["JavaScript", "Java", "SQL"],
  },
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Backend & Data",
    items: ["Node.js", "Express", "MongoDB", "SQL"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman", "Vercel"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mb-14 flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">02 · Toolkit</p>
            <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
              The stack I reach for.
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm text-muted-foreground md:block">
            Pragmatic by default — but happy to nerd out on the right tool for the job.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g, i) => (
            <div
              key={g.title}
              className="reveal group relative overflow-hidden rounded-2xl border border-border/60 bg-surface/60 p-6 transition-colors hover:border-primary/40"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/0 blur-2xl transition-all duration-500 group-hover:bg-primary/20" />
              <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-2 font-display text-xl font-semibold">{g.title}</h3>
              <ul className="mt-5 space-y-2">
                {g.items.map((it) => (
                  <li key={it} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
