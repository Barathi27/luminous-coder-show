export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground font-mono text-sm">
            b.
          </span>
          <div>
            <div className="text-sm font-medium">Barathi</div>
            <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              MERN Stack Developer · © {new Date().getFullYear()}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
          {[
            ["GitHub", "#"],
            ["LinkedIn", "#"],
            ["LeetCode", "#"],
            ["Email", "mailto:barathibanki07@gmail.com"],
          ].map(([l, h]) => (
            <a key={l} href={h} className="hover:text-foreground">
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
