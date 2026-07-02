import React from "react";
import AnimeCard from "./AnimeCard";
import { Link } from "react-router";
import { CalendarDays, TrendingUp } from "lucide-react";

export default function AnimeGrid({
  title,
  animes,
  loading,
  error,
  viewAllLink,
  onDelete,
   showDelete 
}) {
  if (loading) {
    return (
      <div className="py-10 text-center text-gray-400">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
        Chargement des animes...
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-10 text-center text-red-500">
        Une erreur est survenue : {error}
      </div>
    );
  }

  if (animes.length === 0) {
    return (
      <div className="py-10 text-center text-gray-400">Aucun anime trouvé.</div>
    );
  }

  return (
    <section className="my-12">
      {title && (
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            {title === "Animes Tendances" ? (
              <TrendingUp className="w-5 h-5 text-blue-400" />
            ) : (
              <CalendarDays className="w-5 h-5 text-indigo-400" />
            )}

            {title}
          </h2>

          {viewAllLink && (
            <Link
              to={viewAllLink}
              className="text-blue-400 hover:underline text-sm"
            >
              Tout voir →
            </Link>
          )}
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {animes &&
          animes.map((anime) => <AnimeCard key={anime.mal_id} anime={anime} onDelete={onDelete} showDelete={showDelete} />)}
      </div>
    </section>
  );
}
