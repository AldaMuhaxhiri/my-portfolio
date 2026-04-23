import { motion } from "framer-motion";

const experience = [
  {
    role: "Frontend Engineer",
    company: "Tarantula",
    period: "September 2025 - Present",
    summary:
      "Building a manufacturing product with React, React Native, Expo, Vue, and Firebase.",
    status: "Current",
    color: "border-rose-500/40",
    dot: "bg-rose-400",
  },
  {
    role: "Frontend Developer",
    company: "Bbros L.L.C",
    period: "May 2024 - September 2025",
    summary:
      "Delivered high-traffic web and mobile products across automotive, real estate, and education verticals.",
    status: "Previous",
    color: "border-fuchsia-500/40",
    dot: "bg-fuchsia-400",
  },
];

const certifications = [
  {
    title: "Artificial Intelligence",
    issuer: "Coursera",
    year: "2024",
    accent: "from-rose-500/8 border-rose-500/20",
    dot: "bg-rose-400",
  },
  {
    title: "AI and Emerging Technologies",
    issuer: "Atingi",
    year: "2024",
    accent: "from-fuchsia-500/8 border-fuchsia-500/20",
    dot: "bg-fuchsia-400",
  },
  {
    title: "React.js",
    issuer: "ROI Academy",
    year: "2024",
    accent: "from-pink-500/8 border-pink-500/20",
    dot: "bg-pink-400",
  },
  {
    title: "CS50 — Introduction to Computer Science",
    issuer: "Harvard edX",
    year: "2022",
    accent: "from-rose-500/8 border-rose-500/15",
    dot: "bg-rose-300",
  },
  {
    title: "Front-end Development",
    issuer: "Digital School",
    year: "2021",
    accent: "from-fuchsia-500/8 border-fuchsia-500/15",
    dot: "bg-fuchsia-300",
  },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16"
      >
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground">
            About
          </h2>
          <p className="max-w-2xl text-xl leading-relaxed font-normal text-muted-foreground md:text-2xl">
            Passionate frontend developer with hands-on experience building{" "}
            <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent font-medium">
              responsive, high-performance
            </span>{" "}
            web and mobile applications. Skilled in backend integration, UI/UX
            optimization, and{" "}
            <span className="bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent font-medium">
              scalable architecture
            </span>{" "}
            from concept to deployment.
          </p>

          <div className="space-y-2.5">
            <div className="flex items-center gap-3">
              <p className="text-xs uppercase tracking-[0.16em] text-fuchsia-400/80">
                Education
              </p>
              <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
            </div>
            <p className="text-[15px] font-medium text-foreground md:text-base">
              Bachelor of Computer Science and Engineering
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-[15px]">
              University of Business and Technology — 2022-2026
            </p>
          </div>

          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground/75">
                Experience
              </h3>
              <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
            </div>
            {experience.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`relative rounded-2xl border ${job.color} bg-card/55 px-5 py-4`}
              >
                <span
                  className={`absolute left-5 top-5 w-2.5 h-2.5 rounded-full ${job.dot} ring-2 ring-background`}
                />
                <div className="ml-5 flex items-start justify-between gap-3">
                  <div>
                    <p className="mb-1 text-[11px] text-muted-foreground uppercase tracking-[0.14em]">
                      {job.period}
                    </p>
                    <p className="text-[15px] font-medium text-foreground md:text-base">
                      {job.role} — {job.company}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-border bg-background/70 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-foreground/70">
                    {job.status}
                  </span>
                </div>
                <p className="ml-5 mt-2 text-xs leading-relaxed text-muted-foreground md:text-sm">
                  {job.summary}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-8 text-3xl md:text-4xl font-display font-medium text-foreground">
            Certifications
          </h2>
          <div className="space-y-3.5">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                className={`flex items-center justify-between gap-4 rounded-2xl border bg-gradient-to-br p-4 transition-all duration-300 ${cert.accent}`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${cert.dot} shrink-0`}
                  />
                  <div>
                    <p className="text-[15px] font-medium text-foreground md:text-base">
                      {cert.title}
                    </p>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
                <span className="shrink-0 text-sm text-muted-foreground">
                  {cert.year}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
export default About;
