import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styled from "styled-components";

import citiesList from "./CitiesList"
import WeatherCard from './WeatherCard';
import WeatherList from './WeatherList';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { weatherType } from '../../App';


type City = {
  city: string,
  country: string
}



function Weather({ weatherHandle }: any) {


  const uniqueCities = Array.from(new Set(citiesList.map(city => JSON.stringify(city)))).map(city => JSON.parse(city));

  // Autocomplete states
  const [value, setValue] = useState<City | null>(null);
  const [inputValue, setInputValue] = useState('');

  // Set Favorite state
  const [weatherData, setWeatherData] = useState<weatherType>()

  // Weather List state
  const [weatherList, setWeatherList] = useState<weatherType[]>([])
  const [cities, setCities] = useState<string[]>(['Paris', 'London', 'Sydney'])

  // Clear Autocomplete field function
  const clearAutocomplete = () => { setValue(null) }

  // Add City to List function
  const addCity = (city: string) => {
    if (!cities.includes(city) && cities.length < 5) {
      setCities([...cities, city])
    }
  }

  // Delete City from List function
  const deleteCity = (arg: string) => {
    setCities(cities.filter(city => city !== arg))

  }

  //  Fetch Favorite City Data
  useEffect(() => {
    if (!value) return;
    const fetchWeather = async () => {
      await axios.get(`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${value.city}`)
        .then(res => {
          const data = { city: res.data.location.name, temperature: res.data.current.temp_c, icon: res.data.current.condition.icon }
          setWeatherData(data)
        }).catch(error => console.log(error));
    }
    fetchWeather();
  }, [value])

  // Fetch List of Cities Data
  useEffect(() => {
    const fetchWeather = () => {

      Promise.allSettled(cities.map((city: string) => axios.get(`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city}&aqi=no`)))
        .then(responses => {
          setWeatherList(responses.map(result => {
            const temperatureData: number = result.status === 'fulfilled' && result.value.data.current.temp_c
            const cityData: string = result.status === 'fulfilled' && result.value.data.location.name
            const iconData: string = result.status === 'fulfilled' && result.value.data.current.condition.icon

            return { city: cityData, temperature: temperatureData, icon: iconData }
          }
          ));
        })
        .catch(console.error)
    }
    fetchWeather();
  }, [cities])


  return (
    <WeatherContainer>

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
        <AutocompleteContainer>{value && <WeatherCard weatherData={weatherData} weatherHandle={weatherHandle} clear={clearAutocomplete} addCity={addCity} />}</AutocompleteContainer>
        <WeatherCardsContainer>{weatherList.map((weather: any, i: any) => <WeatherList key={i} weather={weather} weatherHandle={weatherHandle} deleteCity={deleteCity} />)}</WeatherCardsContainer>
      </div>

    </WeatherContainer>


  )
}

const AutocompleteContainer = styled.div`
height: 200px;
`

const WeatherContainer = styled.div`
width: 90%;
`

const WeatherCardsContainer = styled.div`
height: 500px;
display: flex;
flex-direction: column; 
justify-content: space-around;

`

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