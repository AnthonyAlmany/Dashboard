import { weatherType } from "../../App";
import { theme } from "../../theme/theme";
import styled from "styled-components";

type props = {
   weatherFavorite: weatherType | null;
}



function Home({ weatherFavorite }: props) {


   // if (!weatherFavorite) {
   //    return (<h3>"No Favorites for weather"</h3>)
   // } else {
   return (
      <WeatherCardStyled>
         <h3>{weatherFavorite?.city.toUpperCase()}</h3>
         <h3>{weatherFavorite?.temperature} °C</h3>
         <img src={weatherFavorite?.icon} alt="weather-icon" />
      </WeatherCardStyled>
   )




}

export default Home;

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
   }
`;