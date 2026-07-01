import {
  Home,
  User,
  Wrench,
  FolderGit2,
  Palette,
  Briefcase,
  Github,
  Mail,
  Command,
} from "lucide-react";

const NAV = [
  { label: "Home", icon: Home, href: "#home" },
  { label: "About", icon: User, href: "#about" },
  { label: "Skills", icon: Wrench, href: "#skills" },
  { label: "Projects", icon: FolderGit2, href: "#projects" },
  { label: "Designs", icon: Palette, href: "#designs" },
  { label: "Experience", icon: Briefcase, href: "#experience" },
  { label: "GitHub", icon: Github, href: "#github" },
  { label: "Contact", icon: Mail, href: "#contact" },
];

export function PortfolioSidebar({ onOpenCmd }: { onOpenCmd: () => void }) {
  return (
    <aside className="pointer-events-none fixed inset-y-0 left-0 z-40 hidden w-20 flex-col items-center justify-between py-6 lg:flex">
      <div className="pointer-events-auto flex flex-col items-center gap-4">
        <a
          href="#home"
          className="grid h-11 w-11 place-items-center rounded-xl glass text-[color:var(--color-signal)] font-mono text-sm font-bold"
        >
          MR
        </a>
        <nav className="glass mt-2 flex flex-col items-center gap-1 rounded-2xl p-2">
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              title={n.label}
              className="group relative grid h-10 w-10 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-[color:var(--color-accent)] hover:text-[color:var(--color-signal)]"
            >
              <n.icon className="h-4 w-4" />
              <span className="pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-md glass px-2 py-1 text-xs opacity-0 transition-opacity group-hover:opacity-100">
                {n.label}
              </span>
            </a>
          ))}
        </nav>
      </div>
      <button
        onClick={onOpenCmd}
        className="pointer-events-auto group flex flex-col items-center gap-1.5 rounded-2xl glass-strong px-2.5 py-3 text-muted-foreground transition-all hover:text-[color:var(--color-signal)]"
      >
        <Command className="h-4 w-4" />
        <span className="font-mono text-[10px] leading-tight">⌘K</span>
      </button>
    </aside>
  );
}

export function MobileTopBar({ onOpenCmd }: { onOpenCmd: () => void }) {
  return (
    <div className="fixed inset-x-0 top-0 z-40 flex items-center justify-between px-4 py-3 lg:hidden">
      <a href="#home" className="grid h-10 w-10 place-items-center rounded-xl glass text-[color:var(--color-signal)] font-mono font-bold">
        MR
      </a>
      <button
        onClick={onOpenCmd}
        className="flex items-center gap-2 rounded-full glass px-3 py-2 font-mono text-xs text-muted-foreground"
      >
        <Command className="h-3.5 w-3.5" /> ⌘K
      </button>
    </div>
  );
}