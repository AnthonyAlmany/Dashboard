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
import Navbar from "./components/Navbar/Navbar";
import PanelContainer from "./components/containers/PanelContainer";
import { CryptoType, MovieType } from "./types/types";
import TopbarContainer from "./components/containers/TopbarContainer";
import TopbarRightSide from "./components/Topbar/TopbarRightSide";
import Signup from "./components/Register/Signup";
import Login from "./components/Register/Login";

export type weatherType = {
   city: string;
   temperature: number;
   icon: string;
};

export type DisplayModal = {
   signupModal: boolean;
   loginModal: boolean;
};

function App() {
   const [isConnected, setIsConnected] = React.useState<boolean>(false);
   const [displayModal, setDisplayModal] = useState<DisplayModal>({
      signupModal: false,
      loginModal: false,
   });
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
      setFavoriteMovies(favoriteMovies.filter((movie) => movie.id !== arg));
   };
   const deleteCoin = (arg: string) => {
      setFavoriteCrypto(favoriteCrypto.filter((coin) => coin.id !== arg));
   };

   return (
      <AppStyled>
         <MainContainer>
            <Signup
               signupModal={displayModal?.signupModal}
               setDisplayModal={setDisplayModal}
            />
            <Login
               loginModal={displayModal?.loginModal}
               setDisplayModal={setDisplayModal}
               setIsConnected={setIsConnected}
            />

            <Navbar />

            <TopbarContainer>
               <TopbarRightSide
                  setDisplayModal={setDisplayModal}
                  isConnected={isConnected}
                  setIsConnected={setIsConnected}
               />
            </TopbarContainer>
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
   background-color: ${theme.colors.xtraLightGrey};
   h1:first-of-type {
      margin-top: 100px;
   }
`;

export default App;
