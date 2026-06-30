import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Hero from '../components/Landing/Hero';
import AnimeGrid from '../components/Anime/AnimeGrid';
import AnimeCard from '../components/Anime/AnimeCard';


const LandingPage = () => {
  const [trendingAnimes, setTrendingAnimes] = useState([]);
  const [trendingLoading, setTrendingLoading] = useState(true);
  const [trendingError, setTrendingError] = useState(null);

  const [seasonalAnimes, setSeasonalAnimes] = useState([]);
  const [seasonalLoading, setSeasonalLoading] = useState(true);
  const [seasonalError, setSeasonalError] = useState(null);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        setTrendingLoading(true);
        const response = await axios.get('https://api.jikan.moe/v4/top/anime', {
          params: { limit: 6 }
        });
        setTrendingAnimes(response.data.data || []);
      } catch (err) {
        setTrendingError(err.message || 'Impossible de charger les tendances.');
      } finally {
        setTrendingLoading(false);
      }
    };

    const fetchSeasonal = async () => {
      try {
        setSeasonalLoading(true);
        const response = await axios.get('https://api.jikan.moe/v4/seasons/now', {
          params: { limit: 6 }
        });
        setSeasonalAnimes(response.data.data || []);
      } catch (err) {
        setSeasonalError(err.message || 'Impossible de charger les animes de saison.');
      } finally {
        setSeasonalLoading(false);
      }
    };

    fetchTrending();
    
    const timer = setTimeout(() => {
      fetchSeasonal();
    }, 400);

    return () => clearTimeout(timer);
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
};

export default LandingPage;