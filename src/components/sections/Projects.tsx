import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import pronaWebImg from "@assets/prona-web.png";
import trackinoImg from "@assets/trackino.png";
import pronaMobileImg from "@assets/prona-mobile.png";
import trackinoWebImg from "@assets/trackinoweb.png";

import { cn } from "@/lib/utils";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  status?: "ongoing";
  tags: string[];
  image: string;
  type: "mobile" | "web";
  url?: string;
  link?: string;
  linkLabel?: string;
  glow: string;
  tagColor: string;
  problem: string;
  approach: string;
  result: string;
}

const projects: Project[] = [
  {
    id: "trackino",
    title: "Trackino Mobile",
    subtitle: "Mobile app for business operations.",
    status: "ongoing",
    tags: [
      "React Native",
      "Expo",
      "Xcode",
      "Tailwind",
    ],
    image: trackinoImg,
    type: "mobile",
    link: "https://www.track-ino.com",
    linkLabel: "Visit Website",
    glow: "hover:border-rose-400/22 hover:shadow-[0_10px_28px_rgba(244,63,94,0.08)] dark:hover:border-rose-500/30 dark:hover:shadow-[0_0_60px_rgba(244,63,94,0.2)]",
    tagColor:
      "bg-rose-500/8 text-rose-500/80 border-rose-400/20 dark:bg-rose-500/10 dark:text-rose-300 dark:border-rose-500/25",
    problem:
      "Teams were relying on separate tools for HR, finance, and operations, which created duplicated work and poor cross-team visibility. Decision-making was slow because data lived in different systems.",
    approach:
      "Built a centralized platform that brings core workflows into one place with role-based access and shared data. Added live analytics and operational dashboards so teams could act from the same source of truth.",
    result:
      "This is an ongoing project currently in active development. The mobile platform is already improving operational visibility and reducing day-to-day admin overhead as new modules continue to roll out.",
  },
  {
    id: "trackino-web-dashboard",
    title: "Trackino Web & Dashboard",
    subtitle: "Business operations dashboard for teams.",
    tags: [
      "Next.js",
      "TypeScript",
      "React Native",
    ],
    image: trackinoWebImg,
    type: "web",
    url: "www.track-ino.com",
    link: "https://www.track-ino.com",
    linkLabel: "Visit Website",
    glow: "hover:border-rose-400/22 hover:shadow-[0_10px_28px_rgba(244,63,94,0.08)] dark:hover:border-rose-500/30 dark:hover:shadow-[0_0_60px_rgba(244,63,94,0.2)]",
    tagColor:
      "bg-rose-500/8 text-rose-500/80 border-rose-400/20 dark:bg-rose-500/10 dark:text-rose-300 dark:border-rose-500/25",
    problem:
      "Operational teams needed a single web workspace to manage people, finance, and reporting without switching between multiple internal tools.",
    approach:
      "Built a responsive dashboard experience focused on day-to-day operations, role-aware access, and real-time visibility into core business metrics.",
    result:
      "Teams could manage workflows from one centralized interface, reducing context switching and improving reporting speed across departments.",
  },
  {
    id: "pronascout-mobile",
    title: "PronaScout Mobile",
    subtitle: "Real estate app — iOS & Android",
    tags: [
      "React Native",
      "Expo",
      "Redux",
      "RTK Query",
      "Firebase",
      "iOS",
      "Android",
    ],
    image: pronaMobileImg,
    type: "mobile",
    link: "https://apps.apple.com/us/app/pronascout/id6736767198",
    linkLabel: "View on App Store",
    glow: "hover:border-fuchsia-400/22 hover:shadow-[0_10px_28px_rgba(192,132,252,0.08)] dark:hover:border-fuchsia-500/30 dark:hover:shadow-[0_0_60px_rgba(192,132,252,0.2)]",
    tagColor:
      "bg-fuchsia-500/8 text-fuchsia-500/80 border-fuchsia-400/20 dark:bg-fuchsia-500/10 dark:text-fuchsia-300 dark:border-fuchsia-500/25",
    problem:
      "Local users did not have a strong mobile-first property experience and had to use desktop-oriented sites on small screens. Browsing, filtering, and contacting agents felt slow and fragmented.",
    approach:
      "Built a React Native app for iOS and Android with a streamlined search flow, live listing updates, and in-app messaging. Added push notifications and practical filters to make mobile browsing faster and clearer.",
    result:
      "Shipped successfully on both stores with a more intuitive mobile experience end to end. Users could discover, save, and inquire on properties without leaving the app.",
  },
  {
    id: "pronascout-web",
    title: "PronaScout Web & Dashboard",
    subtitle: "Real estate platform — website & dashboard",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "RTK Query",
      "Node.js",
      "WebSocket",
      "Redis",
    ],
    image: pronaWebImg,
    type: "web",
    url: "pronascout.com",
    link: "https://www.pronascout.com",
    linkLabel: "Visit Website",
    glow: "hover:border-pink-400/22 hover:shadow-[0_10px_28px_rgba(251,113,133,0.08)] dark:hover:border-pink-500/30 dark:hover:shadow-[0_0_60px_rgba(251,113,133,0.2)]",
    tagColor:
      "bg-pink-500/8 text-pink-500/80 border-pink-400/20 dark:bg-pink-500/10 dark:text-pink-300 dark:border-pink-500/25",
    problem:
      "Buyers and agents lacked a modern platform that combined trusted listings with practical management tools. Existing flows made content moderation and internal coordination harder than needed.",
    approach:
      "Delivered a consumer-facing Next.js website plus an internal dashboard for content and operational workflows. Implemented real-time communication features, stronger moderation controls, and multilingual support.",
    result:
      "Operational tasks that used to take much longer became significantly faster for the admin team. The multilingual experience also helped improve engagement across a broader regional audience.",
  },
];

