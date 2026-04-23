import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import cvFile from "@assets/AldaCV.pdf";

export function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl scroll-mt-28 overflow-hidden px-6 py-28 text-center">
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
          <span className="text-foreground">Let's build something </span>
          <span className="gradient-shimmer">meaningful.</span>
        </h2>

        <p className="text-lg text-muted-foreground font-light mb-14">
          Open to frontend roles and select freelance projects.
        </p>

        <div className="mb-8 flex flex-wrap items-center justify-center gap-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
          <span className="rounded-full border border-border px-3 py-1.5">
            Frontend Engineer
          </span>
          <span className="rounded-full border border-border px-3 py-1.5">
            React / Next.js / TypeScript
          </span>
          <span className="rounded-full border border-border px-3 py-1.5">
            Remote-friendly
          </span>
        </div>

        <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-muted-foreground">
          If you are building a product that needs polished UI, strong
          frontend architecture, and reliable delivery, I would love to
          collaborate.
        </p>

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

        <p className="mt-5 text-xs text-muted-foreground">
          Usually replies within 24 hours.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground"
        >
          <a href="tel:+38348749559" className="transition hover:text-foreground/80">
            +383 48 749 559
          </a>
          <span className="h-4 w-px bg-border" />
          <a
            href="https://maps.google.com/?q=Prishtine,Kosovo"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-foreground/80"
          >
            Prishtine, Kosovo
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <a
            href="https://www.linkedin.com/in/alda-muhaxhiri-303541274/"
            target="_blank"
            rel="noreferrer"
            aria-label="Open LinkedIn profile"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/60 text-foreground/75 transition hover:border-rose-400/35 hover:text-rose-500"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="h-4.5 w-4.5"
            >
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM.5 8h4V24h-4V8zm7 0h3.8v2.2h.1c.5-1 1.9-2.2 4-2.2 4.2 0 5 2.7 5 6.3V24h-4v-7.7c0-1.8 0-4.2-2.6-4.2s-3 2-3 4V24h-4V8z" />
            </svg>
          </a>
          <a
            href="mailto:aldamuhaxhiri14@gmail.com"
            aria-label="Send email"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/60 text-foreground/75 transition hover:border-rose-400/35 hover:text-rose-500"
          >
            <Mail className="h-4.5 w-4.5" />
          </a>
          <a
            href="https://github.com/AldaMuhaxhiri"
            target="_blank"
            rel="noreferrer"
            aria-label="Open GitHub profile"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/60 text-foreground/75 transition hover:border-rose-400/35 hover:text-rose-500"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="h-4.5 w-4.5"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.12.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.54-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.08 1.84 2.83 1.31 3.52 1 .11-.79.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.05.14 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.82 1.1.82 2.22 0 1.61-.01 2.9-.01 3.3 0 .32.21.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a
            href={cvFile}
            download="AldaCV.pdf"
            aria-label="Download CV"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/60 text-foreground/75 transition hover:border-rose-400/35 hover:text-rose-500"
          >
            <Download className="h-4.5 w-4.5" />
          </a>
        </motion.div>

      </motion.div>
    </section>
  );
}
export default Contact;