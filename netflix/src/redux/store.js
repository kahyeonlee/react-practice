import {configureStore} from '@reduxjs/toolkit'
import logger from 'redux-logger'
import movieReducer from './reducers/movieSlice'

export default configureStore({
    reducer:{
        movie : movieReducer
    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)
})