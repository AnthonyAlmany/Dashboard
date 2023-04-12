import React from 'react'
import styled from "styled-components";
import { theme } from "../../theme/theme";

import { weatherType } from "../../types/types";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import StarBorderIcon from '@mui/icons-material/StarBorder';

type props = {
    weather: weatherType;
    weatherHandle: Function;
    deleteCity: Function;
}

function WeatherList({ weather, weatherHandle, deleteCity }: props) {

    return (

        <WeatherCardStyled>
            <CityStyled>{weather?.city}</CityStyled>
            <h4>{weather?.temperature} °C</h4>
            <img src={weather?.icon} alt="weather-icon" />
            <ButtonsContainer>
                <button className='favorite' onClick={() => weatherHandle(weather)}><StarBorderIcon></StarBorderIcon></button>
                <button className='delete' onClick={() => deleteCity(weather.city)}><DeleteOutlineIcon></DeleteOutlineIcon></button>
            </ButtonsContainer>
        </WeatherCardStyled>


    )
}

const WeatherCardStyled = styled.div`
   width: 800px;
   height: 80px;
   margin-bottom: 1rem;
   display: flex;
   align-items: center;
   justify-content: space-around;
   font-family: 'Source Sans Pro', sans-serif;
   font-size: 14px;
   color: ${theme.fonts.color.white};
   border-radius: ${theme.borderRadius.rounded};
   background-color: ${theme.colors.secondary};
//    box-shadow: 1px 1px 6px ${theme.colors.tertiary};

   h4{
    color: ${theme.fonts.color.green};
    font-size: 17px;
   }

   button {
      height: 40px;
      width: 45px;
      border: none;
      color: ${theme.colors.white};
      background-color: ${theme.colors.secondary};
      border-radius: ${theme.borderRadius.rounded};
      &:hover {
         cursor: pointer;
         font-weight: bold;
      }
   }
   .favorite{
    background-color: ${theme.colors.green};
   }
   .delete{
    background-color: ${theme.colors.red};
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


export default WeatherList