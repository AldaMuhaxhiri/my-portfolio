import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[100dvh] w-full items-center justify-center overflow-hidden px-6 py-20">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.012) 0%, rgba(255,255,255,0) 18%), radial-gradient(circle at top right, rgba(244,63,94,0.08) 0%, transparent 34%), radial-gradient(circle at 18% 16%, rgba(232,121,249,0.06) 0%, transparent 38%), radial-gradient(circle at 50% 100%, rgba(244,63,94,0.04) 0%, transparent 42%)",
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-2xl px-4 text-center"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 rounded-[999px] bg-rose-500/12 blur-3xl" />
        <div className="pointer-events-none absolute -left-10 top-1/3 -z-10 h-40 w-40 rounded-full bg-fuchsia-500/12 blur-3xl" />
        <div className="pointer-events-none absolute -right-8 bottom-0 -z-10 h-36 w-36 rounded-full bg-pink-500/12 blur-3xl" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 inline-flex items-center gap-2.5 rounded-full bg-rose-500/10 px-5 py-2.5 ring-1 ring-inset ring-rose-400/20"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-rose-400" />
          <span className="text-xs uppercase tracking-[0.2em] text-rose-300/80">
            Error 404
          </span>
        </motion.div>

        <h1 className="mb-4 font-display text-5xl font-medium tracking-tight text-white md:text-6xl">
          <span className="gradient-shimmer">Page not found</span>
        </h1>
        <p className="mx-auto mb-10 max-w-lg text-sm leading-relaxed text-white/55 md:text-base">
          The page you are looking for does not exist or may have moved. Let
          us get you back to the homepage.
        </p>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 font-medium text-white sm:w-auto"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500 transition-opacity duration-300" />
            <span className="absolute inset-0 bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500 opacity-50 blur-lg transition-opacity duration-300 group-hover:opacity-80" />
            <Home className="relative h-4 w-4" />
            <span className="relative">Back home</span>
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white/6 px-7 py-3.5 font-medium text-white/70 ring-1 ring-inset ring-white/8 transition-all duration-300 hover:bg-rose-500/10 hover:text-white hover:ring-rose-500/20 sm:w-auto"
          >
            <ArrowLeft className="h-4 w-4" />
            Go back
          </button>
        </div>
      </motion.div>
    </main>
  );
}
