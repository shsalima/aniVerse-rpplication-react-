import CharacterCard from "./CharacterCard";

export default function CharacterGrid({characters,loading,error}){

    if (loading) {
    return (
      <div className="py-10 text-center text-gray-400">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
        Chargement des personnages...
      </div>
    );
  }
   if (error) {
    return (
      <div className="py-10 text-center text-red-500">
        Une erreur est survenue : {error}
      </div>
    );
  }
    if (characters.length === 0) {
    return (
      <div className="py-10 text-center text-gray-400">
        Aucun personnage trouvé.
      </div>
    );
  }
    return(
           
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {characters.map((character)=>(
                <CharacterCard
                    key={character.mal_id}
                    character={character}
                />
            ))

            }
        </div>


    )

}