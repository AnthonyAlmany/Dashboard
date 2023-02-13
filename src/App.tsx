import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import styled from "styled-components";
import Home from "./components/Home/Home";
import { theme } from "./theme/theme";

// import Api from "./api/Api";
import Weather from "./components/Weather/Weather";
import Crypto from "./components/Cryptos/Crypto";
import Movies from "./components/Movies/Movies";
import MainContainer from "./components/containers/MainContainer";
import NavbarContainer from "./components/containers/NavbarContainer";
import Navbar from "./components/Navbar/Navbar";
import PanelContainer from "./components/containers/PanelContainer";
import { CryptoType, MovieType } from "./types/types";

export type weatherType = {
   city: string;
   temperature: number;
   icon: string;
};

function App() {
   const [weatherFavorite, setWeatherFavorite] = useState<null | weatherType>(
      null
   );
   const [favoriteCrypto, setFavoriteCrypto] = useState<CryptoType[]>([]);
   const [favoriteMovies, setFavoriteMovies] = useState<MovieType[]>([]);

   const weatherHandle = (value: weatherType) => {
      setWeatherFavorite(value);
   };

   const handleCrypto = (value: CryptoType) => {
      if (!favoriteCrypto.includes(value) && favoriteCrypto.length < 5) {
         setFavoriteCrypto([...favoriteCrypto, value]);
      }
   };

   const handleMovie = (value: MovieType) => {
      if (!favoriteMovies.includes(value) && favoriteMovies.length < 5) {
         setFavoriteMovies([...favoriteMovies, value]);
      }
   };

   const deleteMovie = (arg: number) => {
      setFavoriteMovies(favoriteMovies.filter(movie => movie.id !== arg))
   }
   const deleteCoin = (arg: string) => {
      setFavoriteCrypto(favoriteCrypto.filter(coin => coin.id !== arg))
   }

   return (
      <AppStyled>
         <MainContainer>
            <NavbarContainer>
               <Navbar />
            </NavbarContainer>
            <PanelContainer>
               <Routes>
                  <Route path="/" element={<Navigate to="/home" />} />
                  <Route
                     path="/home"
                     element={
                        <Home
                           weatherFavorite={weatherFavorite}
                           favoriteCrypto={favoriteCrypto}
                           favoriteMovies={favoriteMovies}
                           deleteMovie={deleteMovie}
                           deleteCoin={deleteCoin}
                        />
                     }
                  />
                  <Route
                     path="/weather"
                     element={<Weather weatherHandle={weatherHandle} />}
                  />
                  <Route
                     path="/market"
                     element={<Crypto handleCrypto={handleCrypto} />}
                  />
                  <Route
                     path="/movies"
                     element={<Movies handleMovie={handleMovie} />}
                  />
               </Routes>
            </PanelContainer>
         </MainContainer>
      </AppStyled>
   );
}

const AppStyled = styled.div`
   height: 100vh;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: ${theme.colors.background.antique};
`;

export default App;
