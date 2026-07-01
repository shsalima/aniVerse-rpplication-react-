import { Search } from "lucide-react";


export default function SearchFilter(){


    return(
     <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5 mb-10">
       < div className="flex flex-col lg:flex-row gap-4">

          <div className="relative flex-1"> 
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 " size={18}/>
            <input 
              type="text" 
              name=""
              placeholder="Rechercher par titre (ex: Attack on Titan)..."
              
              onKeyDown={(e)=>{
                if(e.key === "Enter"){
                    console.log("hhhh")
                }
              }}
              className="w-full h-12 pl-12 pr-4 rounded-xl bg-[#0F172A] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
         />
         </div>
         <select 
            name=""
            id=""
            className="h-12 px-4 rounded-xl bg-[#0F172A] border border-gray-700 text-white w-full lg:w-52 focus:outline-none focus:ring-2 focus:ring-indigo-500"
         >
            <option value="">Tous les Formats</option>
            <option value="tv">TV</option>
            <option value="movie">Movie</option>
            <option value="ova">OVA</option>
            <option value="special">Special</option>
         </select>
         <select
           name=""
           id=""
           className="h-12 px-4 rounded-xl bg-[#0F172A] border border-gray-700 text-white w-full lg:w-52 focus:outline-none focus:ring-2 focus:ring-indigo-500"

         >
            <option value="">Tous les Genres</option>
            <option value="1">Action</option>
            <option value="2">Adventure</option>
            <option value="4">Comedy</option>
            <option value="8">Drama</option>
            <option value="10">Fantasy</option>

         </select>
         <button 
           className="w-full lg:w-16 h-12 rounded-xl bg-blue-600 hover:opacity-90 transition flex items-center justify-center"
         >
            <Search size={20} className="text-white" />


         </button>


        </div>

    </div> 
    )
}