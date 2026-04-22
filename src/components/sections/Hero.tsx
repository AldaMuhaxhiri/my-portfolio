import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-transparent px-6 pt-20 pb-24">
      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 mb-12 px-5 py-2.5 rounded-full border border-rose-500/20 bg-rose-500/5 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-rose-300/70">
            Interfaces that feel right
          </span>
        </motion.div>

        <div className="mb-6 overflow-hidden">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl font-display font-light text-foreground/45 mb-3"
          >
            I'm
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-8xl lg:text-[96px] font-display font-medium tracking-tight leading-[1] mb-4"
          >
            <span className="gradient-shimmer">Alda</span>
            <span className="gradient-shimmer"> Muhaxhiri</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl sm:text-2xl md:text-3xl font-display font-light text-foreground/68 tracking-wide"
          >
            Frontend Developer - Web & Mobile
          </motion.p>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-base md:text-lg text-muted-foreground font-light mb-14 max-w-lg mx-auto leading-relaxed"
        >
          Crafting precise, beautiful web and mobile experiences,
          {""} <br></br>
          from concept to deployment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="relative px-8 py-4 rounded-full font-medium w-full sm:w-auto overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500 transition-opacity duration-300" />
            <span className="absolute inset-0 bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500 blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
            <span className="relative text-white">View Work</span>
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-full text-foreground/72 font-medium hover:text-foreground transition-all duration-300 w-full sm:w-auto backdrop-blur-sm border border-border hover:border-rose-500/30 hover:bg-rose-500/5"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground tracking-widest uppercase"
        >
          {["React JS", "Next.js", "TypeScript", "React Native"].map(
            (tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 + i * 0.1 }}
              >
                {tech}
              </motion.span>
            ),
          )}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-rose-400/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
