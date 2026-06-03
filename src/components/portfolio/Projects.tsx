import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

const projects = [
  {
    img: p1,
    tag: "Open Source · 2026",
    title: "AI Study Platform",
    desc: "An AI-powered learning platform that generates personalized study material from user input. Built end-to-end with a Java/Python backend and a responsive HTML/CSS/JS front end, published as open source on GitHub.",
    stack: ["Java", "Python", "HTML", "CSS", "JavaScript", "Git"],
    href: "https://github.com/",
  },
  {
    img: p2,
    tag: "Internship · 2026",
    title: "ML Pipelines @ EduSkills",
    desc: "Built and evaluated machine learning pipelines covering data preprocessing, feature engineering, and model training with scikit-learn and TensorFlow, plus data analysis workflows in NumPy, Pandas, and Matplotlib.",
    stack: ["Python", "scikit-learn", "TensorFlow", "Pandas"],
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
