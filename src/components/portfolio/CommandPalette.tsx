import { useEffect, useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Home,
  User,
  Wrench,
  FolderGit2,
  Palette,
  Briefcase,
  Github,
  Mail,
  Download,
  Linkedin,
} from "lucide-react";

const NAV = [
  { id: "home", label: "Home", icon: Home, href: "#home" },
  { id: "about", label: "About", icon: User, href: "#about" },
  { id: "skills", label: "Skills", icon: Wrench, href: "#skills" },
  { id: "projects", label: "Projects", icon: FolderGit2, href: "#projects" },
  { id: "designs", label: "Designs", icon: Palette, href: "#designs" },
  { id: "experience", label: "Experience", icon: Briefcase, href: "#experience" },
  { id: "github", label: "GitHub", icon: Github, href: "#github" },
  { id: "contact", label: "Contact", icon: Mail, href: "#contact" },
];

const ACTIONS = [
  { id: "cv", label: "Download CV", icon: Download, href: "#contact" },
  { id: "li", label: "Open LinkedIn", icon: Linkedin, href: "#contact" },
  { id: "gh", label: "Open GitHub Profile", icon: Github, href: "#github" },
];

export function CommandPalette({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onOpenChange]);

  const go = (href: string) => {
    onOpenChange(false);
    requestAnimationFrame(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Type a command or search…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigate">
          {NAV.map((n) => (
            <CommandItem key={n.id} onSelect={() => go(n.href)}>
              <n.icon className="mr-2 h-4 w-4 text-[color:var(--color-signal)]" />
              {n.label}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actions">
          {ACTIONS.map((a) => (
            <CommandItem key={a.id} onSelect={() => go(a.href)}>
              <a.icon className="mr-2 h-4 w-4 text-[color:var(--color-signal)]" />
              {a.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}

export function useCommandPalette() {
  const [open, setOpen] = useState(false);
  return { open, setOpen };
}