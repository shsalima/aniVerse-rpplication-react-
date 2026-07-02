

import { Search } from "lucide-react";

export default function CharacterSearch() {
  return (
    <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5 mb-10">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Rechercher un personnage (ex: Levi Ackerman, Goku)..."
            className="w-full h-12 pl-12 pr-4 rounded-xl bg-[#0F172A] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button className="h-12 px-8 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition">
          Rechercher
        </button>
      </div>
    </div>
  );
}