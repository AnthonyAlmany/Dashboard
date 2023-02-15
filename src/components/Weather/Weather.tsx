import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styled from "styled-components";

import citiesList from "./CitiesList"
import WeatherCard from './WeatherCard';
import WeatherList from './WeatherList';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


import { WeatherDataType, weatherType } from '../../types/types';
import { theme } from '../../theme/theme';
import { isWhiteSpaceLike } from 'typescript';

type City = {
  city: string,
  country: string
}

type props = {
  weatherHandle: Function;
}



function Weather({ weatherHandle }: props) {


  const uniqueCities = Array.from(new Set(citiesList.map(city => JSON.stringify(city)))).map(city => JSON.parse(city));

  // Autocomplete states
  const [value, setValue] = useState<City | null>(null);
  const [inputValue, setInputValue] = useState('');

  // Set Favorite state
  const [weatherData, setWeatherData] = useState<weatherType>()
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Weather List state
  const [weatherList, setWeatherList] = useState<weatherType[]>([])
  const [cities, setCities] = useState<string[]>(['Rome', 'Dubai', 'Chicago'])

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

  //  Fetch Searched City Data
  useEffect(() => {
    if (!value) return;
    const fetchWeather = async () => {
      await axios.get(`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${value.city}`)
        .then(res => {
          const data: WeatherDataType = { city: res.data.location.name, temperature: res.data.current.temp_c, icon: res.data.current.condition.icon }
          setWeatherData(data)
          setIsLoading(false);
        }).catch(error => console.log(error));
    }
    setIsLoading(true);
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
          setIsLoading(false)
        })
        .catch(console.error)
    }
    setIsLoading(true);
    fetchWeather();
  }, [cities])


  return (
    <WeatherContainer>
      <TopContainer>
        <AutocompleteContainer>
          <Autocomplete
            style={{ width: 400, backgroundColor: "#1F2A40", borderRadius: "5px" }}
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
            renderInput={(params) => <TextField {...params} label={<h4>Choose a City</h4>} />}
          />
          {isLoading && <h4>Loading...</h4>}

        </AutocompleteContainer>
        {!isLoading ? <FavoriteContainer>{value && <WeatherCard weatherData={weatherData} weatherHandle={weatherHandle} clear={clearAutocomplete} addCity={addCity} />}</FavoriteContainer>
          : <FavoriteContainer></FavoriteContainer>}
      </TopContainer>




      <WeatherCardsContainer>{weatherList.map((weather: any, i: any) => <WeatherList key={i} weather={weather} weatherHandle={weatherHandle} deleteCity={deleteCity} />)}</WeatherCardsContainer>


    </WeatherContainer>


  )
}

const TopContainer = styled.div`
min-height: 18rem;
display: flex;
flex-direction: column;
justify-content: start;
`

const AutocompleteContainer = styled.div`
display:flex;
align-items: start;
& :first-child{
  margin-right: 10px;
}
border-color: ${theme.colors.secondary};
color:"white";
h4{
  color: ${theme.fonts.color.white};
  font-family: 'Source Sans Pro', sans-serif;
}

`

const FavoriteContainer = styled.div``



const WeatherContainer = styled.div`
width: 90%;
`

const WeatherCardsContainer = styled.div`
height: 500px;
display: flex;
flex-direction: column; 
justify-content: start;


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