import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Download,
  Code2,
  Palette,
  Server,
  Database,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Globe,
  Smartphone,
  Layout,
  ShoppingBag,
  Gamepad2,
  Cpu,
  Activity,
  ChevronRight,
  ChevronLeft,
  ExternalLink,
  Circle,
  Briefcase,
  GraduationCap,
  Figma,
  X,
  Dribbble,
  GitBranch,
  GitCommit,
  Flame,
  FolderGit2,
} from "lucide-react";
import portrait from "@/assets/portrait.png";
// Featured Project Images
import threatWatchPreview from "@/assets/desktop image threat watch.jpeg";
import osAiPreview from "@/assets/os-ai.svg";
import connectXPreview from "@/assets/desktop image connect x.jpeg";
import flowGoPreview from "@/assets/desktop image flow go.jpeg";
import tubbzPreview from "@/assets/desktop image tubbz.jpeg";
import processSchedulerPreview from "@/assets/desktop image Process Scheduler.jpeg";
// Design Showcase Images
import threatWatchDesign from "@/assets/mobile screen threat watch.png";
import osAiDesign from "@/assets/mobile screen os ai.png";
import connectXDesign from "@/assets/connect x mobile screen.png";
import flowGoDesign from "@/assets/mobile screen flow go.png";
import { WireframeCube } from "@/components/portfolio/WireframeCube";
import {
  CommandPalette,
  useCommandPalette,
} from "@/components/portfolio/CommandPalette";
import {
  PortfolioSidebar,
  MobileTopBar,
} from "@/components/portfolio/Sidebar";
import { GithubHeatmap } from "@/components/portfolio/GithubHeatmap";
import * as TechIcons from "@/components/portfolio/TechIcons";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muneeb Rehman — Frontend Developer & UI/UX Designer" },
      {
        name: "description",
        content:
          "Portfolio of Muneeb Rehman: frontend developer and UI/UX designer crafting fast, accessible web experiences with React, TypeScript and Figma.",
      },
      { property: "og:title", content: "Muneeb Rehman — Frontend Developer & UI/UX Designer" },
      {
        property: "og:description",
        content:
          "Frontend developer & UI/UX designer. React, TypeScript, Figma. Selected projects, design work and contact.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  const cmd = useCommandPalette();
  return (
    <div className="portfolio-ambient relative min-h-screen overflow-hidden text-foreground">
      <PortfolioSidebar onOpenCmd={() => cmd.setOpen(true)} />
      <MobileTopBar onOpenCmd={() => cmd.setOpen(true)} />
      <CommandPalette open={cmd.open} onOpenChange={cmd.setOpen} />

      <main className="relative z-10 mx-auto max-w-[1280px] px-3 pb-16 pt-16 sm:px-4 sm:pb-24 sm:pt-18 lg:pl-28 lg:pr-8 lg:pb-24 lg:pt-10">
        <Hero />
        <About />
        <WhyHireMe />
        <Skills />
        <FeaturedProject />
        <Achievements />
        <CurrentlyLearning />
        <DesignShowcase />
        <Experience />
        <TechAndGithub />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-2">
      <span className="h-px w-6 bg-[color:var(--color-signal)]" />
      <span className="label-mono">// {children}</span>
    </div>
  );
}

function Reveal({
  children,
  className,
  delay = 0,
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);
  return (
    <div
      ref={ref}
      className={`transition-[transform,opacity] duration-700 ${className ?? ""} ${
        visible
          ? "translate-y-0 scale-100 opacity-100"
          : "translate-y-8 scale-[0.985] opacity-0"
      }`}
      style={{
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay: `${delay}ms`,
        willChange: visible ? "auto" : "transform, opacity",
      }}
    >
      {children}
    </div>
  );
}


/* ---------------- HERO ---------------- */

function Hero() {
  const [resumePreviewOpen, setResumePreviewOpen] = useState(false);

  return (
    <section id="home" className="grid items-center gap-4 pt-2 sm:pt-4 lg:grid-cols-12 lg:pt-6">
      {/* Main hero card */}
      <div className="glass relative col-span-12 flex min-h-[360px] flex-col justify-center overflow-hidden rounded-3xl p-4 sm:min-h-[420px] sm:p-6 lg:col-span-8 lg:min-h-0 lg:justify-start lg:p-12">
        <div className="relative z-10">
          <SectionLabel>portfolio // online</SectionLabel>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[color:var(--color-signal)]/30 bg-[color:var(--color-signal)]/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.24em] text-[color:var(--color-signal)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-signal)]" />
            Available for Full-Time • Freelance • Remote
          </div>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Frontend
            <br />
            <span className="text-signal-gradient">Developer</span>
            <span className="ml-1 inline-block h-[0.9em] w-[3px] translate-y-1 bg-[color:var(--color-signal)] animate-blink" />
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            I build fast, responsive, and accessible web applications using React, TypeScript, and modern frontend technologies. Passionate about transforming complex ideas into clean, intuitive digital experiences with a strong focus on performance, usability, and scalable UI architecture.
          </p>
          <div className="mt-6 flex flex-col flex-wrap items-stretch gap-2.5 sm:mt-7 sm:flex-row sm:items-center sm:gap-3">
            <a
              href="#projects"
              className="btn-water-solid group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium glow-ring sm:justify-start"
            >
              <span className="inline-flex items-center gap-2">
                Explore my work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
            <button
              type="button"
              onClick={() => setResumePreviewOpen(true)}
              className="btn-water inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium sm:justify-start"
            >
              <span className="inline-flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download CV
              </span>
            </button>
          </div>
        </div>

        {/* Wireframe cube backdrop */}
        <div className="pointer-events-none absolute -right-6 -top-8 h-[280px] w-[280px] opacity-95 sm:-right-8 sm:-top-8 sm:h-[360px] sm:w-[360px] lg:-right-10 lg:-top-10 lg:h-[520px] lg:w-[520px]">
          <WireframeCube className="h-full w-full" />
        </div>

        {/* Grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 70% 30%, black, transparent 75%)",
          }}
        />
      </div>

      {/* ID card */}
      <aside className="glass-strong col-span-12 flex flex-col gap-4 rounded-3xl p-4 sm:p-6 lg:col-span-4">
        <div className="flex items-center justify-between">
          <span className="label-mono">// system_id</span>
          <span className="flex items-center gap-1.5 rounded-full bg-[color:var(--color-signal)]/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-[color:var(--color-signal)]">
            <span className="h-1.5 w-1.5 animate-[pulse-glow_1.6s_ease-in-out_infinite] rounded-full bg-[color:var(--color-signal)]" />
            online
          </span>
        </div>

        <IdRow k="Role" v="Frontend Dev · UI/UX" />
        <IdRow k="Exp" v="1+ year shipping" />
        <IdRow k="Stack" v="React · TS · Figma" />
        <IdRow k="Location" v="Lahore, PK · GMT+5" />

        <div className="mt-auto rounded-2xl border border-dashed border-[color:var(--color-border)] p-3">
          <div className="label-mono mb-1">Currently</div>
          <p className="text-sm">
            Open to <span className="text-[color:var(--color-signal)]">frontend / design</span> roles
            and freelance briefs.
          </p>
        </div>
      </aside>
      <ResumePreviewModal open={resumePreviewOpen} onOpenChange={setResumePreviewOpen} />
    </section>
  );
}

function IdRow({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-dashed border-[color:var(--color-border)] pb-2 last:border-0">
      <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        {k}
      </span>
      <span className="text-sm font-medium">{v}</span>
    </div>
  );
}


/* ---------------- ABOUT ---------------- */

