import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteFavorite, fetchFavorites } from "../features/favorite/favoriteSlice";
import AnimeGrid from "../components/Anime/AnimeGrid";

export default function Favorites() {
  const dispatch = useDispatch();

  const { favorites, loading, error} = useSelector((state) => state.favorite);

  useEffect(() => {
    dispatch(fetchFavorites());
  }, []);

  const handleDelete=(id)=>{
    dispatch(deleteFavorite(id))
  }

  return (
    <div className="container mx-auto px-4 py-10">

      <h1 className="text-3xl font-bold text-white mb-8">
        Mes Favoris 
      </h1>

      <AnimeGrid
        animes={favorites}
        loading={loading}
        error={error}
         showDelete={true}
         onDelete={handleDelete}
      />

    </div>
  );
}