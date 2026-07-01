import { configureStore } from "@reduxjs/toolkit";
import animeReducer from "../features/anime/animeSlice.js"



export const store =configureStore({
    reducer:{
        anime:animeReducer
    }
})