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
import { CryptoType } from "./types/types";

export type weatherType = {
   city: string;
   temperature: number;
   icon: string;
};

function App() {
   const [weatherFavorite, setWeatherFavorite] = useState<null | weatherType>(
      null
   );
   const [favoriteCrypto, setFavoriteCrypto] = useState<null | CryptoType>(
      null
   );

   const weatherHandle = (value: weatherType) => {
      setWeatherFavorite(value);
   };

   const handleCrypto = (value: CryptoType) => {
      setFavoriteCrypto(value);
   };

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
                  <Route path="/movies" element={<Movies />} />
               </Routes>
            </PanelContainer>
         </MainContainer>
         {/* <Api /> */}
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
`;

export default App;
