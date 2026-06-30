import React from 'react';
import AnimeCard from './AnimeCard';
import { Link } from 'react-router';
import { CalendarDays, TrendingUp } from 'lucide-react';

const AnimeGrid = ({ title, animes, loading, error, viewAllLink }) => {
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
         Une erreur est survenue: {error}
      </div>
    );
  }

  return (
    <section className="my-12">
      {/* Header dyal l-section */}
      <div className="flex justify-between items-center mb-6">
       <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
          {title === 'Animes Tendances' ? (
            <TrendingUp className="w-5 h-5 text-blue-400" />
          ) : (
            <CalendarDays className="w-5 h-5 text-indigo-400" />
          )} 
          {title}
        </h2>
        {viewAllLink && (
          <Link to={viewAllLink} className="text-blue-400 hover:underline text-sm flex items-center gap-1">
            Tout voir <span>›</span>
          </Link>
        )}
      </div>

      
      {animes.length === 0 ? (
        <p className="text-gray-400">Aucun anime trouvé.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {animes.slice(0, 6).map((anime) => (
            <AnimeCard key={anime.mal_id} anime={anime} />
          ))}
        </div>
      )}
    </section>
  );
};

export default AnimeGrid;