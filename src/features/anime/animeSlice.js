import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../services/animeApi";



export const fetchTrendingAnimes= createAsyncThunk(
    "anime/fetchTrendingAnimes",
    async(_NEVER,{rejectWithValue})=>{
        try{
            const response =await api.get("/top/anime",{
                params:{limit : 6 },
            })
            return response.data.data
        }catch(error){
            return rejectWithValue(error.message)
        }
    }
)





const initialState ={
    trendingAnimes :[],
    trendingLoading :false,
    trendingError:null,
}


const animeSlice=createSlice({
    name:"anime",
    initialState,
    reducers: {},

    extraReducers: (builder)=>{
        builder
            .addCase(fetchTrendingAnimes.pending,(state)=>{
                state.trendingLoading=true;
                state.trendingError=null
            })

            .addCase(fetchTrendingAnimes.fulfilled,(state,action)=>{
                state.trendingLoading=false;
                state.trendingAnimes=action.payload

            })

            .addCase(fetchTrendingAnimes.rejected,(state,action)=>{
                state.trendingLoading=false
                state.trendingError=action.payload
            })
    }
})


export default animeSlice.reducer