import { weatherType } from "../../App";
import { theme } from "../../theme/theme";
import styled from "styled-components";
import CryptoCard from "../Cryptos/CryptoCard";
import { CryptoType, MovieType } from "../../types/types";
import MovieCard from "../Movies/MovieCard";

type props = {
   weatherFavorite: weatherType | null;
   favoriteCrypto: CryptoType | null;
   favoriteMovies: MovieType[] | null;
};

function Home({ weatherFavorite, favoriteCrypto, favoriteMovies }: props) {


   return (
      <>
         {!weatherFavorite ? (
            <h3>"No Favorites for weather"</h3>
         ) : (
            <WeatherCardStyled>
               <h3>{weatherFavorite?.city.toUpperCase()}</h3>
               <h3>{weatherFavorite?.temperature} °C</h3>
               <img src={weatherFavorite?.icon} alt="weather-icon" />
            </WeatherCardStyled>
         )}
         {!favoriteCrypto ? (
            <h3>"No Favorites for crypto"</h3>
         ) : (
            <CryptoCard value={favoriteCrypto}></CryptoCard>
         )}

         {favoriteMovies?.length === 0 ? (
            <h3>"No Favorites for movies</h3>
         ) : (

            favoriteMovies?.map((movie: MovieType) => { return <h3>{movie.title}</h3> })

         )

         }
      </>
   );
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
`;
