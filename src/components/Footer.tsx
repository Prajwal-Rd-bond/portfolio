import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-zinc-500 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &amp; Framer Motion.
        </p>
        <p className="font-mono text-xs text-zinc-600">Designed &amp; developed from scratch.</p>
      </div>
    </footer>
  );
}
