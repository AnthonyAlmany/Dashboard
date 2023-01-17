import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Api() {
    const [weatherData, setWeatherData] = useState([])
    const cities = ['Paris', 'London', 'Sydney']
    // const coins = ['bitcoin', 'ripple']


    useEffect(() => {
        const fetchWeather = () => {

            Promise.allSettled(cities.map((city) => axios.get(`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city}&aqi=no`)))
                .then(responses => {
                    setWeatherData(responses.map(result => {
                        return {
                            city: result.value.data.current.temp_c
                        };
                    }));
                })
                .catch(console.error)
        }
        fetchWeather();
    }, [])

    console.log(weatherData)


    // useEffect(() => {
    //     async function fetchWeatherData() {

    //         const promises = cities.map((city) => axios.get(`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city}&aqi=no`));
    //         try {
    //             const weathers = (await Promise.allSettled(promises)).map((result) => {
    //                 return {
    //                     city: result.value.data.current.temp_c
    //                 };
    //             });

    //             setWeatherData(weathers)
    //             console.log(weathers)

    //         } catch (err) {
    //             console.error(err);

    //         }
    //     }
    //     fetchWeatherData();
    // }, [])





    // useEffect(() => {
    //     const fetchWeather = () => {
    //         Promise.allSettled(cities.map(city => axios.get(`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city}&aqi=no`)).concat(axios.get())
    //             .then(responses => {
    //                 setWeatherData(responses.map(result => {
    //                     return {
    //                         city: result.value.data.current.temp_c
    //                     };
    //                 }));
    //             }, (rejected) => console.error(rejected))
    //             .catch(console.error)
    //             .finally(
    //                 console.debug('clean up generic')
    //             );
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



// useEffect(() => {
//     const fetchWeather = async () => {
//         const filterSuccessfulOnly = responses => Promise.resolve(responses.filter(({ status }) => status !== 'rejected'));
//         const formatData = responses => Promise.resolve(responses.map(result => {
//             return {
//                 city: result.value.data.current.temp_c
//             }
//         }));

//         const getResponses = Promise.allSettled(cities.map(city => axios.get(`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city}&aqi=no`)));
//         getResponses
//             .then(filterSuccessfulOnly)
//             .then(formatData)
//             .then(setWeatherData)
//             .catch(e => console.error(e))

//         console.log('Fetch other stuff and render it');
//     }
//     fetchWeather();
// }, [])
