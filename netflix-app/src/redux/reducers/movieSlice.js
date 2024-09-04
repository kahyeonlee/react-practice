import {createSlice} from '@reduxjs/toolkit'

const movieSlice = createSlice({
    name:'movie',
    initialState:{
        popularMovies:[],
        topRatedMovies:[],
        upcomingMovies:[]
    },
    reducers:{
        initData:(state,action)=>{
            state.popularMovies={}
            state.topRatedMovies={}
            state.upcomingMovies={}
        }
    }
})

export const MovieActions = movieSlice.actions
export default movieSlice.reducer