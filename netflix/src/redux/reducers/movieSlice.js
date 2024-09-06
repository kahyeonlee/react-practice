import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movie",
    initialState:{
        popularMovies:[],
        topRatedMovies :[],
        upcomingMovies:[],
        genreList:[]
    },
    reducers:{
        initData:(state,action)=>{
            state.popularMovies = action.payload.p;
            state.topRatedMovies = action.payload.t;
            state.upcomingMovies = action.payload.u;
        }
    }
})

export const {initData} = movieSlice.actions
export default movieSlice.reducer