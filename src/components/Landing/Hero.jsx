import { Compass, Sparkles } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

export default function Hero  () {
  return (
    <div className="relative bg-gradient-to-br from-[#1a1c38] via-[#0f1123] to-[#070814] rounded-3xl p-8 md:p-16 text-center my-6 border border-gray-800 shadow-2xl overflow-hidden">
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-2xl mx-auto relative z-10">
        <span className="inline-flex items-center gap-2 bg-purple-900/40 text-purple-300 text-xs px-4 py-1.5 rounded-full border border-purple-500/30 font-medium mb-6 animate-pulse">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          
          <span>Votre Portail Anime Ultime</span>
        </span>
        
        <h1 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
          Explorez votre univers <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Anime</span> personnel
        </h1>
        
        <p className="text-gray-400 text-sm md:text-base mb-8 max-w-lg mx-auto leading-relaxed">
          Découvrez des milliers d'animes, suivez votre visionnage, attri des notes et construisez la bibliothèque de vos rêves avec AniVerse.
        </p>
        
      <Link 
          to="/anime" 
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30 transition-all duration-200 group"
        >
          <Compass className="w-4 h-4 text-white group-hover:rotate-45 transition-transform duration-300" />
          <span>Explorer le Catalogue</span>
        </Link>
      </div>
    </div>
  );
};

