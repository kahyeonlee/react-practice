import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';

const WeatherPage = () => {
    const [weather, setWeather]=useState(null);

    const getCurrentWeather = async()=>{
        let cityName = 'Gwangju';
        const API_Key= process.env.REACT_APP_WEATHER_API_KEY;
        let weather_url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_Key}&units=metric`
        const res = await axios.get(weather_url)
        const data = res.data
        console.log('날씨정보 : ',data);

        // api호출 응답결과를 state에 저장
        setWeather(data)
    }

    // 처음 렌더링했을때 API호출
    useEffect(()=>{
        getCurrentWeather();
    },[])

  return (
    <div>
        <h1>WeatherPage</h1>
        <div>
          <p>도시 : {weather?.name}</p>
          <p>온도 : {weather?.main.temp}</p>
          <p>날씨 상태 : {weather?.weather[0].description}</p>
          <p><img src={` https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}/></p>
        </div>

    </div>
  )
}

export default WeatherPage