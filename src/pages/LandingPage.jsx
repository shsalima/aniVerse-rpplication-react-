import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Hero from "../components/Landing/Hero";
import AnimeGrid from "../components/Anime/AnimeGrid";

import { fetchSeasonalAnimes, fetchTrendingAnimes } from "../features/anime/animeSlice";

export default function LandingPage() {
  const dispatch = useDispatch();

  const {
    trendingAnimes,
    trendingLoading,
    trendingError,

     seasonalAnimes,
    seasonalLoading,
    seasonalError
  } = useSelector((state) => state.anime);

  useEffect(() => {
    dispatch(fetchTrendingAnimes());
    dispatch(fetchSeasonalAnimes());
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-8 pb-12">
      <Hero />

      <AnimeGrid
        title="Animes Tendances"
        animes={trendingAnimes}
        loading={trendingLoading}
        error={trendingError}
        viewAllLink="/anime"
      />

         <AnimeGrid
        title="Animes de Saison"
        animes={seasonalAnimes}
        loading={seasonalLoading}
        error={seasonalError}
        viewAllLink="/anime"
        
      />
    </div>
  );
}