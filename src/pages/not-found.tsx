import { Link } from "wouter"

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">404</p>
      <h1 className="font-display text-4xl text-zinc-100">Page not found</h1>
      <p className="text-zinc-400">The page you are trying to reach does not exist in this portfolio.</p>
      <Link href="/" className="rounded-full border border-rose-400/40 bg-rose-500/15 px-5 py-2 text-sm text-rose-100 hover:bg-rose-500/25">
        Back to homepage
      </Link>
    </main>
  )
}