function PhoneMockup({ image, title }: { image: string; title: string }) {
  return (
    <div className="flex items-end justify-center gap-4 h-52 pt-2">
      <div className="relative w-[90px] h-[180px] flex-shrink-0">
        <div className="absolute inset-0 rounded-[22px] border-2 border-border bg-black shadow-[0_0_30px_rgba(0,0,0,0.8)] overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-1.5 bg-foreground/12 rounded-b-full z-10" />
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            sizes="(max-width: 768px) 35vw, 120px"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="absolute inset-0 rounded-[22px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]" />
      </div>
      <div className="relative w-[72px] h-[144px] flex-shrink-0 opacity-60 -mb-2">
        <div className="absolute inset-0 rounded-[18px] border-2 border-border bg-black overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-1 bg-foreground/12 rounded-b-full z-10" />
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            sizes="(max-width: 768px) 25vw, 96px"
            className="w-full h-full object-cover object-top scale-110"
          />
        </div>
        <div className="absolute -inset-2 rounded-[22px] bg-gradient-to-l from-card to-transparent z-20" />
      </div>
    </div>
  );
}

function PhoneMockupCompact({ image, title }: { image: string; title: string }) {
  return (
    <div className="flex h-52 items-center justify-center pt-2">
      <div className="relative h-[190px] w-[96px] flex-shrink-0">
        <div className="absolute inset-0 overflow-hidden rounded-[24px] border-2 border-border bg-black shadow-[0_0_24px_rgba(0,0,0,0.75)]">
          <div className="absolute left-1/2 top-0 z-10 h-1.5 w-8 -translate-x-1/2 rounded-b-full bg-foreground/12" />
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            sizes="(max-width: 768px) 42vw, 120px"
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div className="absolute inset-0 rounded-[24px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]" />
      </div>
    </div>
  );
}

