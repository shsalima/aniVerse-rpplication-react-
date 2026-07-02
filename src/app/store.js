import { configureStore } from "@reduxjs/toolkit";
import animeReducer from "../features/anime/animeSlice.js"
import characterReducer  from "../features/character/characterSlice.js"



export const store =configureStore({
    reducer:{
        anime:animeReducer,
        character:characterReducer,

    }
})