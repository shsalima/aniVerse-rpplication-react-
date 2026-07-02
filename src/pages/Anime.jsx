import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import AnimeHeader from "../components/Anime/AnimeHeader";
import SearchFilter from "../components/Anime/SearchFilter";
import AnimeGrid from "../components/Anime/AnimeGrid";

import {
  fetchAnimeList,
  setSearch,
  setType,
  setGenre,
} from "../features/anime/animeSlice";

export default function Anime() {
  const dispatch = useDispatch();

  const {
    animeList,
    animeLoading,
    animeError,
    search,
    type,
    genre,
  } = useSelector((state) => state.anime);
   console.log(animeList);
   
  useEffect(() => {
 
      dispatch(
        fetchAnimeList({
          search,
          type,
          genre,
        })
      );
    },[]);

   

  return (
    <div className="container mx-auto px-4">
      <AnimeHeader />

      <SearchFilter/>

      <AnimeGrid
        animes={animeList}
        loading={animeLoading}
        error={animeError}
      />
    </div>
  );
}