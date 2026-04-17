import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl overflow-hidden px-6 py-28 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xs font-medium tracking-[0.2em] uppercase text-rose-400/60 mb-6"
        >
          Let's connect
        </motion.p>

        <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tight mb-6">
          <span className="text-white">Let's build something </span>
          <span className="gradient-shimmer">meaningful.</span>
        </h2>

        <p className="text-lg text-muted-foreground font-light mb-14">
          Open to mid-level roles and selective freelance projects.
        </p>

        <div className="mb-8 flex flex-wrap items-center justify-center gap-2 text-xs uppercase tracking-[0.14em] text-white/45">
          <span className="rounded-full border border-white/10 px-3 py-1.5">
            Frontend Engineer
          </span>
          <span className="rounded-full border border-white/10 px-3 py-1.5">
            React / TypeScript
          </span>
          <span className="rounded-full border border-white/10 px-3 py-1.5">
            Remote-friendly
          </span>
        </div>

        <motion.a
          href="mailto:aldamuhaxhiri14@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="relative inline-flex items-center justify-center px-10 py-5 rounded-full font-medium text-lg overflow-hidden group"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500" />
          <span className="absolute inset-0 bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500 blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
          <span className="relative text-white">Say Hello →</span>
        </motion.a>

        <p className="mt-5 text-sm text-white/40">
          Usually replies within 24 hours.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex items-center justify-center gap-6 text-sm text-white/25"
        >
          <span>+383 48 749 559</span>
          <span className="w-px h-4 bg-white/10" />
          <span>Prishtine, Kosovo</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
export default Contact;