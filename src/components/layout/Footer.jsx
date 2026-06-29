import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0F172B] py-10 mt-16">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center justify-center text-center">

        <div className="flex items-center gap-2 text-sm text-slate-400">

          <Sparkles
            size={14}
            className="text-[#C27AFF]"
          />

          <span>
            AniVerse © 2026 — Explorez l'univers infini de l'Anime
          </span>

        </div>

        <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-slate-600">
          Propulsé par Jikan API et JSON Database
        </p>

      </div>
    </footer>
  );
}