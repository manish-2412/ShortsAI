import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#1e1b4b] to-[#0f172a] text-white">
      <div className="container flex flex-col items-center justify-center gap-8 px-4 py-16 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Intelli<span className="text-indigo-400">Clip</span>
        </h1>
        <p className="max-w-md text-lg text-slate-300">
          AI-powered podcast clipper and moment detector. Transform long-form video into viral short clips seamlessly.
        </p>
        <div className="flex gap-4">
          <Link
            href="/login"
            className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg hover:bg-indigo-500 transition-colors"
          >
            Log In
          </Link>
          <Link
            href="/dashboard"
            className="rounded-xl bg-white/10 px-6 py-3 font-semibold text-white shadow-lg hover:bg-white/20 transition-colors"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
