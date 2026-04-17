import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import pronaWebImg from "@assets/prona-web.png";
import trackinoImg from "@assets/trackino.png";
import pronaMobileImg from "@assets/prona-mobile.png";

interface Project {
  id: string;
  title: string;
  subtitle: string;
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
    title: "Trackino",
    subtitle: "Business management platform.",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "MySQL",
      "Firebase",
      "Redux",
      "Role-based Access",
      "Analytics",
    ],
    image: trackinoImg,
    type: "mobile",
    link: "https://www.track-ino.com",
    linkLabel: "Visit Website",
    glow: "hover:shadow-[0_0_60px_rgba(244,63,94,0.2)] hover:border-rose-500/30",
    tagColor: "bg-rose-500/10 text-rose-300 border-rose-500/20",
    problem:
      "Companies were juggling multiple disconnected tools to manage HR, finance, operations, and analytics — creating data silos, inefficiency, and poor visibility across teams.",
    approach:
      "Built a centralized all-in-one business management platform covering HR (employee records, onboarding, performance), Finance & Sales (budgeting, cost tracking, automated reports), Operations (workflow and production status), and Analytics (real-time KPIs and decision-making data). Implemented role-based access control so each employee sees only what's relevant to their role, with end-to-end data security built in.",
    result:
      "Delivered a unified platform at track-ino.com that replaces multiple tools with a single system. Teams gained real-time visibility into operations, finance, and HR from one dashboard — reducing admin overhead and enabling data-driven decisions across the organization.",
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
    glow: "hover:shadow-[0_0_60px_rgba(192,132,252,0.2)] hover:border-fuchsia-500/30",
    tagColor: "bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20",
    problem:
      "Property seekers in Kosovo and the Balkans had no dedicated mobile experience — browsing listings meant navigating desktop-heavy websites on small screens.",
    approach:
      "Built a cross-platform mobile app with React Native and Expo. Integrated real-time listing updates, in-app messaging with Pusher, push notifications, and a streamlined property search with advanced filters and map view.",
    result:
      "Shipped on both the App Store and Google Play. Consistent performance across devices, with users able to browse, save, and inquire on listings entirely from mobile.",
  },
  {
    id: "pronascout-web",
    title: "PronaScout Web",
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
    glow: "hover:shadow-[0_0_60px_rgba(251,113,133,0.2)] hover:border-pink-500/30",
    tagColor: "bg-pink-500/10 text-pink-300 border-pink-500/20",
    problem:
      "The real estate market in Kosovo lacked a modern web platform — buyers had no consolidated listings, and agents had no professional tooling.",
    approach:
      "Architected a consumer-facing Next.js website alongside a full-featured React admin dashboard with role-based access, bulk data export, and real-time content moderation. Integrated WebSocket live chat, secure payments, and multilingual support.",
    result:
      "Deployed for 500K+ monthly European users. The admin dashboard cut operational workflows from hours to minutes, and multilingual support measurably increased cross-border engagement.",
  },
];

function PhoneMockup({ image, title }: { image: string; title: string }) {
  return (
    <div className="flex items-end justify-center gap-4 h-52 pt-2">
      <div className="relative w-[90px] h-[180px] flex-shrink-0">
        <div className="absolute inset-0 rounded-[22px] border-2 border-white/10 bg-black shadow-[0_0_30px_rgba(0,0,0,0.8)] overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-1.5 bg-white/10 rounded-b-full z-10" />
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="absolute inset-0 rounded-[22px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]" />
      </div>
      <div className="relative w-[72px] h-[144px] flex-shrink-0 opacity-60 -mb-2">
        <div className="absolute inset-0 rounded-[18px] border-2 border-white/8 bg-black overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-1 bg-white/10 rounded-b-full z-10" />
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-top scale-110"
          />
        </div>
        <div className="absolute -inset-2 rounded-[22px] bg-gradient-to-l from-card to-transparent z-20" />
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
    <div className="h-52 w-full rounded-2xl overflow-hidden border border-white/10 bg-[#1a0e14]">
      <div className="flex items-center gap-1.5 px-3 py-2 bg-[#120a0f] border-b border-white/8">
        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        <div className="ml-2 flex-1 rounded-md bg-white/5 border border-white/8 px-3 py-0.5 text-[10px] text-white/30 truncate">
          {url}
        </div>
      </div>
      <div className="w-full h-[calc(100%-30px)] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
      </div>
    </div>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-3">
            Selected Work
          </h2>
          <p className="text-muted-foreground text-sm">
            Projects built with care, shipped to real users.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.14 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className={`group cursor-pointer rounded-3xl bg-card border border-white/5 p-6 hover:bg-white/[0.015] transition-all duration-500 ${project.glow}`}
              onClick={() => setSelectedProject(project)}
            >
              {project.type === "mobile" ? (
                <div className="relative bg-gradient-to-br from-white/[0.03] to-transparent rounded-2xl mb-6 flex items-center justify-center overflow-hidden h-52">
                  <PhoneMockup image={project.image} title={project.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent pointer-events-none" />
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

              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-xl font-display font-medium text-white">
                  {project.title}
                </h3>
                <span
                  className={`text-[10px] px-2.5 py-1 rounded-full border font-medium shrink-0 mt-0.5 ${project.tagColor}`}
                >
                  {project.type === "mobile" ? "iOS & Android" : "Web"}
                </span>
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
                  <span className="text-[11px] px-2.5 py-1 rounded-full border border-white/8 text-white/30">
                    +{project.tags.length - 4}
                  </span>
                )}
              </div>
              <div className="mt-5 flex items-center justify-end text-[11px] uppercase tracking-[0.14em] text-white/35 group-hover:text-white/70 transition-colors">
              see more
                <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="relative mt-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[0.35, 0.26, 0.18].map((opacity, index) => (
              <div
                key={index}
                className={`h-[320px] rounded-3xl border border-white/[0.08] bg-white/[0.03] ${index > 0 ? "hidden md:block" : ""}`}
                style={{ opacity }}
              />
            ))}
          </div>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-background/18 to-background/72" />

          <div className="pointer-events-none absolute inset-x-0 top-8 z-10 flex justify-center">
            <span className="rounded-full border border-white/15 bg-black/25 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-white/60 backdrop-blur-sm">
              More on request
            </span>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 60, scale: 0.94 }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed inset-x-4 bottom-4 top-24 md:inset-x-auto md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:left-1/2 md:-translate-x-1/2 md:w-[640px] md:max-h-[85vh] z-50 bg-card border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="h-52 w-full relative overflow-hidden bg-[#12080f] flex-shrink-0">
                {selectedProject.type === "mobile" ? (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-rose-950/30 to-fuchsia-950/20">
                    <div className="relative w-[110px] h-[220px]">
                      <div className="absolute inset-0 rounded-[26px] border-2 border-white/15 bg-black overflow-hidden shadow-2xl">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-2 bg-white/10 rounded-b-full z-10" />
                        <img
                          src={selectedProject.image}
                          alt={selectedProject.title}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover object-top"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card/90" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 text-white/60 hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="px-8 py-5 border-b border-white/8">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-display font-medium text-white">
                    {selectedProject.title}
                  </h3>
                  <span
                    className={`text-[10px] px-2.5 py-1 rounded-full border font-medium ${selectedProject.tagColor}`}
                  >
                    {selectedProject.type === "mobile"
                      ? "iOS & Android"
                      : "Web"}
                  </span>
                </div>
                <p className="text-sm text-white/40 mt-1">
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
                      <p className="text-white/80 leading-relaxed">{value}</p>
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