function About() {
  return (
    <section id="about" className="mt-16">
      <SectionLabel>about_me</SectionLabel>
      <h2 className="mb-8 text-3xl font-semibold tracking-tight sm:text-4xl">
        Building thoughtful digital experiences with <span className="text-signal-gradient">precision and purpose.</span>
      </h2>

      <div className="grid gap-4 lg:grid-cols-12">
        <div className="glass relative col-span-12 flex flex-col items-center gap-4 overflow-hidden rounded-3xl p-6 lg:col-span-4">
          <div className="relative">
            <div className="absolute inset-0 -m-6 rounded-full bg-[color:var(--color-signal)] opacity-30 blur-3xl" />
            <img
              src={portrait}
              width={768}
              height={768}
              alt="Portrait of Muneeb Rehman"
              className="relative h-44 w-44 rounded-full object-cover ring-2 ring-[color:var(--color-signal)]/40"
            />
          </div>
          <span className="font-script text-3xl text-[color:var(--color-signal)]">~ Muneeb</span>
          <p className="text-center text-sm leading-6 text-muted-foreground">
            I'm Muneeb Rehman, a Frontend Developer with a passion for building modern, responsive, and user-focused web applications.
          </p>
        </div>

        <div className="col-span-12 grid gap-4 sm:grid-cols-2 lg:col-span-8">
          <AboutCard
            icon={GraduationCap}
            label="// background"
            title="Design-minded developer"
            body="My background in UI/UX design helps me bridge the gap between visual storytelling and technical execution."
          />
          <AboutCard
            icon={Layout}
            label="// stack"
            title="React & TypeScript"
            body="I enjoy turning complex problems into intuitive digital experiences using modern frontend technologies."
          />
          <AboutCard
            icon={Sparkles}
            label="// quality"
            title="Accessible by default"
            body="From wireframes to deployment, I focus on clean code, accessibility, performance, and scalable architecture."
          />
          <AboutCard
            icon={ArrowRight}
            label="// growth"
            title="Always evolving"
            body="I’m constantly learning new tools, refining my workflow, and exploring AI-powered development practices."
          />
        </div>
      </div>
    </section>
  );
}

