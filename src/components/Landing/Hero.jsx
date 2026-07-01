import React from "react";
import { Compass } from "lucide-react";
import { Link } from "react-router";
import heroBg from "/images/751972.jpg";

export default function Hero() {
  return (
<section className="relative -mt-8 md:-mt-1 rounded-3xl overflow-hidden min-h-[520px] flex items-center justify-center">     
   <div
        className="absolute inset-0 bg-cover bg-center "
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />

      <div className="absolute inset-0 bg-black/70"></div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1020]/90 via-[#101827]/60 to-[#0B1020]/90"></div>

      <div className="relative z-10 max-w-2xl text-center px-6">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Explorez votre univers
          <br />
          <span className="text-blue-400 via-indigo-400  ">
            Anime
          </span>{" "}
          personnel
        </h1>

        <p className="mt-5 text-gray-300 text-base md:text-lg leading-7 max-w-xl mx-auto">
          Découvrez des milliers d'animes, créez votre bibliothèque
          personnelle, attribuez vos notes et suivez vos séries préférées en un
          seul endroit.
        </p>

        <Link
          to="/anime"
          className="inline-flex items-center gap-2 mt-8 px-7 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium shadow-lg transition-all duration-300 hover:scale-105"
        >
          <Compass className="w-5 h-5" />
          Explorer le Catalogue
        </Link>
      </div>
    </section>
  );
}