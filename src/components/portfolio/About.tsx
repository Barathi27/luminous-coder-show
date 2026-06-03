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
              I'm Barathi Banki — a B.Tech Information Technology student at MVGR College of
              Engineering (CGPA 9.34), passionate about web development, problem solving, and
              building things that actually ship.
            </p>
            <p>
              I'm currently sharpening my DSA in C++ (50+ LeetCode problems, 100-day badge),
              exploring AI/ML through my virtual internship at EduSkills, and contributing to
              open-source projects on GitHub. I love the <em className="text-foreground">full</em>
              journey — from clean front-end UIs to thinking through backend architecture.
            </p>
            <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
              {[
                ["Education", "B.Tech IT · MVGR (2022–2028)"],
                ["CGPA", "9.34 / 10.00"],
                ["Based in", "Vizianagaram, AP — open to remote"],
                ["Focus", "Web Dev · DSA · AI/ML"],
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
