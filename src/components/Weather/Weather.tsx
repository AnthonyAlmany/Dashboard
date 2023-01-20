import React, { useState, useEffect } from 'react'
import axios from 'axios';

import citiesList from "./CitiesList"
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


function Weather() {


  const uniqueCities = Array.from(new Set(citiesList.map(city => JSON.stringify(city)))).map(city => JSON.parse(city));


  interface City {
    city: string,
    country: string
  }
  interface weatherType {
    temperature: number,
    city: string
  }

  const [value, setValue] = useState<City | null>(null);
  const [inputValue, setInputValue] = useState('');

  const [weatherData, setWeatherData] = useState<weatherType>()
  // const cities: string[] = ['Paris', 'London', 'Sydney']


  useEffect(() => {
    if (!value) return;
    const fetchWeather = async () => {
      await axios.get(`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${value.city}`)
        .then(res => {

          const data = { city: res.data.location.name, temperature: res.data.current.temp_c }
          setWeatherData(data)

        }).catch(error => console.log(error));
    }
    fetchWeather();
  }, [value])


  return (
    <div>
      <br />

      <Autocomplete

        value={value}
        onChange={(event: any, newValue: City | null) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="manageable-states-demo"
        options={uniqueCities}
        getOptionLabel={option =>
          `${option.city} ${option.country}`
        }
        isOptionEqualToValue={(option, value) => option.city === value.city}
        autoHighlight
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Choose city" />}
      />

      <div>
        <br />
        {weatherData == null ? "" : <h3>{weatherData?.city}: {weatherData?.temperature}°C</h3>}
      </div>
    </div>
  )
}

export default Weather


  // useEffect(() => {
  //   const fetchWeather = () => {

  //     Promise.allSettled(cities.map((city: string) => axios.get(`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city}&aqi=no`)))
  //       .then(responses => {
  //         setWeatherData(responses.map(result => {

  //           const temperatureData: number = result.status === 'fulfilled' && result.value.data.current.temp_c
  //           const cityData: string = result.status === 'fulfilled' && result.value.data.location.name

  //           return {
  //             temperature: temperatureData,
  //             city: cityData
  //           }
  //         }
  //         ));
  //       })
  //       .catch(console.error)
  //   }
  //   fetchWeather();
  // }, [])
  // console.log(weatherData)