import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Api() {

    // interface weatherType {
    //     temperature: number,
    //     city: string
    // }
    // const [weatherData, setWeatherData] = useState<weatherType[]>([])
    // const cities: string[] = ['Paris', 'London', 'Sydney']


    // useEffect(() => {
    //     const fetchWeather = () => {

    //         Promise.allSettled(cities.map((city: string) => axios.get(`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city}&aqi=no`)))
    //             .then(responses => {
    //                 setWeatherData(responses.map(result => {

    //                     const temperatureData: number = result.status === 'fulfilled' && result.value.data.current.temp_c
    //                     const cityData: string = result.status === 'fulfilled' && result.value.data.location.name

    //                     return {
    //                         temperature: temperatureData,
    //                         city: cityData
    //                     }
    //                 }
    //                 ));
    //             })
    //             .catch(console.error)
    //     }
    //     fetchWeather();
    // }, [])
    // console.log(weatherData)


    return (
        <div></div>
    )
}


export default Api






        // useEffect(() => {
        //     const fetchWeather = async () => {
        //         await axios.get(`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=paris&aqi=no`)
        //             .then(res => {
        //                 const data: number = res.data.current.temp_c
        //                 console.log(data)
        //             }).catch(error => console.log(error));
        //     }
        //     fetchWeather();


        //     const fetchCrypto = async () => {
        //         await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`)
        //             .then((res) => {
        //                 const data: number = res.data.bitcoin.usd;
        //                 console.log(data)
        //             }).catch(error => console.log(error));
        //     }
        //     fetchCrypto();


        //     const fetchMovies = async () => {
        //         await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_MOVIES_API_KEY}`)
        //             .then((res) => {
        //                 const data: string = res.data.results[0].title;
        //                 console.log(data)
        //             }).catch(error => console.log(error));
        //     }
        //     fetchMovies();



        // }, [])