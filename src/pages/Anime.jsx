import AnimeHeader from "../components/Anime/AnimeHeader";
import SearchFilter from "../components/Anime/SearchFilter";

export default function Anime() {
    return (    
        <div className="container mx-auto px-4">
            <AnimeHeader/>
            <SearchFilter/>

        </div>
    )
}