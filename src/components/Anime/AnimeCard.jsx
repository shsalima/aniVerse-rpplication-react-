import { Calendar, Star, Tv } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

export default function AnimeCard  ({ anime }) {
    if (!anime) return null;
  const {
    mal_id,
    title,
    images,
    score,
    type,
    year,
    episodes
  } = anime;

  return (
    <Link 
      to={`/anime/${mal_id}`} 
      className="bg-[#0b1220] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col group"
    >
     
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        <img 
          src={images?.jpg?.large_image_url || images?.jpg?.image_url} 
          alt={title}
          className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
          loading="lazy"
        />
        
       
        {score && (
          <div className="absolute top-3 left-3 bg-[#eab308]/90 text-black font-bold text-xs px-2 py-1 rounded flex items-center gap-1 backdrop-blur-sm">
            <Star className="w-3.5 h-3.5 fill-black text-black" /> 
            <span>{score.toFixed(1)}</span>
          </div>
        )}

        
        <div className="absolute top-3 left-20 bg-black/60 text-white font-medium text-xs px-2 py-1 rounded backdrop-blur-sm">
          {type || 'TV'}
        </div>
      </div>

      
      <div className="p-4 flex flex-col flex-grow justify-between gap-3">
        <h3 className="text-white font-semibold text-sm line-clamp-2 min-h-[40px] group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        
        
        <div className="flex items-center justify-between text-gray-400 text-xs border-t border-gray-800/60 pt-2">
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-gray-400" />
            <span>{year || 'N/A'}</span>
          </div>
          <div className="flex items-center gap-1">
            <Tv className="w-3.5 h-3.5 text-gray-400" />
            <span>{episodes ? `${episodes} éps` : 'N/A'}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

