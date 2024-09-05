import {createSlice} from '@reduxjs/toolkit'

const movieSlice = createSlice({
    name:'movie',
    initialState:{
        popularMovies:[],
        topRatedMovies:[],
        upcomingMovies:[],
        genreList:[]
    },
    reducers:{
        initData:(state,action)=>{
            state.popularMovies = action.payload.popular;
            state.topRatedMovies = action.payload.topRated;
            state.upcomingMovies = action.payload.upcoming;
            state.genreList =action.payload.genre
        }
    }
})

export const MovieActions = movieSlice.actions
export default movieSlice.reducer