function AboutCard({
  icon: Icon,
  label,
  title,
  body,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  title: string;
  body: string;
}) {
  return (
    <div className="glass group rounded-3xl p-5 transition-colors hover:border-[color:var(--color-signal)]/40">
      <div className="mb-3 flex items-center gap-2">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-[color:var(--color-signal)]/15 text-[color:var(--color-signal)]">
          <Icon className="h-4 w-4" />
        </span>
        <span className="label-mono">{label}</span>
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}

const WHY_HIRE_ME_CARDS = [
  {
    icon: Activity,
    title: "Performance Focused",
    body: "Optimize applications with lazy loading, code splitting, image optimization, and Core Web Vitals best practices.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    body: "Develop mobile-first interfaces that provide a seamless experience across desktop, tablet, and mobile devices.",
  },
  {
    icon: Sparkles,
    title: "UI/UX Mindset",
    body: "Transform Figma designs into polished, intuitive interfaces with attention to detail and usability.",
  },
  {
    icon: Code2,
    title: "Clean & Scalable Code",
    body: "Build reusable React components using TypeScript and maintainable frontend architecture.",
  },
  {
    icon: Layout,
    title: "Accessibility First",
    body: "Follow semantic HTML, keyboard navigation, proper color contrast, and accessibility best practices.",
  },
  {
    icon: Globe,
    title: "AI-Assisted Development",
    body: "Leverage Cursor AI, GitHub Copilot, ChatGPT, Claude, Lovable, and Bolt.new to improve productivity while maintaining production-quality code.",
  },
];

function WhyHireMe() {
  return (
    <section id="why-hire-me" className="mt-16">
      <Reveal>
        <SectionLabel>why_hire_me</SectionLabel>
      </Reveal>
      <Reveal delay={80}>
        <div className="mb-8">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Why <span className="text-signal-gradient">Hire Me</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
            I combine strong UI/UX thinking with modern frontend engineering to create responsive, accessible, and high-performance web applications. My focus is on building clean, scalable, and user-centered digital experiences that solve real problems.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {WHY_HIRE_ME_CARDS.map((card, index) => {
          const Icon = card.icon;
          return (
            <Reveal key={card.title} delay={index * 70}>
              <div className="group h-full rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--color-signal)]/40 hover:shadow-[0_0_24px_-10px_color-mix(in_oklab,var(--color-signal)_55%,transparent)]">
                <div className="mb-4 flex items-center gap-2">
                  <span className="grid h-9 w-9 place-items-center rounded-2xl bg-[color:var(--color-signal)]/15 text-[color:var(--color-signal)]">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="label-mono">// value</span>
                </div>
                <h3 className="text-lg font-semibold tracking-tight">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{card.body}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

/* ---------------- SKILLS ---------------- */

const SKILL_CARDS = [
  {
    icon: Code2,
    label: "frontend",
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    icon: Palette,
    label: "ui_ux",
    title: "UI / UX",
    items: ["Figma", "Prototyping", "Design systems", "User flows"],
  },
  {
    icon: Server,
    label: "backend",
    title: "Backend",
    items: ["Node", "Firebase", "Socket.io", "REST"],
  },
  {
    icon: Database,
    label: "database",
    title: "Database",
    items: ["PostgreSQL", "MongoDB", "Supabase", "Prisma"],
  },
];

const STATS = [
  { k: "15+", v: "Projects shipped" },
  { k: "1+", v: "Year experience" },
  { k: "10+", v: "Technologies" },
  { k: "5+", v: "Certifications" },
];

function Skills() {
  return (
    <section id="skills" className="mt-16">
      <Reveal>
        <SectionLabel>technical_expertise</SectionLabel>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mb-8 text-3xl font-semibold tracking-tight sm:text-4xl">
          A toolkit tuned for <span className="text-signal-gradient">shipping.</span>
        </h2>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SKILL_CARDS.map((s, i) => (
          <Reveal key={s.title} delay={120 + i * 90}>
            <div className="glass group relative overflow-hidden rounded-3xl p-5 transition-all hover:-translate-y-0.5 hover:border-[color:var(--color-signal)]/40">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[color:var(--color-signal)]/15 text-[color:var(--color-signal)] transition-transform group-hover:scale-110">
                <s.icon className="h-5 w-5" />
              </span>
              <div className="mt-4 flex items-center justify-between">
                <h3 className="text-base font-semibold">{s.title}</h3>
                <span className="label-mono">// {s.label}</span>
              </div>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-[color:var(--color-border)] px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <Counters />
      </Reveal>
    </section>
  );
}


function Counters() {
  return (
    <div className="glass mt-4 grid grid-cols-2 gap-2 rounded-3xl p-2 sm:grid-cols-4">
      {STATS.map((s, i) => (
        <Reveal key={s.v} delay={i * 110}>
          <div className="group rounded-2xl bg-[color:var(--color-surface)]/60 p-5 text-center transition-all hover:-translate-y-0.5 hover:bg-[color:var(--color-surface)]/80 hover:shadow-[0_0_28px_-8px_color-mix(in_oklab,var(--color-signal)_55%,transparent)]">
            <div className="text-4xl font-semibold text-signal-gradient">
              <Counter target={s.k} delay={i * 120} />
            </div>
            <div className="mt-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              {s.v}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function Counter({ target, delay }: { target: string; delay: number }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState("0");
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const num = parseInt(target, 10) || 0;
    const suffix = target.replace(/[0-9]/g, "");
    let raf = 0;
    const observer = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        observer.disconnect();
        const start = performance.now() + delay;
        const dur = 1200;
        const step = (t: number) => {
          const p = Math.max(0, Math.min(1, (t - start) / dur));
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(Math.floor(num * eased) + suffix);
          if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, delay]);
  return <span ref={ref}>{display}</span>;
}

/* ---------------- FEATURED PROJECT ---------------- */

const FEATURED = [
  {
    name: "Connect X",
    tag: "realtime chatting app",
    blurb:
      "Modern real-time chatting experience with instant messaging, presence, rich conversations, and a polished mobile-first UI.",
    tech: ["React", "Firebase", "Tailwind", "Socket.io"],
    highlights: ["Responsive Design", "TypeScript", "Performance Optimized", "Mobile First"],
    caseStudyKey: "connect-x",
    figmaUrl: "https://www.figma.com/design/WAPMhZFr5XftEBlrzX8eUb/Connect-X?node-id=0-1&p=f&t=lvtZ7Py9UNg8Iu1j-0",
    image: connectXPreview,
  },
  {
    name: "Threat Watch",
    tag: "security dashboard",
    blurb:
      "Django and Chart.js dashboard surfacing live threat telemetry with custom filters, timeline views, and incident monitoring.",
    tech: ["Django", "Chart.js", "Postgres"],
    highlights: ["Responsive Design", "Performance Optimized", "Modern UI", "GitHub Repository"],
    caseStudyKey: "threat-watch",
    github: "https://github.com/rmuneeb-dev/Threat-watch",
    image: threatWatchPreview,
  },
  {
    name: "Flow Go",
    tag: "audio accessories store",
    blurb:
      "Online store for airbuds, headphones, earbuds, wireless audio accessories, and related electronics with a smooth shopping experience.",
    tech: ["React", "TypeScript", "Stripe", "Tailwind"],
    highlights: ["Responsive Design", "TypeScript", "Modern UI", "Component Based"],
    caseStudyKey: "flow-go",
    figmaUrl: "https://www.figma.com/design/ukQrtvZbRGlKU89rBKCc38/Flow-Go-Design?node-id=0-1&p=f&t=P0sAy1GRxNz4Aptw-0",
    image: flowGoPreview,
  },
  {
    name: "Tubbz",
    tag: "sticker shopping app",
    blurb:
      "Sticker collection and shopping application focused on browsing, favorites, and a delightful digital storefront experience.",
    tech: ["Next.js", "React", "Postgres", "Stripe"],
    highlights: ["Responsive Design", "Modern UI", "Mobile First", "SEO Friendly"],
    caseStudyKey: "tubbz",
    figmaUrl: "https://www.figma.com/design/SbAAe9JQxiRAxOBPxc5iSw/Tubbzz?node-id=0-1&p=f&t=9bBOQE34M2h6adKp-0",
    image: tubbzPreview,
  },
  {
    name: "Process Scheduler",
    tag: "OS simulation",
    blurb: "Visual simulator for FCFS, SJF, and Round Robin scheduling with live process timelines and queue behavior.",
    tech: ["C++", "SFML", "Algorithms"],
    highlights: ["Performance Optimized", "Component Based", "Modern UI", "GitHub Repository"],
    caseStudyKey: "process-scheduler",
    github: "https://github.com/rmuneeb-dev/OS-Ai-command-center-",
    image: processSchedulerPreview,
  },
];

const RESUME_FILE_URL = new URL("../Muneeb_Rehman_CV.pdf.pdf", import.meta.url).href;

const CASE_STUDY_FILES: Record<
  string,
  {
    title: string;
    fileUrl: string;
    previewLabel: string;
    summary: string;
    context: string;
    challenge: string;
    approach: string[];
    outcome: string;
    stack: string[];
    highlights: string[];
  }
> = {
  "connect-x": {
    title: "Connect X",
    fileUrl: new URL("../connect x.pdf", import.meta.url).href,
    previewLabel: "Connect X case study",
    summary:
      "A realtime conversation platform designed for low-friction collaboration, presence-aware interactions, and a polished mobile-first experience.",
    context:
      "Connect X was shaped as a social product that needed to feel fast, welcoming, and dependable from the first message to the latest thread. The experience had to balance conversational clarity with thoughtful motion and state feedback.",
    challenge:
      "The product needed strong information hierarchy without overwhelming users, while keeping real-time interactions visually calm and responsive across small and large screens.",
    approach: [
      "Defined an interaction model that emphasized quick message flow, visible presence, and effortless navigation between chats and channels.",
      "Crafted a UI system around dense content, clear spacing, and subtle motion cues so the interface felt reactive without becoming noisy.",
      "Prioritized accessibility, touch targets, and consistent visual language across desktop and mobile surfaces.",
    ],
    outcome:
      "The final experience feels like a premium communication tool: contextual, responsive, and designed to make everyday conversations simpler to follow and enjoy.",
    stack: ["React", "Firebase", "Socket.io", "Tailwind"],
    highlights: [
      "Presence-aware interaction model",
      "Adaptive layouts for mobile and desktop",
      "Faster, clearer conversational flow",
    ],
  },
  "threat-watch": {
    title: "Threat Watch",
    fileUrl: new URL("../threat watch.pdf", import.meta.url).href,
    previewLabel: "Threat Watch case study",
    summary:
      "A security operations dashboard that turns complex telemetry into a clear, actionable operational surface for analysts and teams.",
    context:
      "Threat Watch was built to help operators understand shifting risk signals without losing context across incidents, timelines, and detection data.",
    challenge:
      "The hardest part was making high-volume security data approachable, while still preserving the detail required for confident decision-making.",
    approach: [
      "Structured the dashboard into focused views for alerts, incidents, and timelines so operators could scan the state of the environment quickly.",
      "Introduced filterable telemetry and custom views to support both broad monitoring and targeted review workflows.",
      "Used a restrained visual language to emphasize severity, status, and movement across the system.",
    ],
    outcome:
      "The dashboard now presents live security information in a way that feels structured, calm, and decision-ready rather than overly technical or cluttered.",
    stack: ["Django", "Chart.js", "Postgres", "Python"],
    highlights: [
      "Real-time incident monitoring",
      "Timeline-driven review experience",
      "Clear operational hierarchy",
    ],
  },
  "flow-go": {
    title: "Flow Go",
    fileUrl: new URL("../flow go case study.pdf", import.meta.url).href,
    previewLabel: "Flow Go case study",
    summary:
      "An audio accessories storefront designed to make discovery, comparison, and checkout feel effortless from first impression to purchase.",
    context:
      "Flow Go needed to balance product storytelling with conversion-focused e-commerce patterns so customers could browse confidently and move quickly to checkout.",
    challenge:
      "The experience had to feel premium and polished while still remaining highly functional for product discovery, purchase decisions, and cart flow.",
    approach: [
      "Created a product-led layout with strong imagery, comparative content, and clear calls to action across the purchase journey.",
      "Defined a commerce system that supported quick browsing, value communication, and a frictionless checkout experience.",
      "Pairing visual strategy with structured UI patterns helped the store feel elevated without sacrificing clarity.",
    ],
    outcome:
      "The storefront now presents audio products with the feel of a modern lifestyle brand while keeping the path to conversion streamlined and intuitive.",
    stack: ["React", "TypeScript", "Stripe", "Tailwind"],
    highlights: [
      "Conversion-oriented product experience",
      "Streamlined commerce flow",
      "Premium product presentation",
    ],
  },
  tubbz: {
    title: "Tubbz",
    fileUrl: new URL("../tubbz.pdf", import.meta.url).href,
    previewLabel: "Tubbz case study",
    summary:
      "A playful sticker shopping experience focused on browsing, favorites, and a delightful digital storefront with strong personality.",
    context:
      "Tubbz was designed as a discovery-driven shopping experience where personality, visual delight, and product curation all mattered equally.",
    challenge:
      "The interface needed to feel lively and expressive while still providing a clean, memorable product discovery experience with simple navigation.",
    approach: [
      "Shaped the experience around collectible browsing, favorites, and expressive presentation so the catalog felt inviting rather than transactional.",
      "Used a bright visual system and structured product cards to create momentum while preserving product clarity.",
      "Balanced visual playfulness with strong hierarchy to keep browsing intuitive.",
    ],
    outcome:
      "The shopping experience feels personable and engaging, turning sticker discovery into a light, enjoyable journey rather than a purely utilitarian task.",
    stack: ["Next.js", "React", "Postgres", "Stripe"],
    highlights: [
      "Curated product discovery",
      "Favorites-driven shopping flow",
      "Bright, memorable visual identity",
    ],
  },
  "process-scheduler": {
    title: "Process Scheduler",
    fileUrl: new URL("../processScheduler.pdf", import.meta.url).href,
    previewLabel: "Process Scheduler case study",
    summary:
      "A systems-focused simulator that visualizes CPU scheduling behavior with clear timelines, queue states, and step-by-step execution traces.",
    context:
      "The project was built to make operating system concepts tangible by translating scheduling algorithms into a visual, interactive experience.",
    challenge:
      "The interface needed to communicate algorithmic behavior clearly without sacrificing the technical detail required for understanding the process lifecycle.",
    approach: [
      "Mapped each scheduling strategy into a consistent visual language with queue states, execution order, and waiting time indicators.",
      "Built the simulator to reveal each transition as the user stepped through the process, making behavior easier to inspect and compare.",
      "Used a compact dashboard and clear labels to keep the experience readable even when the process flow became more complex.",
    ],
    outcome:
      "The simulator makes operating system scheduling concepts easier to study and compare by turning abstract behavior into something observable and interactive.",
    stack: ["C++", "SFML", "Algorithms", "Systems"],
    highlights: [
      "Interactive scheduling visualization",
      "Step-by-step process tracing",
      "Clear comparison between algorithms",
    ],
  },
};

function CaseStudyModal({
  open,
  onOpenChange,
  projectKey,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  projectKey: string | null;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!open) {
      setIsVisible(false);
      document.body.style.overflow = "";
      return;
    }

    const frame = window.requestAnimationFrame(() => setIsVisible(true));
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onOpenChange(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onOpenChange]);

  if (!open || !projectKey) return null;

  const entry = CASE_STUDY_FILES[projectKey];
  if (!entry) return null;

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-black/70 p-3 backdrop-blur-sm sm:p-6"
      onClick={() => onOpenChange(false)}
    >
      <div
        className={`relative z-10 flex w-full max-w-6xl flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[color:var(--color-background)]/90 shadow-[0_0_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl transition-all duration-300 ${
          isVisible ? "scale-100 opacity-100" : "scale-[0.98] opacity-0"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-4 sm:px-6">
          <div>
            <div className="label-mono">// case_study</div>
            <h3 className="mt-1 text-lg font-semibold tracking-tight">{entry.title}</h3>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={entry.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-water inline-flex items-center gap-1.5 rounded-full px-3 py-2 font-mono text-[11px] uppercase tracking-widest"
            >
              <span className="inline-flex items-center gap-1.5">
                <ExternalLink className="h-3 w-3" />
                Open file
              </span>
            </a>
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="grid h-9 w-9 place-items-center rounded-full border border-[color:var(--color-border)] transition-colors hover:border-[color:var(--color-signal)] hover:text-[color:var(--color-signal)]"
              aria-label="Close case study"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="max-h-[80vh] overflow-y-auto p-3 sm:p-6">
          <div
            className={`overflow-hidden rounded-[24px] border border-white/10 bg-[color:var(--color-surface)]/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-500 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <div className="border-b border-white/10 bg-black/20 px-5 py-5 sm:px-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-[color:var(--color-signal)]/30 bg-[color:var(--color-signal)]/[0.08] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-signal)]">
                  developer_notes
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                  case study
                </span>
              </div>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                {entry.summary}
              </p>
            </div>

            <div className="space-y-5 px-5 py-6 sm:px-8 sm:py-8">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5 sm:p-6">
                <h4 className="text-lg font-semibold tracking-tight text-[color:var(--color-signal)]">
                  Context
                </h4>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{entry.context}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5 sm:p-6">
                <h4 className="text-lg font-semibold tracking-tight text-[color:var(--color-signal)]">
                  Challenge
                </h4>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{entry.challenge}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="text-lg font-semibold tracking-tight text-[color:var(--color-signal)]">
                    Approach
                  </h4>
                  <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                    implementation notes
                  </span>
                </div>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
                  {entry.approach.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--color-signal)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-5 sm:p-6">
                  <h4 className="text-lg font-semibold tracking-tight text-[color:var(--color-signal)]">
                    Outcome
                  </h4>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{entry.outcome}</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-5 sm:p-6">
                  <h4 className="text-lg font-semibold tracking-tight text-[color:var(--color-signal)]">
                    Stack
                  </h4>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {entry.stack.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 border-t border-white/10 pt-4">
                    <h4 className="text-lg font-semibold tracking-tight text-[color:var(--color-signal)]">
                      Impact
                    </h4>
                    <ul className="mt-3 space-y-2 text-sm leading-7 text-muted-foreground">
                      {entry.highlights.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--color-signal)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResumePreviewModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!open) {
      setIsVisible(false);
      document.body.style.overflow = "";
      return;
    }

    const frame = window.requestAnimationFrame(() => setIsVisible(true));
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onOpenChange(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-black/70 p-3 backdrop-blur-sm sm:p-6"
      onClick={() => onOpenChange(false)}
    >
      <div
        className={`relative z-10 flex w-full max-w-6xl flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[color:var(--color-background)]/90 shadow-[0_0_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl transition-all duration-300 ${
          isVisible ? "scale-100 opacity-100" : "scale-[0.98] opacity-0"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-4 sm:px-6">
          <div>
            <div className="label-mono">// resume</div>
            <h3 className="mt-1 text-lg font-semibold tracking-tight">Muneeb Rehman</h3>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={RESUME_FILE_URL}
              download="Muneeb_Rehman_CV.pdf"
              className="btn-water inline-flex items-center gap-1.5 rounded-full px-3 py-2 font-mono text-[11px] uppercase tracking-widest"
            >
              <span className="inline-flex items-center gap-1.5">
                <Download className="h-3 w-3" />
                Download
              </span>
            </a>
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="grid h-9 w-9 place-items-center rounded-full border border-[color:var(--color-border)] transition-colors hover:border-[color:var(--color-signal)] hover:text-[color:var(--color-signal)]"
              aria-label="Close resume"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="max-h-[80vh] overflow-y-auto p-3 sm:p-6">
          <div
            className={`overflow-hidden rounded-[24px] border border-white/10 bg-[color:var(--color-surface)]/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-500 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <div className="border-b border-white/10 bg-black/20 px-5 py-5 sm:px-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-[color:var(--color-signal)]/30 bg-[color:var(--color-signal)]/[0.08] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-signal)]">
                  developer_profile
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                  résumé
                </span>
              </div>
              <div className="mt-4 space-y-1">
                <p className="text-sm text-muted-foreground">Lahore, Pakistan | +923265936546 | rmuneeb997@gmail.com</p>
              </div>
            </div>

            <div className="space-y-5 px-5 py-6 sm:px-8 sm:py-8">
              {/* Professional Summary */}
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5 sm:p-6">
                <h4 className="text-lg font-semibold tracking-tight text-[color:var(--color-signal)]">
                  Professional Summary
                </h4>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Frontend Developer and UI/UX Designer with hands-on experience designing and developing responsive, user-centered web applications. Skilled in translating Figma designs into clean, maintainable frontend solutions using HTML, CSS, JavaScript, React, and modern development tools. Experienced in WordPress development, UI/UX design, and Agile collaboration to deliver intuitive digital experiences.
                </p>
              </div>

              {/* Technical Skills */}
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5 sm:p-6">
                <h4 className="text-lg font-semibold tracking-tight text-[color:var(--color-signal)]">
                  Technical Skills
                </h4>
                <div className="mt-4 space-y-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-foreground">Frontend</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Vite", "Bootstrap", "Tailwind CSS", "Three.js", "GSAP"].map((skill) => (
                        <span key={skill} className="rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1 text-xs text-muted-foreground">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-foreground">UI/UX</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {["Figma", "Wireframing", "Prototyping", "Design Systems", "Responsive Design"].map((skill) => (
                        <span key={skill} className="rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1 text-xs text-muted-foreground">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-foreground">Programming</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {["Python", "C++", "SQL", "REST APIs", "Flask", "FastAPI"].map((skill) => (
                        <span key={skill} className="rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1 text-xs text-muted-foreground">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-foreground">Tools & Platforms</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {["WordPress", "Elementor", "Git", "GitHub", "VS Code", "Agile", "Cross-Browser Testing"].map((skill) => (
                        <span key={skill} className="rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1 text-xs text-muted-foreground">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Experience */}
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5 sm:p-6">
                <h4 className="text-lg font-semibold tracking-tight text-[color:var(--color-signal)]">
                  Professional Experience
                </h4>
                <div className="mt-4 space-y-4">
                  <div>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-sm font-semibold text-foreground">Frontend Developer & UI/UX Designer</p>
                      <span className="text-xs text-muted-foreground">Dec 2025 – Present</span>
                    </div>
                    <p className="text-xs text-[color:var(--color-signal)]">BitsLab Studio | Lahore, Pakistan</p>
                    <ul className="mt-2 space-y-1">
                      <li className="flex gap-2 text-xs leading-5 text-muted-foreground">
                        <span className="text-[color:var(--color-signal)]">•</span>
                        <span>Designed and translated Figma wireframes into responsive, pixel-perfect web interfaces using HTML, CSS, and JavaScript.</span>
                      </li>
                      <li className="flex gap-2 text-xs leading-5 text-muted-foreground">
                        <span className="text-[color:var(--color-signal)]">•</span>
                        <span>Collaborated on UI/UX decisions to improve usability, accessibility, and visual consistency across projects.</span>
                      </li>
                      <li className="flex gap-2 text-xs leading-5 text-muted-foreground">
                        <span className="text-[color:var(--color-signal)]">•</span>
                        <span>Built reusable frontend components and responsive layouts while working in an Agile development environment.</span>
                      </li>
                      <li className="flex gap-2 text-xs leading-5 text-muted-foreground">
                        <span className="text-[color:var(--color-signal)]">•</span>
                        <span>Optimized frontend performance through testing, debugging, and cross-browser compatibility improvements.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Featured Projects */}
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5 sm:p-6">
                <h4 className="text-lg font-semibold tracking-tight text-[color:var(--color-signal)]">
                  Featured Projects
                </h4>
                <div className="mt-4 space-y-3">
                  <div className="border-l-2 border-[color:var(--color-signal)]/30 pl-4">
                    <p className="text-sm font-semibold text-foreground">Threat Watch – Security Monitoring System</p>
                    <p className="text-xs text-muted-foreground">HTML, CSS, JavaScript, Python, Flask, FastAPI</p>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">Developed a security monitoring web application with ML-powered threat detection, responsive dashboards, and backend API integration.</p>
                  </div>
                  <div className="border-l-2 border-[color:var(--color-signal)]/30 pl-4">
                    <p className="text-sm font-semibold text-foreground">OS AI Command Center</p>
                    <p className="text-xs text-muted-foreground">React, TypeScript, Vite, Tailwind CSS, Three.js, GSAP</p>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">Built a premium AI dashboard featuring reusable React components, interactive widgets, responsive layouts, and smooth animations.</p>
                  </div>
                  <div className="border-l-2 border-[color:var(--color-signal)]/30 pl-4">
                    <p className="text-sm font-semibold text-foreground">Flow Go – Mobile Marketplace App</p>
                    <p className="text-xs text-muted-foreground">Figma</p>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">Designed a complete mobile marketplace application from wireframes to high-fidelity prototypes with a scalable design system and user-centered shopping experience.</p>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5 sm:p-6">
                <h4 className="text-lg font-semibold tracking-tight text-[color:var(--color-signal)]">
                  Education
                </h4>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-foreground">BS Computer Science</p>
                  <p className="text-xs text-[color:var(--color-signal)]">University of South Asia, Lahore, Pakistan</p>
                  <p className="mt-1 text-xs text-muted-foreground">2022 – Present</p>
                </div>
              </div>

              {/* Certifications */}
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5 sm:p-6">
                <h4 className="text-lg font-semibold tracking-tight text-[color:var(--color-signal)]">
                  Certifications
                </h4>
                <ul className="mt-4 space-y-2">
                  <li className="flex gap-2">
                    <span className="text-[color:var(--color-signal)]">→</span>
                    <span className="text-xs text-muted-foreground"><strong className="text-foreground">AI Master Certification</strong> — Artificial Intelligence, Prompt Engineering, Generative AI, AI Automation, No-Code/Low Code AI Tools, AI Productivity, and Modern AI Workflows.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[color:var(--color-signal)]">→</span>
                    <span className="text-xs text-muted-foreground"><strong className="text-foreground">Search Engine Optimization (SEO) Certification</strong> — Keyword Research, On-Page SEO, Technical SEO, Off-Page SEO, Website Optimization, and Performance Analysis.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const LEARNING_CARDS = [
  {
    title: "Next.js",
    status: "In Progress",
    description: "Learning server-side rendering, routing, and production-ready React applications.",
    icon: Server,
  },
  {
    title: "Advanced TypeScript",
    status: "In Progress",
    description: "Improving type safety, generics, utility types, and scalable application architecture.",
    icon: Code2,
  },
  {
    title: "Testing",
    status: "In Progress",
    description: "Learning Vitest, Jest, and Playwright for reliable frontend testing.",
    icon: Cpu,
  },
  {
    title: "Animations",
    status: "In Progress",
    description: "Creating smooth and performant interactions using Framer Motion.",
    icon: Sparkles,
  },
  {
    title: "Performance Optimization",
    status: "In Progress",
    description: "Improving Lighthouse scores, Core Web Vitals, lazy loading, image optimization, and bundle splitting.",
    icon: Activity,
  },
  {
    title: "AI Development Workflow",
    status: "In Progress",
    description: "Using Cursor AI, GitHub Copilot, ChatGPT, Claude, Lovable, and Bolt.new to accelerate development while maintaining clean, production-quality code.",
    icon: Globe,
  },
];

function CurrentlyLearning() {
  return (
    <section id="learning" className="mt-16">
      <Reveal>
        <SectionLabel>currently_learning</SectionLabel>
      </Reveal>
      <Reveal delay={80}>
        <div className="mb-8">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Currently <span className="text-signal-gradient">Learning</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
            I believe continuous learning is essential in frontend development. I'm currently expanding my knowledge in modern frameworks, advanced UI engineering, performance optimization, and AI-assisted development workflows.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {LEARNING_CARDS.map((card, index) => {
          const Icon = card.icon;
          return (
            <Reveal key={card.title} delay={index * 70}>
              <div className="group h-full rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--color-signal)]/40 hover:shadow-[0_0_24px_-10px_color-mix(in_oklab,var(--color-signal)_55%,transparent)]">
                <div className="flex items-center justify-between gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[color:var(--color-signal)]/15 text-[color:var(--color-signal)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-400">
                    {card.status}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{card.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function Achievements() {
  const stats = [
    { value: "10+", label: "Projects Completed" },
    { value: "8+", label: "Technologies Used" },
    { value: "6+", label: "Professional Certifications" },
    { value: "100%", label: "Responsive Design" },
  ];

  return (
    <section id="achievements" className="mt-16">
      <Reveal>
        <SectionLabel>achievements</SectionLabel>
      </Reveal>
      <Reveal delay={80}>
        <div className="mb-8">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            <span className="text-signal-gradient">Achievements</span>
          </h2>
        </div>
      </Reveal>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 100}>
            <div className="glass group rounded-3xl p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--color-signal)]/40 hover:shadow-[0_0_24px_-10px_color-mix(in_oklab,var(--color-signal)_55%,transparent)]">
              <div className="text-4xl font-semibold text-signal-gradient sm:text-5xl">
                <Counter target={stat.value} delay={index * 140} />
              </div>
              <div className="mt-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function FeaturedProject() {
  const [idx, setIdx] = useState(0);
  const [activeCaseStudy, setActiveCaseStudy] = useState<string | null>(null);
  const active = FEATURED[idx];

  return (
    <section id="projects" className="mt-16">
      <SectionLabel>featured_project</SectionLabel>
      <div className="glass grid gap-4 rounded-3xl p-4 sm:gap-6 sm:p-6 lg:grid-cols-12 lg:p-8">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[color:var(--color-signal)]">
              case_study
            </span>
            <span className="font-mono text-[11px] text-muted-foreground">
              {String(idx + 1).padStart(2, "0")} / {String(FEATURED.length).padStart(2, "0")}
            </span>
          </div>
          <h3 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            {active.name}
          </h3>
          <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {active.tag}
          </p>
          <p className="mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
            {active.blurb}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {active.tech.map((t) => (
              <li
                key={t}
                className="rounded-md border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/40 px-2.5 py-1 font-mono text-[10px] sm:text-[11px] text-foreground"
              >
                {t}
              </li>
            ))}
          </ul>

          {active.highlights && active.highlights.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {active.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full border border-[color:var(--color-signal)]/20 bg-[color:var(--color-signal)]/10 px-2.5 py-1 text-[10px] sm:text-[11px] text-[color:var(--color-signal)]"
                >
                  ✓ {highlight}
                </span>
              ))}
            </div>
          )}

          {/* Device mockup: show phone on small screens, laptop on large screens */}
          <div className="mt-6 w-full overflow-hidden">
            <div className="block lg:hidden">
              <DevicePhone name={active.name} image={active.image} />
            </div>
            <div className="hidden lg:block">
              <DeviceLaptop className="w-full" name={active.name} image={active.image} />
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            <button
              onClick={() => setIdx((i) => (i - 1 + FEATURED.length) % FEATURED.length)}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[color:var(--color-border)] hover:border-[color:var(--color-signal)] hover:text-[color:var(--color-signal)]"
              aria-label="Previous project"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => setIdx((i) => (i + 1) % FEATURED.length)}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[color:var(--color-border)] hover:border-[color:var(--color-signal)] hover:text-[color:var(--color-signal)]"
              aria-label="Next project"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            <div className="ml-auto flex flex-wrap items-center gap-2 justify-end">
              {active.caseStudyKey && (
                <button
                  type="button"
                  onClick={() => setActiveCaseStudy(active.caseStudyKey ?? null)}
                  className="btn-water inline-flex items-center gap-1.5 rounded-full px-3 py-2 sm:px-4 font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-[color:var(--color-signal)] whitespace-nowrap"
                >
                  <span className="inline-flex items-center gap-1.5">
                    Case Study <ExternalLink className="h-3 w-3" />
                  </span>
                </button>
              )}
              {active.figmaUrl && (
                <a
                  href={active.figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-water inline-flex items-center gap-1.5 rounded-full px-3 py-2 sm:px-4 font-mono text-[10px] sm:text-[11px] uppercase tracking-widest whitespace-nowrap"
                >
                  <span className="inline-flex items-center gap-1.5">
                    <Figma className="h-3.5 w-3.5" />
                    Figma
                  </span>
                </a>
              )}
              {active.github && (
                <a
                  href={active.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-water inline-flex items-center gap-1.5 rounded-full px-3 py-2 sm:px-4 font-mono text-[10px] sm:text-[11px] uppercase tracking-widest whitespace-nowrap"
                >
                  <span className="inline-flex items-center gap-1.5">
                    <Github className="h-3.5 w-3.5" />
                    GitHub
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Thumbnail rail */}
        <div className="lg:col-span-5">
          <div className="label-mono mb-2">// all_cases</div>
          <ul className="flex flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {FEATURED.map((p, i) => (
              <li key={p.name} className="shrink-0 lg:shrink min-w-full lg:min-w-0">
                <button
                  onClick={() => setIdx(i)}
                  className={`group flex w-full min-w-0 items-center gap-3 rounded-2xl border p-3 text-left transition-colors ${
                    i === idx
                      ? "border-[color:var(--color-signal)] bg-[color:var(--color-signal)]/10"
                      : "border-[color:var(--color-border)] hover:border-[color:var(--color-signal)]/40"
                  }`}
                >
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg font-mono text-xs ${
                      i === idx
                        ? "bg-[color:var(--color-signal)] text-[color:var(--color-primary-foreground)]"
                        : "bg-[color:var(--color-surface)]"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-medium">{p.name}</span>
                    <span className="block truncate font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {p.tag}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <CaseStudyModal
        open={Boolean(activeCaseStudy)}
        onOpenChange={(value) => {
          if (!value) setActiveCaseStudy(null);
        }}
        projectKey={activeCaseStudy}
      />
    </section>
  );
}

function DeviceLaptop({
  name,
  className,
  image,
}: {
  name: string;
  className?: string;
  image?: string;
}) {
  return (
    <div className={`relative w-full ${className ?? ""}`}>
      <div className="rounded-t-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/60 p-2 shadow-2xl">
        <div className="rounded-lg bg-gradient-to-br from-[color:var(--color-surface-2)] to-black p-3">
          <div className="mb-2 flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-red-400/70" />
            <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
            <span className="h-2 w-2 rounded-full bg-green-400/70" />
            <span className="ml-auto font-mono text-[10px] text-muted-foreground">
              {name.toLowerCase()}.app
            </span>
          </div>
          <div className="overflow-hidden rounded-lg border border-white/10 bg-[color:var(--color-background)]">
            {image ? (
              <img
                src={image}
                alt={`${name} preview`}
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-contain sm:object-cover"
                style={{ minHeight: "200px" }}
              />
            ) : (
              <div className="grid h-64 grid-cols-3 gap-2 p-2">
                <div className="col-span-1 space-y-1.5">
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className="h-3 rounded bg-white/5" />
                  ))}
                  <div className="h-3 w-2/3 rounded bg-[color:var(--color-signal)]/40" />
                </div>
                <div className="col-span-2 rounded bg-gradient-to-br from-[color:var(--color-signal)]/20 to-transparent p-2">
                  <div className="h-2 w-1/2 rounded bg-white/20" />
                  <div className="mt-2 h-16 rounded bg-white/5" />
                  <div className="mt-2 grid grid-cols-3 gap-1.5">
                    <div className="h-6 rounded bg-white/5" />
                    <div className="h-6 rounded bg-white/5" />
                    <div className="h-6 rounded bg-[color:var(--color-signal)]/30" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mx-auto h-2 w-[110%] -translate-x-[5%] rounded-b-xl bg-[color:var(--color-surface-2)]" />
    </div>
  );
}

function DevicePhone({
  name,
  className,
  image,
}: {
  name: string;
  className?: string;
  image?: string;
}) {
  return (
    <div className={`relative mx-auto w-[150px] ${className ?? ""}`}>
      <div className="rounded-[28px] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-2 shadow-2xl">
        <div className="rounded-[22px] bg-gradient-to-b from-[color:var(--color-surface-2)] to-black p-2">
          <div className="mx-auto mb-2 h-1.5 w-10 rounded-full bg-white/20" />
          <div className="overflow-hidden rounded-[18px] bg-[color:var(--color-background)] aspect-[9/19]">
            {image ? (
              <img
                src={image}
                alt={`${name} preview`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain object-center bg-[color:var(--color-background)]"
              />
            ) : (
              <div className="space-y-1.5 p-2">
                <div className="font-mono text-[8px] uppercase tracking-widest text-[color:var(--color-signal)]">
                  {name}
                </div>
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`flex gap-1.5 rounded-lg p-1.5 ${
                      i % 2 === 0 ? "bg-white/5" : "bg-[color:var(--color-signal)]/20"
                    }`}
                  >
                    <div className="h-4 w-4 rounded-full bg-white/20" />
                    <div className="flex-1 space-y-0.5">
                      <div className="h-1.5 w-3/4 rounded bg-white/30" />
                      <div className="h-1.5 w-1/2 rounded bg-white/15" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- DESIGN SHOWCASE ---------------- */

const DESIGN_WORK: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  hue: number;
  figmaUrl?: string;
  github?: string;
  image?: string;
}[] = [
  {
    icon: Smartphone,
    label: "Threat Watch",
    hue: 30,
    github: "https://github.com/rmuneeb-dev/Threat-watch",
    image: threatWatchDesign,
  },
  {
    icon: Layout,
    label: "OS AI Command Center",
    hue: 200,
    github: "https://github.com/rmuneeb-dev/OS-Ai-command-center-",
    image: osAiDesign,
  },
  {
    icon: Sparkles,
    label: "Connect X",
    hue: 18,
    figmaUrl: "https://www.figma.com/design/WAPMhZFr5XftEBlrzX8eUb/Connect-X?node-id=0-1&p=f&t=lvtZ7Py9UNg8Iu1j-0",
    image: connectXDesign,
  },
  {
    icon: Activity,
    label: "Flow Go App",
    hue: 260,
    figmaUrl: "https://www.figma.com/design/ukQrtvZbRGlKU89rBKCc38/Flow-Go-Design?node-id=0-1&p=f&t=P0sAy1GRxNz4Aptw-0",
    image: flowGoDesign,
  },
];

function DesignShowcase() {
  const figmaLink = DESIGN_WORK.find((d) => d.figmaUrl)?.figmaUrl;

  return (
    <section id="designs" className="mt-16">
      <Reveal>
        <SectionLabel>design_showcase</SectionLabel>
      </Reveal>
      <Reveal delay={80}>
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            UI work, pixel-tuned in <span className="text-signal-gradient">Figma.</span>
          </h2>
          {figmaLink ? (
            <a
              href={figmaLink}
              target="_blank"
              rel="noreferrer"
              className="btn-water inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-mono text-[11px] uppercase tracking-widest"
            >
              <span>Open UI work</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          ) : null}
        </div>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {DESIGN_WORK.map((d, i) => (
          <Reveal key={d.label} delay={120 + i * 90}>
            <div className="glass group rounded-3xl p-5 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.01] hover:border-[color:var(--color-signal)]/60 hover:shadow-[0_0_32px_-10px_color-mix(in_oklab,var(--color-signal)_55%,transparent)]">
              {d.image ? (
                <div className="mx-auto w-full max-w-[180px] sm:max-w-[200px]">
                  <div className="rounded-[34px] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-2 shadow-[0_24px_50px_-20px_rgba(0,0,0,0.85)]">
                    <div className="rounded-[28px] border border-[color:var(--color-border)] bg-black p-1.5">
                      <div className="mx-auto mb-2 h-1.5 w-10 rounded-full bg-white/20" />
                      <div className="overflow-hidden rounded-[22px] bg-[color:var(--color-background)]">
                        <img
                          src={d.image}
                          alt={`${d.label} preview`}
                          loading="lazy"
                          decoding="async"
                          className="aspect-[9/19] w-full object-contain object-center bg-[color:var(--color-background)]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <DesignMockup hue={d.hue} icon={d.icon} />
              )}
              <div className="mt-4 flex items-center justify-between">
                <h3 className="text-sm font-semibold">{d.label}</h3>
                <span className="label-mono">
                  {d.figmaUrl ? "// figma" : d.github ? "// github" : ""}
                </span>
              </div>
              <div className="mt-3 grid gap-2">
                {d.figmaUrl && (
                  <a
                    href={d.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-water inline-flex w-full items-center justify-center gap-1.5 rounded-full px-3 py-2 font-mono text-[11px] uppercase tracking-widest"
                  >
                    <span className="inline-flex items-center gap-1.5">
                      <Figma className="h-3.5 w-3.5" />
                      View Figma
                    </span>
                  </a>
                )}
                {d.github && (
                  <a
                    href={d.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-water inline-flex w-full items-center justify-center gap-1.5 rounded-full px-3 py-2 font-mono text-[11px] uppercase tracking-widest"
                  >
                    <span className="inline-flex items-center gap-1.5">
                      <Github className="h-3.5 w-3.5" />
                      View GitHub
                    </span>
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}


function DesignMockup({
  hue,
  icon: Icon,
}: {
  hue: number;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div
      className="relative mx-auto h-56 w-[140px] rounded-[26px] border border-[color:var(--color-border)] p-1.5"
      style={{
        background: `linear-gradient(160deg, oklch(0.25 0.04 ${hue}), oklch(0.18 0.03 ${hue}))`,
      }}
    >
      <div className="h-full rounded-[20px] bg-black/40 p-2">
        <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-white/30" />
        <Icon className="mx-auto h-8 w-8 text-white/80" />
        <div className="mt-3 space-y-1.5">
          <div className="h-1.5 w-3/4 rounded bg-white/30" />
          <div className="h-1.5 w-1/2 rounded bg-white/15" />
        </div>
        <div className="mt-3 space-y-1.5">
          <div className="h-10 rounded bg-white/5" />
          <div className="h-10 rounded bg-white/5" />
        </div>
        <div
          className="mt-3 h-7 rounded text-center"
          style={{ background: `oklch(0.7 0.18 ${hue})` }}
        />
      </div>
    </div>
  );
}

/* ---------------- EXPERIENCE ---------------- */

const TIMELINE = [
  {
    icon: Palette,
    role: " junior UI/UX Designer & frontend developer ",
    org: "Bits lab Studio ",
    when: "2026",
    body: "Shipped onboarding & dashboard flows for B2B SaaS clients Designed and developed responsive UI components and modern dashboard interfaces..",
  },
  {
    icon: Briefcase,
    role: "Freelance Designer & Developer",
    org: "Self-employed",
    when: "2023 — present",
    body: "Landing pages, web apps and design systems for startups.",
  },
  {
    icon: GraduationCap,
    role: "Computer Science Student",
    org: " Lahore",
    when: "2022 — present",
    body: "Systems, networks, databases, theory — and side projects.",
  },
];

function Experience() {
  return (
    <section id="experience" className="mt-16">
      <Reveal>
        <SectionLabel>experience</SectionLabel>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mb-8 text-3xl font-semibold tracking-tight sm:text-4xl">
          Steady reps, <span className="text-signal-gradient">building.</span>
        </h2>
      </Reveal>
      <Reveal delay={180}>
        <p className="-mt-4 mb-8 max-w-xl text-sm text-muted-foreground sm:text-base">
          A short timeline of the work, study and side-projects that shaped how
          I build today.
        </p>
      </Reveal>

      <div className="glass relative overflow-hidden rounded-3xl p-4 sm:p-6 md:p-8">
        <div className="pointer-events-none absolute left-3 top-0 hidden h-full w-px bg-gradient-to-b from-[color:var(--color-signal)]/0 via-[color:var(--color-signal)]/80 to-[color:var(--color-signal)]/0 sm:left-6 sm:block" />
        <div className="space-y-4 sm:space-y-5">
          {TIMELINE.map((t, i) => (
            <Reveal key={t.role} delay={120 + i * 120}>
              <div className="group relative rounded-2xl border border-[color:var(--color-border)]/70 bg-[color:var(--color-surface)]/35 p-4 pl-4 transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--color-signal)]/50 hover:bg-[color:var(--color-surface)]/60 hover:shadow-[0_0_28px_-10px_color-mix(in_oklab,var(--color-signal)_55%,transparent)] sm:pl-8">
                <span className="absolute left-2 top-5 grid h-5 w-5 place-items-center rounded-full border border-[color:var(--color-signal)]/70 bg-[color:var(--color-background)] shadow-[0_0_16px_color-mix(in_oklab,var(--color-signal)_40%,transparent)] sm:left-[-10px]">
                  <span className="h-2 w-2 rounded-full bg-[color:var(--color-signal)]" />
                </span>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    step {String(i + 1).padStart(2, "0")} · {t.when}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-signal)]/20 bg-[color:var(--color-signal)]/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[color:var(--color-signal)]">
                    <t.icon className="h-3 w-3" />
                    {t.org}
                  </span>
                </div>
                <h3 className="mt-3 text-base font-semibold">{t.role}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ---------------- TECH STACK + GITHUB ---------------- */

const TECH = [
  { name: "React", Icon: TechIcons.ReactIcon },
  { name: "Next.js", Icon: TechIcons.NextjsIcon },
  { name: "TS", Icon: TechIcons.TsIcon },
  { name: "JS", Icon: TechIcons.JsIcon },
  { name: "Tailwind", Icon: TechIcons.TailwindIcon },
  { name: "Node", Icon: TechIcons.NodeIcon },
  { name: "Firebase", Icon: TechIcons.FirebaseIcon },
  { name: "Postgres", Icon: TechIcons.PostgresIcon },
  { name: "MongoDB", Icon: TechIcons.MongoIcon },
  { name: "Figma", Icon: TechIcons.FigmaIcon },
  { name: "Git", Icon: TechIcons.GitIcon },
  { name: "Vercel", Icon: TechIcons.VercelIcon },
];

function TechAndGithub() {
  return (
    <section id="github" className="mt-16 grid gap-4 lg:grid-cols-12">
      <Reveal className="col-span-12 lg:col-span-5">
        <div className="glass h-full rounded-3xl p-6 sm:p-8">
          <SectionLabel>tech_stack</SectionLabel>
          <h3 className="text-2xl font-semibold tracking-tight">Daily drivers</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Tools I reach for without thinking.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
            {TECH.map((t, i) => (
              <Reveal key={t.name} delay={i * 60}>
                <div className="group flex min-h-[96px] flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/40 px-2 py-3 text-center text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[color:var(--color-signal)]/60 hover:bg-[color:var(--color-surface)]/70 hover:text-[color:var(--color-signal)] hover:shadow-[0_0_24px_-4px_color-mix(in_oklab,var(--color-signal)_55%,transparent)] sm:min-h-[110px] sm:gap-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black/10 p-1.5 transition-colors duration-300 group-hover:bg-black/15">
                    <t.Icon className="h-8 w-8 shrink-0 transition-all duration-300 group-hover:scale-[1.05] group-hover:brightness-110" />
                  </div>
                  <span className="w-full whitespace-normal break-words px-1 font-mono text-[10px] leading-tight tracking-[0.16em] text-muted-foreground transition-colors duration-300 group-hover:text-[color:var(--color-signal)] sm:whitespace-nowrap sm:text-[10.5px]">
                    {t.name}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="col-span-12 lg:col-span-7" delay={120}>
        <div className="glass h-full rounded-3xl p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <SectionLabel>github_activity</SectionLabel>
              <h3 className="text-2xl font-semibold tracking-tight">
                Consistent commits, public log.
              </h3>
            </div>
            <WireGlobe />
          </div>
          <GithubStatGrid />
          <div className="mt-6">
            <GithubHeatmap />
          </div>
        </div>
      </Reveal>
    </section>
  );
}


function WireGlobe() {
  return (
    <div className="relative h-20 w-20 shrink-0 animate-float">
      <div className="absolute inset-0 rounded-full border border-[color:var(--color-signal)]/60" />
      <div className="absolute inset-0 rounded-full border border-[color:var(--color-signal)]/40 [transform:rotateX(70deg)]" />
      <div className="absolute inset-0 rounded-full border border-[color:var(--color-signal)]/40 [transform:rotateY(70deg)]" />
      <div className="absolute inset-2 rounded-full border border-[color:var(--color-signal)]/30" />
      <div className="absolute inset-0 rounded-full bg-[color:var(--color-signal)]/20 blur-2xl" />
    </div>
  );
}

const GITHUB_STATS: {
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  decimals?: number;
  suffix?: string;
  title: string;
  desc: string;
}[] = [
  {
    icon: FolderGit2,
    value: 32,
    title: "Repositories",
    desc: "Public projects on GitHub.",
  },
  {
    icon: GitCommit,
    value: 1.2,
    decimals: 1,
    suffix: "K",
    title: "Commits",
    desc: "Pushed across the year.",
  },
  {
    icon: GitBranch,
    value: 480,
    title: "Contributions",
    desc: "PRs, issues and reviews.",
  },
  {
    icon: Flame,
    value: 21,
    suffix: "d",
    title: "Current Streak",
    desc: "Days of consecutive work.",
  },
];

function GithubStatGrid() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
      {GITHUB_STATS.map((s, i) => (
        <div
          key={s.title}
          className="glass group relative overflow-hidden rounded-2xl p-3 transition-[transform,opacity,box-shadow,border-color] duration-700 hover:-translate-y-1 hover:border-[color:var(--color-signal)]/60 hover:shadow-[0_0_30px_-8px_color-mix(in_oklab,var(--color-signal)_60%,transparent)] sm:p-4"
          style={{
            transitionDelay: `${i * 110}ms`,
            transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
            transform: visible ? undefined : "translateY(16px)",
            opacity: visible ? 1 : 0,
          }}
        >
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-[color:var(--color-signal)]/0 via-transparent to-[color:var(--color-signal)]/0 opacity-0 transition-opacity duration-300 group-hover:from-[color:var(--color-signal)]/15 group-hover:to-transparent group-hover:opacity-100" />
          <div className="flex items-center justify-between">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[color:var(--color-signal)]/15 text-[color:var(--color-signal)] transition-transform group-hover:scale-110">
              <s.icon className="h-4 w-4" />
            </span>
            <span className="label-mono">// {String(i + 1).padStart(2, "0")}</span>
          </div>
          <div className="mt-3 text-3xl font-semibold tracking-tight text-signal-gradient">
            <CountUp
              start={visible}
              value={s.value}
              decimals={s.decimals ?? 0}
              suffix={s.suffix ?? ""}
              delay={i * 150}
            />
          </div>
          <div className="mt-0.5 text-sm font-medium">{s.title}</div>
          <div className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            {s.desc}
          </div>
        </div>
      ))}
    </div>
  );
}

function CountUp({
  start,
  value,
  decimals = 0,
  suffix = "",
  delay = 0,
}: {
  start: boolean;
  value: number;
  decimals?: number;
  suffix?: string;
  delay?: number;
}) {
  const [display, setDisplay] = useState(0);
  const playedRef = useRef(false);
  useEffect(() => {
    if (!start || playedRef.current) return;
    playedRef.current = true;
    let raf = 0;
    const startAt = performance.now() + delay;
    const dur = 1400;
    const step = (t: number) => {
      const p = Math.max(0, Math.min(1, (t - startAt) / dur));
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(value * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [start, value, delay]);
  return (
    <span>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}

/* ---------------- CONTACT ---------------- */
const CONTACT_CARDS = [
  {
    label: "Email",
    value: "rmuneeb997@gmail.com",
    description: "Primary contact for project briefs and hiring.",
    icon: Mail,
  },
  {
    label: "Location",
    value: "Lahore, Pakistan",
    description: "Based in Pakistan, available remotely and hybrid.",
    icon: MapPin,
  },
  {
    label: "LinkedIn",
    value: "Muneeb-Rehman",
    description: "Connect for collaboration, design, and frontend work.",
    icon: Linkedin,
  },
  {
    label: "Availability",
    value: "Open to work",
    description: "Ready for frontend and UI/UX projects now.",
    icon: Activity,
  },
];

function ContactCard({
  icon: Icon,
  label,
  value,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  description: string;
}) {
  return (
    <div className="group min-w-0 rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/40 p-5 transition-all duration-300 hover:border-[color:var(--color-signal)]/40 hover:shadow-[0_0_24px_-10px_color-mix(in_oklab,var(--color-signal)_55%,transparent)]">
      <div className="flex items-center justify-between gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[color:var(--color-signal)]/15 text-[color:var(--color-signal)]">
          <Icon className="h-5 w-5" />
        </span>
        <span className="label-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
          {label}
        </span>
      </div>
      <h3 className="mt-4 break-words text-lg font-semibold tracking-tight">{value}</h3>
      <p className="mt-2 break-words whitespace-normal text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="mt-16">
      <Reveal>
        <SectionLabel>contact</SectionLabel>
      </Reveal>
      <Reveal delay={80}>
        <div className="glass grid gap-6 rounded-3xl p-6 sm:p-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              Got a brief?
              <br />
              <span className="text-signal-gradient">Send a message.</span>
            </h2>
            <p className="mt-3 max-w-md text-sm text-muted-foreground">
              Available for frontend & design contracts and full-time roles.
              Replies within 24h.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const subject = encodeURIComponent(
                  `Brief from ${data.get("name") || "someone"}`,
                );
                const body = encodeURIComponent(String(data.get("message") || ""));
                window.location.href = `mailto:rmuneeb997@gmail.com?subject=${subject}&body=${body}`;
              }}
              className="mt-6 grid gap-3"
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="block">
                  <span className="label-mono mb-1 block">// name</span>
                  <input
                    name="name"
                    required
                    placeholder="Your name"
                    className="input-glow w-full rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground"
                  />
                </label>
                <label className="block">
                  <span className="label-mono mb-1 block">// email</span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@studio.com"
                    className="input-glow w-full rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground"
                  />
                </label>
              </div>
              <label className="block">
                <span className="label-mono mb-1 block">// message</span>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell me about the project, timeline and goals…"
                  className="input-glow w-full resize-none rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground"
                />
              </label>
              <div className="mt-1">
                <button
                  type="submit"
                  className="btn-water-solid group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium glow-ring"
                >
                  <span className="inline-flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Send message
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </button>
              </div>
            </form>
          </div>
          <div className="lg:col-span-5 lg:self-stretch">
            <div className="glass h-full rounded-3xl p-6 sm:p-8">
              <div className="grid h-full gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  {CONTACT_CARDS.map((card) => (
                    <ContactCard key={card.label} {...card} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */

function Footer() {
  const footerLinks = [
    { Icon: Github, href: "https://github.com/rmuneeb-dev", label: "GitHub" },
    {
      Icon: Linkedin,
      href: "https://www.linkedin.com/in/muneeb-rehman-7353382a3",
      label: "LinkedIn",
    },
    { Icon: Mail, href: "mailto:rmuneeb997@gmail.com", label: "Email" },
  ];

  return (
    <footer className="mt-10 border-t border-[color:var(--color-border)] pt-6">
      <div className="rounded-[28px] border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/40 p-6 shadow-[0_0_24px_-10px_color-mix(in_oklab,var(--color-signal)_45%,transparent)] sm:p-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[color:var(--color-signal)]">
              developer footer
            </p>
            <p className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              © {new Date().getFullYear()} Muneeb Rehman
            </p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Crafting modern web experiences with React & TypeScript.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:min-w-[360px] lg:grid-cols-2">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                Built with
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>• React</li>
                <li>• TypeScript</li>
                <li>• Vite</li>
                <li>• Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                Connect
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {footerLinks.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="grid h-9 w-9 place-items-center rounded-lg border border-[color:var(--color-border)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--color-signal)] hover:text-[color:var(--color-signal)]"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Designed in Figma
                <br />
                Hosted on Vercel
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[color:var(--color-border)] pt-4 text-sm text-muted-foreground">
          <p>
            Designed and developed with attention to detail, performance, and accessibility.
          </p>
        </div>
      </div>
    </footer>
  );
}
