import { useDispatch, useSelector } from "react-redux";
import CharacterHeader from "../components/Characters/CharacterHeader";
import CharacterSearch from "../components/Characters/CharacterSearch";
import { useEffect } from "react";
import { fetchCharacters } from "../features/character/characterSlice";
import CharacterGrid from "../components/Characters/CharacterGrid";


export default function Characters(){
    const dispatch=useDispatch()
    const{characters,loading,error,search}=useSelector((state)=>state.character)

    useEffect(()=>{
        dispatch(fetchCharacters(search))
    },[search])

    return(
        <div className="container mx-auto px-4">
            <CharacterHeader/>
            <CharacterSearch/>
            <CharacterGrid
                characters={characters}
                loading={loading}
                error={error}
            />
        </div>

    )
}