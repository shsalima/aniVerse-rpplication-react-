import CharacterHeader from "../components/Characters/CharacterHeader";
import CharacterSearch from "../components/Characters/CharacterSearch";


export default function Characters(){
    return(
        <div className="container mx-auto px-4">
            <CharacterHeader/>
            <CharacterSearch/>
        </div>

    )
}