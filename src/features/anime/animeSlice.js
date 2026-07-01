import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../services/animeApi";



export const fetchTrendingAnimes= createAsyncThunk(
    "anime/fetchTrendingAnimes",
    async(_NEVER,{rejectWithValue})=>{
        try{
            const response =await api.get("/top/anime"
              
            )
            return response.data.data
        }catch(error){
            return rejectWithValue(error.message)
        }
    }
)




export const fetchSeasonalAnimes =createAsyncThunk(
    "anime/fetchSeasonalAnimes",
    async(_,{rejectWithValue})=>{
        try{
            const response=await api.get("/seasons/now")
            return response.data.data
        }catch(error){
            return rejectWithValue(error.message)
        }
    }
)


export const fetchAnimeList=createAsyncThunk(
    "anime/fetchAnimeList",
    async(
        {
            page=1,
            search="",
            type="",
            genre="",

        },
        {rejectWithValue}
    )=>{
        try{
            const response=await api.get("/anime",{
                params:{
                    page,
                    q:search,
                    type,
                    genres:genre,

                }
            })
            return response.data
        }catch(error){
            return rejectWithValue(error.message)
        }
    }
)





const initialState ={
    trendingAnimes :[],
    trendingLoading :false,
    trendingError:null,

    seasonalAnimes:[],
    seasonalLoading:false,
    seasonalError:null,

    animeList:[],
    animeLoading:false,
    animeError:null,

    currentPage:1,
    lastPage:1,

    search:"",
    type:"",
    genre:"",

};



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

            // *********************************

            .addCase(fetchSeasonalAnimes.pending, (state) => {
                state.seasonalLoading = true;
                state.seasonalError = null;
            })

            .addCase(fetchSeasonalAnimes.fulfilled, (state, action) => {
                state.seasonalLoading = false;
                state.seasonalAnimes = action.payload;
            })

            .addCase(fetchSeasonalAnimes.rejected, (state, action) => {
               state.seasonalLoading = false;
               state.seasonalError = action.payload;
            })

            // ****************************
            .addCase(fetchAnimeList.pending,(state)=>{
                state.animeLoading = true;
                state.animeError = null;

            })

            .addCase(fetchAnimeList.fulfilled,(state,action)=>{
                state.animeLoading=false;
                state.animeList=action.payload.data
                state.currentPage=action.payload.pagination.current_page
                state.lastPage=action.payload.pagination.last_visible_page
            })

            .addCase(fetchAnimeList.rejected, (state, action) => {
                state.animeLoading = false;
                state.animeError = action.payload;
            })



    }
})


export default animeSlice.reducer