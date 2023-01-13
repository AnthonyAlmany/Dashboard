import React, { useEffect } from 'react'
import axios from 'axios';

function Api() {

    useEffect(() => {
        const fetchWeather = async () => {
            await axios.get(`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=paris&aqi=no`)
                .then(res => {
                    const data: number = res.data.current.temp_c
                    console.log(data)
                }).catch(error => console.log(error));
        }
        fetchWeather();


        const fetchCrypto = async () => {
            await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`)
                .then((res) => {
                    const data: number = res.data.bitcoin.usd;
                    console.log(data)
                }).catch(error => console.log(error));
        }
        fetchCrypto();


        const fetchMovies = async () => {
            await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_MOVIES_API_KEY}`)
                .then((res) => {
                    const data: string = res.data.results[0].title;
                    console.log(data)
                }).catch(error => console.log(error));
        }
        fetchMovies();



    }, [])




    return (
        <div></div>
    )
}

export default Api