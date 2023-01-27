import React from 'react'
import styled from "styled-components";
import { theme } from "../../theme/theme";

import { weatherType } from '../../App';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import StarBorderIcon from '@mui/icons-material/StarBorder';

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
                <ButtonsContainer>
                    <button onClick={() => weatherHandle(weather)}><StarBorderIcon></StarBorderIcon></button>
                    <button onClick={() => deleteCity(weather.city)}><DeleteOutlineIcon></DeleteOutlineIcon></button>
                </ButtonsContainer>
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


export default WeatherList