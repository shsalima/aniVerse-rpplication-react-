
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../services/animeApi";
import { setSearch } from "../anime/animeSlice";


export const fetchCharacters=createAsyncThunk(
    "character/fetchCharacters",
    async(search,{rejectWithValue})=>{
        try{
            const response=await api.get("/characters",{
                params:{
                    q:search,
                }
            })
            return response.data.data
        }catch(error){
            return rejectWithValue(error.message)
        }

    }
)







const initialState={
    characters:[],
    loading:false,
    error:null,

    search:"",
}

const characherSlice=createSlice({
    name:"character",
    initialState,
    reducers:{
        setSearchCharacter(state,action){
            state.search=action.payload

        }
    },
    extraReducers:(builder)=>{
        builder
            .addCase(fetchCharacters.pending,(state)=>{
                state.loading=true
                state.error=null
            })
            .addCase(fetchCharacters.fulfilled,(state,action)=>{
                state.loading=false
                state.characters=action.payload
            })
            .addCase(fetchCharacters.rejected,(state,action)=>{
                state.loading=false
                state.error=action.payload

            })
    }

})
export default characherSlice.reducer
export const {setSearchCharacter}= characherSlice.actions