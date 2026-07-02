import { Link } from "react-router";



export default function CharacterCard({character}){
    return(
        <Link
            to={`/characters/${character.mal_id}`}
            className="group block overflow-hidden rounded-xl border border-gray-700 bg-[#0F172A] hover:border-indigo-500 transition"
        >
            <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={character.images.jpg.image_url}
                  alt={character.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
            </div>
            <div className="p-3">
                <h3 className="text-white font-semibold text-sm truncate">
                    {character.name}
                </h3>

            </div>

        </Link>
    )
}