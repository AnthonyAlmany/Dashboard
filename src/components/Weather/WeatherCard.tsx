import React from "react";
import { theme } from "../../theme/theme";
import styled from "styled-components";
import { weatherType } from "../../App";

import StarBorderIcon from '@mui/icons-material/StarBorder';
import AddIcon from '@mui/icons-material/Add';

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
         <ButtonsContainer>
            <button onClick={() => buttonHandler()}><StarBorderIcon></StarBorderIcon></button>
            <button onClick={() => addCity(weatherData?.city)}><AddIcon></AddIcon></button>
         </ButtonsContainer>
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
      height: 40px;
      width: 45px;
      border: none;
      color: ${theme.colors.primary};
      background-color: ${theme.colors.secondary};
      border-radius: ${theme.borderRadius.rounded};
      &:hover {
         cursor: pointer;
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

const ButtonsContainer = styled.div`
display: flex;
justify-content: space-between;
width: 7rem;
`

export default WeatherCard;
