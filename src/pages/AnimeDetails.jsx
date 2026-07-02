import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { ArrowLeft, Star, Calendar, Tv } from "lucide-react";

import { fetchAnimeDetails } from "../features/anime/animeSlice";
import { addFavorite } from "../features/favorite/favoriteSlice";

export default function AnimeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { animeDetails, detailsLoading, detailsError } = useSelector((state) => state.anime);

  useEffect(() => {
    dispatch(fetchAnimeDetails(id));
  }, [ id]);

  const handleAddFavorite =()=>{
    dispatch(
        addFavorite({
            mal_id:animeDetails.mal_id,
            title: animeDetails.title,
            image: animeDetails.images.jpg.large_image_url,
            score: animeDetails.score,

        })
    )
  }

  if (detailsLoading) {
    return (
      <div className="container mx-auto px-4 py-10 text-center text-white">
        Chargement...
      </div>
    );
  }

  if (detailsError) {
    return (
      <div className="container mx-auto px-4 py-10 text-center text-red-500">
        {detailsError}
      </div>
    );
  }

  if (!animeDetails) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-10">

      
      <button
        onClick={() => navigate("/anime")}
        className="flex items-center gap-2 text-white hover:text-indigo-400 transition mb-8"
      >
        <ArrowLeft size={22} />
        Retour
      </button>

      <div className="bg-[#111827] rounded-2xl p-6 flex flex-col lg:flex-row gap-8">

        
        <div className="flex-shrink-0">
          <img
            src={animeDetails.images.jpg.large_image_url}
            alt={animeDetails.title}
            className="w-72 rounded-xl shadow-lg"
          />
        </div>

        
        <div className="flex-1">

          <h1 className="text-4xl font-bold text-white mb-6">
            {animeDetails.title}
          </h1>

         
          <div className="flex flex-wrap gap-6 mb-6">

            <div className="flex items-center gap-2 text-yellow-400">
              <Star size={18} />
              <span>{animeDetails.score ?? "N/A"}</span>
            </div>

            <div className="flex items-center gap-2 text-blue-400">
              <Calendar size={18} />
              <span>
                {animeDetails.aired?.from
                  ? animeDetails.aired.from.substring(0, 10)
                  : "Unknown"}
              </span>
            </div>

            <div className="flex items-center gap-2 text-green-400">
              <Tv size={18} />
              <span>{animeDetails.episodes ?? "?"} épisodes</span>
            </div>

          </div>

          
          <h2 className="text-xl text-indigo-400 font-semibold mb-3">
            Synopsis
          </h2>

          <p className="text-gray-300 leading-8 mb-8">
            {animeDetails.synopsis || "Aucun synopsis disponible."}
          </p>

          
          <h2 className="text-xl text-indigo-400 font-semibold mb-3">
            Genres
          </h2>

          <div className="flex flex-wrap gap-3 mb-8">
            {animeDetails.genres.map((genre) => (
              <span
                key={genre.mal_id}
                className="px-4 py-2 rounded-full bg-indigo-600 text-white text-sm"
              >
                {genre.name}
              </span>
            ))}
          </div>

          <h2 className="text-xl text-indigo-400 font-semibold mb-3">
            Studios
          </h2>

          <div className="flex flex-wrap gap-3 mb-8">
            {animeDetails.studios.map((studio) => (
              <span
                key={studio.mal_id}
                className="px-4 py-2 rounded-full bg-gray-700 text-white text-sm"
              >
                {studio.name}
              </span>
            ))}
          </div>
          <button
            onClick={handleAddFavorite}
            className="mt-6 px-5 py-3 bg-red-600 hover:bg-red-700 rounded-lg text-white transition"
            >
             Ajouter aux favoris
            </button>

         

        </div>
      </div>
    </div>
  );
}