function BrowserMockup({
  image,
  title,
  url,
}: {
  image: string;
  title: string;
  url: string;
}) {
  return (
    <div className="h-52 w-full rounded-2xl overflow-hidden border border-border bg-card">
      <div className="flex items-center gap-1.5 px-3 py-2 bg-background/65 border-b border-border">
        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        <div className="ml-2 flex-1 rounded-md bg-background/60 border border-border px-3 py-0.5 text-[10px] text-muted-foreground truncate">
          {url}
        </div>
      </div>
      <div className="w-full h-[calc(100%-30px)] overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          sizes="(max-width: 768px) 88vw, (max-width: 1200px) 44vw, 360px"
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
      </div>
    </div>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMoreInfoOpen, setIsMoreInfoOpen] = useState(false);
  const [isMobileViewport, setIsMobileViewport] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 767px)").matches
      : false,
  );
  const moreInfoRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const syncViewport = () => setIsMobileViewport(mediaQuery.matches);

    syncViewport();
    mediaQuery.addEventListener("change", syncViewport);

    return () => mediaQuery.removeEventListener("change", syncViewport);
  }, []);

  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedProject]);

  useEffect(() => {
    if (!isMoreInfoOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (!moreInfoRef.current) return;
      if (!moreInfoRef.current.contains(event.target as Node)) {
        setIsMoreInfoOpen(false);
      }
    };

    window.addEventListener("pointerdown", handleClickOutside);
    return () => window.removeEventListener("pointerdown", handleClickOutside);
  }, [isMoreInfoOpen]);

  const shouldAnimateProjects = !isMobileViewport;

  return (
    <section id="projects" className="relative mx-auto max-w-6xl scroll-mt-28 px-6 py-28">
      <div>
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-3">
            Selected Work
          </h2>
          <p className="text-muted-foreground text-sm">
            Projects built with care, shipped to real users.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.button
              key={project.id}
              type="button"
              initial={shouldAnimateProjects ? { opacity: 0, y: 30 } : false}
              whileInView={
                shouldAnimateProjects ? { opacity: 1, y: 0 } : undefined
              }
              viewport={shouldAnimateProjects ? { once: true } : undefined}
              transition={
                shouldAnimateProjects
                  ? {
                      duration: 0.6,
                      delay: index * 0.14,
                      ease: [0.16, 1, 0.3, 1],
                    }
                  : undefined
              }
              whileHover={
                shouldAnimateProjects
                  ? {
                      y: -8,
                      transition: { duration: 0.3, ease: "easeOut" },
                    }
                  : undefined
              }
              className={cn(
                "group cursor-pointer rounded-3xl border border-border/80 bg-card/90 p-6 text-left shadow-[0_8px_24px_rgba(28,16,26,0.04)] hover:bg-card hover:shadow-[0_12px_30px_rgba(28,16,26,0.08)] transition-all duration-500 dark:border-border dark:bg-card dark:shadow-none dark:hover:bg-white/[0.015] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300/55 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                project.glow,
              )}
              aria-label={`Open case study: ${project.title}`}
              onClick={() => setSelectedProject(project)}
            >
              {project.type === "mobile" ? (
                <div
                  className={cn(
                    "relative mb-6 flex h-52 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-foreground/[0.03] to-transparent",
                  )}
                >
                  {isMobileViewport ? (
                    <PhoneMockupCompact image={project.image} title={project.title} />
                  ) : (
                    <PhoneMockup image={project.image} title={project.title} />
                  )}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
                </div>
              ) : (
                <div className="mb-6 group">
                  <BrowserMockup
                    image={project.image}
                    title={project.title}
                    url={project.url ?? ""}
                  />
                </div>
              )}

              <div className="mb-2 flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-display font-medium text-foreground">
                    {project.title}
                  </h3>
                  {project.status === "ongoing" && (
                    <span className="rounded-full border border-emerald-500/45 bg-emerald-500/15 px-2.5 py-1 text-[10px] font-medium text-emerald-200 dark:border-emerald-400/35 dark:bg-emerald-400/10 dark:text-emerald-500">
                      Active
                    </span>
                  )}
                </div>
                <div className="mt-0.5 flex shrink-0 flex-col items-end gap-1">
                  <span
                    className={`rounded-full border px-2.5 py-1 text-[10px] font-medium ${project.tagColor}`}
                  >
                    {project.type === "mobile" ? "iOS & Android" : "Web"}
                  </span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-5">
                {project.subtitle}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className={`text-[11px] px-2.5 py-1 rounded-full border ${project.tagColor}`}
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 4 && (
                  <span className="text-[11px] px-2.5 py-1 rounded-full border border-border text-muted-foreground">
                    +{project.tags.length - 4}
                  </span>
                )}
              </div>
              <div className="mt-5 flex items-center justify-end text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors group-hover:text-foreground/75">
                See more
                <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
              </div>
            </motion.button>
          ))}
        </div>

        <div className="relative mt-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[0.35, 0.26].map((opacity, index) => (
              <div
                key={index}
                className="h-[80px] rounded-3xl border border-border bg-foreground/[0.03]"
                style={{ opacity }}
              />
            ))}
          </div>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-background/18 to-background/72" />

          <div className="absolute inset-x-0 top-8 z-10 flex justify-center">
            <div ref={moreInfoRef} className="relative pointer-events-auto">
              <button
                type="button"
                onClick={() => setIsMoreInfoOpen((prev) => !prev)}
                aria-expanded={isMoreInfoOpen}
                aria-controls="projects-more-request-popup"
                aria-label="More project info on request"
                className="rounded-full border border-border bg-card/85 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-foreground/70 backdrop-blur-sm transition-all duration-300 hover:border-rose-400/35 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300/55 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                More on request
              </button>

              <AnimatePresence>
                {isMoreInfoOpen && (
                  <motion.div
                    id="projects-more-request-popup"
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-1/2 top-full mt-3 w-[320px] -translate-x-1/2 overflow-hidden rounded-2xl border border-border bg-card/95 text-left shadow-[0_24px_60px_rgba(0,0,0,0.3)] backdrop-blur-xl"
                  >
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,63,94,0.12),transparent_48%)]" />
                    <div className="relative p-4">
                      <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-rose-400/80">
                        Need more details?
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-foreground/80">
                        I can share architecture decisions, challenges, and
                        execution details from these projects.
                      </p>
                      <a
                        href="#contact"
                        onClick={() => setIsMoreInfoOpen(false)}
                        className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-rose-400/35 bg-rose-500/10 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-rose-600 transition-colors hover:bg-rose-500/20 hover:text-white dark:text-rose-300 dark:hover:text-white"
                      >
                        Go to contact
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md"
              aria-hidden="true"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 60, scale: 0.94 }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed inset-x-4 bottom-4 top-24 md:inset-x-auto md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:left-1/2 md:-translate-x-1/2 md:w-[640px] md:max-h-[80vh] z-50 bg-card border border-border rounded-3xl overflow-hidden shadow-2xl flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-labelledby={`project-dialog-title-${selectedProject.id}`}
            >
              <div className="px-8 py-5 border-b border-border">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    <h3
                      id={`project-dialog-title-${selectedProject.id}`}
                      className="text-2xl font-display font-medium text-foreground"
                    >
                      {selectedProject.title}
                      
                    </h3>
                    <span
                      className={`text-[10px] px-2.5 py-1 rounded-full border font-medium ${selectedProject.tagColor}`}
                    >
                      {selectedProject.type === "mobile"
                        ? "iOS & Android"
                        : "Web"}
                    </span>
                    {selectedProject.status === "ongoing" && (
                      <span className="rounded-full border border-emerald-500/45 bg-emerald-500/15 px-2.5 py-1 text-[10px] font-medium text-emerald-800 dark:border-emerald-400/35 dark:bg-emerald-400/10 dark:text-emerald-300">
                        Active
                      </span>
                    )}
                  </div>
                  <button
                    ref={closeButtonRef}
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    aria-label="Close project details"
                    className="p-2 rounded-full bg-background/75 backdrop-blur-sm hover:bg-background text-foreground/65 hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300/60"
                  >
                    <X size={18} />
                  </button>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {selectedProject.subtitle}
                </p>
              </div>
              <div className="p-8 overflow-y-auto flex-1">
                <div className="space-y-8">
                  {[
                    { label: "The Problem", value: selectedProject.problem },
                    { label: "The Approach", value: selectedProject.approach },
                    { label: "The Result", value: selectedProject.result },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <h4 className="text-xs font-semibold text-rose-400/70 uppercase tracking-[0.15em] mb-3">
                        {label}
                      </h4>
                      <p className="text-foreground/82 leading-relaxed">{value}</p>
                    </div>
                  ))}
                  <div>
                    <h4 className="text-xs font-semibold text-rose-400/70 uppercase tracking-[0.15em] mb-3">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-xs px-3 py-1 rounded-full border ${selectedProject.tagColor}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-medium transition-all duration-200 hover:opacity-80 ${selectedProject.tagColor}`}
                    >
                      <span>↗</span>
                      {selectedProject.linkLabel ?? "View Live"}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;