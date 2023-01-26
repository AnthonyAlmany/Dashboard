import React from 'react'
import styled from "styled-components";
import { theme } from "../../theme/theme";

import { weatherType } from '../../App';

type props = {
    weather: weatherType;
    weatherHandle: Function;
    deleteCity: Function;
}

function WeatherList({ weather, weatherHandle, deleteCity }: props) {
    return (
        <div className='cards-container'>
            <WeatherCardStyled>
                <CityStyled>{weather?.city.toUpperCase()}</CityStyled>
                <h3>{weather?.temperature} °C</h3>
                <img src={weather?.icon} alt="weather-icon" />
                <button onClick={() => deleteCity(weather.city)}>Delete</button>
                <button onClick={() => weatherHandle(weather)}>Add to favorite</button>
            </WeatherCardStyled>
        </div>

    )
}

const WeatherCardStyled = styled.div`
   width: 800px;
   height: 80px;
   display: flex;
   align-items: center;
   justify-content: space-around;
   color: ${theme.colors.tertiary};
   border-radius: ${theme.borderRadius.mRounded};
   background-color: ${theme.colors.primary};
   box-shadow: 1px 1px 6px ${theme.colors.tertiary};

   button {
      height: 50px;
      width: 60px;
      border: none;
      color: ${theme.colors.primary};
      background-color: ${theme.colors.secondary};
      border-radius: ${theme.borderRadius.rounded};
      &:hover {
         font-weight: bold;
         border: 2px solid ${theme.colors.secondary};
         color: ${theme.colors.secondary};
         background-color: ${theme.colors.primary};
         box-shadow: 3px 3px 5px ${theme.colors.tertiary};
      }
   }
   
`;

const CityStyled = styled.h3`
width: 120px;
`



export default WeatherList