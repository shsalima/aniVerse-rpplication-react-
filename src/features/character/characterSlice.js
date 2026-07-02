
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../services/animeApi";


export const fetchCharacters=createAsyncThunk(
    "character/fetchCharacters",
    async(_,{rejectWithValue})=>{
        try{
            const response=await api.get("/characters")
            return response.data.data
        }catch(error){
            return rejectWithValue(error.message)
        }

    }
)



const initialState={
    characters:[],
    loading:false,
    error:null
}


const characherSlice=createSlice({
    name:"character",
    initialState,
    reducers:{},
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