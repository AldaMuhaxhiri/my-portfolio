import { motion } from "framer-motion";

const experience = [
  {
    role: "Frontend Engineer",
    company: "Tarantula",
    period: "October 2025 — Present",
    summary:
      "Building a manufacturing product with React, React Native, Expo, Vue, and Firebase.",
    color: "border-rose-500/40",
    dot: "bg-rose-400",
  },
  {
    role: "Frontend Developer",
    company: "Bbros L.L.C",
    period: "May 2024 — October 2025",
    summary:
      "Delivered high-traffic web and mobile products across automotive, real estate, and education verticals.",
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
        className="grid grid-cols-1 lg:grid-cols-2 gap-20"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-10">
            About
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed font-light text-muted-foreground mb-10">
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
          <p className="text-sm text-muted-foreground leading-relaxed">
            Bachelor's Degree in Computer Science and Engineering,
            <br></br>UBT — October 2022 -
          </p>

          <div className="mt-14 space-y-7">
            {experience.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`border-l-2 ${job.color} pl-6 relative`}
              >
                <span
                  className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full ${job.dot} ring-2 ring-background`}
                />
                <p className="text-[10px] text-white/30 uppercase tracking-[0.15em] mb-1">
                  {job.period}
                </p>
                <p className="text-white font-medium text-sm">
                  {job.role} — {job.company}
                </p>
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                  {job.summary}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-10">
            Certifications
          </h2>
          <div className="space-y-3">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                className={`flex items-center justify-between gap-4 p-4 rounded-2xl bg-gradient-to-br ${cert.accent} border transition-all duration-300`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${cert.dot} shrink-0`}
                  />
                  <div>
                    <p className="text-white font-medium text-sm">
                      {cert.title}
                    </p>
                    <p className="text-white/35 text-xs mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
                <span className="text-xs text-white/25 shrink-0">
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
