import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    color: "bg-rose-500/10 text-rose-300 border-rose-500/20",
    dot: "bg-rose-400",
    items: ["React.js", "React Native", "Next.js", "TypeScript", "JavaScript", "Vite", "Redux", "RTK Query", "Zustand"]
  },
  {
    category: "Tools",
    color: "bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20",
    dot: "bg-fuchsia-400",
    items: ["Node.js", "Express.js", "MySQL", "Redis", "Git", "Expo", "Firebase", "Socket.io", "Pusher", "Xcode", "Jira", "Cloudflare"]
  },
  {
    category: "Design",
    color: "bg-pink-500/10 text-pink-300 border-pink-500/20",
    dot: "bg-pink-400",
    items: ["Tailwind", "Bootstrap", "HTML5", "Responsive Design", "UI/UX", "Design Systems", "Accessibility"]
  }
];

export function Skills() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-1 lg:grid-cols-4 gap-12"
      >
        <div className="lg:col-span-1">
          <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-6">Expertise</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">Full-stack capable, frontend-focused. Building for performance, scale, and real users.</p>
        </div>

        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + (idx * 0.12) }}
            >
              <div className="flex items-center gap-2 mb-5">
                <span className={`w-2 h-2 rounded-full ${group.dot}`} />
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + idx * 0.1 + i * 0.04 }}
                    whileHover={{ scale: 1.07, transition: { duration: 0.15 } }}
                    className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium border cursor-default ${group.color}`}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
export default Skills;