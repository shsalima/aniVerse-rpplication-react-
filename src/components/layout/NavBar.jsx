import { useState } from "react";
import { Link, useLocation } from "react-router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Explorer", path: "/anime" },
    { name: "Personnages", path: "/characters" },
    { name: "Favoris", path: "/favorites" },
    { name: "Ma Bibliothèque", path: "/my-library" },
    { name: "Mes Notes", path: "/my-ratings" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-[#0F172B]/95 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center w-12 h-12 rounded-[14px] bg-gradient-to-b from-[#A855F7] to-[#2563EB] shadow-[0_8px_20px_-4px_rgba(168,85,247,0.4)]">
              <span className="text-white font-black text-xl">A</span>
            </div>

            <span className="text-[22px] font-bold tracking-wide">
              <span className="text-[#3B82F6]">Ani</span>
              <span className="text-white">Verse</span>
            </span>
          </Link>
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? "bg-[#C27AFF]/20 text-[#C27AFF] border border-[#C27AFF]/30"
                    : "text-slate-300 hover:text-[#F1F5F9] hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-[#1A2540] text-[#F1F5F9] hover:bg-[#25314E]"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-[#0F172B] border-t border-white/10">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? "bg-[#C27AFF] text-[#F1F5F9]"
                    : "text-slate-300 hover:bg-white/5 hover:text-[#F1F5F9]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
