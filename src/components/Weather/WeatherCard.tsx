import React, { useState } from 'react'
import { theme } from "../../theme/theme";
import styled from "styled-components";
import { weatherType } from '../../App';

type props = {
    weatherData?: weatherType;
    weatherHandle: Function;
}


function WeatherCard({ weatherData, weatherHandle }: props) {


    return (

        <WeatherCardStyled>
            <h3>{weatherData?.city.toUpperCase()}</h3>
            <h3>{weatherData?.temperature} °C</h3>
            <img src="//cdn.weatherapi.com/weather/64x64/night/296.png" alt="weather-icon" />
            <button onClick={() => weatherHandle(weatherData)}>Add to favorite</button>
        </WeatherCardStyled>
    )
}

const WeatherCardStyled = styled.div`
   width: 200px;
   height: 250px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-around;
   color: ${theme.colors.tertiary};
   border-radius: ${theme.borderRadius.extraRounded};
   background-color: ${theme.colors.primary};
   box-shadow: 5px 5px 8px ${theme.colors.tertiary};

   button {
      height: 50px;
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

export default WeatherCard