import React from 'react'
import {useDispatch} from 'react-redux'
import { MovieActions } from '../redux/reducers/movieSlice';
import Banner from '../components/Banner';

const Home = () => {

    const dispatch =useDispatch();

    const init =()=>{
        dispatch(MovieActions.initData({}))
    }

  return (
    <div>
        home
        <Banner/>
    </div>
  )
}

export default Home