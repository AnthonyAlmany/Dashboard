import React, { useEffect, useState } from 'react'
import axios from 'axios';

// import City from './City';
// interface foo {
//     city: any
// }
// interface bar {
//     data: any

// }


interface weatherType {
    temperature: number,
    city: string
}

function Api() {
    const [weatherData, setWeatherData] = useState<weatherType[]>([])
    const cities: string[] = ['Paris', 'London', 'Sydney']
    const coins = ['bitcoin', 'ripple']
    // const [marketData, setMarketData] = useState<marketType[]>()

    // useEffect(() => {
    //     const fetchCrypto = () => {
    //         const getUrl = Promise.allSettled(coins.map(coin => axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`)))
    //         getUrl.then((responses) => {
    //             // const data = res.data;
    //             responses.map(result => {
    //                 const data: any = result.status === 'fulfilled' && result.value
    //                 setMarketData(data)
    //                 console.log(data)
    //             })
    //         }).catch(error => console.log(error));
    //     }
    //     fetchCrypto();
    // }, [])

    useEffect(() => {
        const fetchWeather = () => {

            Promise.allSettled(cities.map((city: string) => axios.get(`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city}&aqi=no`)))
                .then(responses => {
                    setWeatherData(responses.map(result => {

                        const temperatureData: number = result.status === 'fulfilled' && result.value.data.current.temp_c
                        const cityData: string = result.status === 'fulfilled' && result.value.data.location.name

                        return {
                            temperature: temperatureData,
                            city: cityData
                        }
                    }
                    ));
                })
                .catch(console.error)
        }
        fetchWeather();
    }, [])
    console.log(weatherData)



    return (
        <div>
            {weatherData ? weatherData.map((weather: weatherType, i: number) => <p key={i}>{weather.city} {weather.temperature}</p>) : null}
        </div>
    )
}

export default Api;










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
// }, []) */}
