import React from "react";
import { theme } from "../../theme/theme";
import styled from "styled-components";
import { weatherType } from "../../types/types";

type WeatherContainerProps = {
   weatherFavorite: weatherType[] | null;
};

function WeatherContainer({ weatherFavorite }: WeatherContainerProps) {
   return (
      <SmallContainerStyled>
         {!weatherFavorite ? (
            <h3>No Weather Favorite</h3>
         ) : (
            <div className="card">
               <h3>{weatherFavorite[0]?.city?.toUpperCase()}</h3>
               <h4>{weatherFavorite[0]?.temperature} °C</h4>
               <img src={weatherFavorite[0]?.icon} alt="weather-icon" />
            </div>
         )}
      </SmallContainerStyled>
   );
}

export default WeatherContainer;

const SmallContainerStyled = styled.div`
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: space-around;
   h3 {
      color: ${theme.colors.white};
      font-family: "Source Sans Pro", sans-serif;
   }
   h4 {
      color: ${theme.colors.green};
      font-family: "Source Sans Pro", sans-serif;
   }
   .card {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
   }
`;
