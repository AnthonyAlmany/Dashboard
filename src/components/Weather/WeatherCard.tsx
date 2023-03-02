import React from "react";
import { theme } from "../../theme/theme";
import styled from "styled-components";
import { WeatherType } from "../../types/types";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AddIcon from "@mui/icons-material/Add";
import { useCurrentUser } from "../../hooks/useCurrentUser";

type WeatherCardProps = {
   weatherData?: WeatherType;
   clear: Function;
   addCity: Function;
};

function WeatherCard({ weatherData, clear, addCity }: WeatherCardProps) {
   const { weatherHandle } = useCurrentUser();
   const buttonHandler = () => {
      weatherHandle(weatherData);
      clear();
   };

   return (
      <WeatherCardStyled>
         <CityStyled>{weatherData?.city.toUpperCase()}</CityStyled>
         <h4>{weatherData?.temperature} °C</h4>
         <img src={weatherData?.icon} alt="weather-icon" />
         <ButtonsContainer>
            <button className="favorite" onClick={() => buttonHandler()}>
               <StarBorderIcon></StarBorderIcon>
            </button>
            <button className="add" onClick={() => addCity(weatherData?.city)}>
               <AddIcon></AddIcon>
            </button>
         </ButtonsContainer>
      </WeatherCardStyled>
   );
}

const WeatherCardStyled = styled.div`
   width: 800px;
   height: 80px;
   display: flex;
   align-items: center;
   justify-content: space-around;
   margin-top: 2rem;
   font-family: "Source Sans Pro", sans-serif;
   font-size: 14px;
   color: ${theme.colors.white};
   border-radius: ${theme.borderRadius.rounded};
   background-color: ${theme.colors.secondary};
   //    box-shadow: 1px 1px 6px ${theme.colors.tertiary};

   h4 {
      color: ${theme.colors.green};
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
         // border: 2px solid ${theme.colors.secondary};
         // color: ${theme.colors.secondary};
         // background-color: ${theme.colors.primary};
         // box-shadow: 3px 3px 5px ${theme.colors.tertiary};
      }
   }
   .favorite {
      background-color: ${theme.colors.green};
   }
   .add {
      background-color: ${theme.colors.purple};
   }
`;
const CityStyled = styled.h3`
   width: 120px;
`;

const ButtonsContainer = styled.div`
   display: flex;
   justify-content: space-between;
   width: 7rem;
`;

export default WeatherCard;
