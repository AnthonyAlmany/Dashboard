import React from "react";
import { theme } from "../../theme/theme";
import styled from "styled-components";
import { weatherType } from "../../App";

type props = {
   weatherData?: weatherType;
   weatherHandle: Function;
   clear: Function;
   addCity: Function;
};

function WeatherCard({ weatherData, weatherHandle, clear, addCity }: props) {

   const buttonHandler = () => {
      weatherHandle(weatherData);
      clear();
   }

   return (
      <WeatherCardStyled>
         <CityStyled>{weatherData?.city.toUpperCase()}</CityStyled>
         <h3>{weatherData?.temperature} °C</h3>
         <img src={weatherData?.icon} alt="weather-icon" />
         <button onClick={() => addCity(weatherData?.city)}>Add to List</button>
         <button onClick={() => buttonHandler()}>Add to favorite</button>
      </WeatherCardStyled>
   );
}

const WeatherCardStyled = styled.div`
   width: 800px;
   height: 80px;
   margin-top: 15px;
   display: flex;
   flex-direction: row;
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

export default WeatherCard;
