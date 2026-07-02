import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";

import { fetchCharacterDetails } from "../features/character/characterSlice";

export default function CharacterDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { characterDetails ,detailsLoading ,detailsError} = useSelector((state) => state.character);

  useEffect(() => {
    dispatch(fetchCharacterDetails(id));
  }, [ id]);

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

  if (!characterDetails) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-10">

      
      <button
        onClick={() => navigate("/characters")}
        className="flex items-center gap-2 text-white hover:text-indigo-400 transition mb-8"
      >
        <ArrowLeft size={22} />
        Retour
      </button>

      <div className="bg-[#111827] rounded-2xl p-6 flex flex-col lg:flex-row gap-8">

        <div className="flex-shrink-0">
          <img
            src={characterDetails.images.jpg.image_url}
            alt={characterDetails.name}
            className="w-72 rounded-xl shadow-lg"
          />
        </div>

        
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-white mb-6">
            {characterDetails.name}
          </h1>

          <h2 className="text-xl text-indigo-400 font-semibold mb-3">
            Description
          </h2>

          <p className="text-gray-300 leading-8 whitespace-pre-line">
            {characterDetails.about || "Aucune description disponible."}
          </p>

          <h2 className="text-xl text-indigo-400 font-semibold mt-8 mb-4">
            Animes associés
          </h2>

          <div className="flex flex-wrap gap-3">
            {characterDetails.anime?.length > 0 ? (
              characterDetails.anime.map((item) => (
                <span
                  key={item.anime.mal_id}
                  className="px-4 py-2 rounded-full bg-indigo-600 text-white text-sm"
                >
                  {item.anime.title}
                </span>
              ))
            ) : (
              <p className="text-gray-400">
                Aucun anime associé.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}