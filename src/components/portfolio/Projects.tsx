import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

const projects = [
  {
    img: p1,
    tag: "Web App · 2025",
    title: "Weather App",
    desc: "A responsive weather application with real-time forecasts, search by city, and clean data visualization powered by a public weather API.",
    stack: ["React", "JavaScript", "REST API"],
    href: "#",
  },
  {
    img: p2,
    tag: "Productivity · 2025",
    title: "Todo App",
    desc: "A full-stack todo manager with authentication, drag-and-drop ordering, and persistent storage — built end-to-end with the MERN stack.",
    stack: ["MongoDB", "Express", "React", "Node"],
    href: "#",
  },
  {
    img: p3,
    tag: "Personal · 2026",
    title: "Portfolio Website",
    desc: "This very portfolio — a modern, dark-themed showcase built with React and Tailwind, with smooth scroll animations and a fully responsive layout.",
    stack: ["React", "Tailwind", "Vite"],
    href: "#",
  },
];

export function Projects() {
  return (
    <section id="work" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mb-14 flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">03 · Selected work</p>
            <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
              Things I've shipped.
            </h2>
          </div>
          <a href="#contact" className="hidden text-sm text-muted-foreground hover:text-foreground md:inline">
            Want the full case studies? →
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <a
              key={p.title}
              href={p.href}
              className={`reveal group relative flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-surface/60 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-card ${
                i === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/0 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6 md:p-8">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    {p.tag}
                  </span>
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-border/60 text-muted-foreground transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                    ↗
                  </span>
                </div>
                <h3 className="font-display text-2xl font-semibold md:text-3xl">{p.title}</h3>
                <p className="text-muted-foreground">{p.desc}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border/60 bg-surface-elevated px-3 py-1 text-xs text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
