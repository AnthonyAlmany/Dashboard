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
   const [favoriteCrypto, setFavoriteCrypto] = useState<null | CryptoType>(
      null
   );
   const [favoriteMovies, setFavoriteMovies] = useState<null | MovieType>(null);

   const weatherHandle = (value: weatherType) => {
      setWeatherFavorite(value);
   };

   const handleCrypto = (value: CryptoType) => {
      setFavoriteCrypto(value);
   };

   const handleMovie = (value: MovieType) => {
      setFavoriteMovies(value);
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
            <NavbarContainer>
               <Navbar />
            </NavbarContainer>
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
