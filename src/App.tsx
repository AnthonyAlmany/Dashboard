import { useState } from "react";
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
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { firestore } from "./firebase/firebaseConfig";

export type weatherType = {
   city: string;
   temperature: number;
   icon: string;
};

export type DisplayModal = {
   signupModal: boolean;
   loginModal: boolean;
};

type Favorites = {
   favoriteCitiesWeather: weatherType[];
   favoriteCryptos: CryptoType[];
   favoriteMovies: MovieType[];
};

function App() {
   const [favorites, setFavorites] = useState<Favorites>({
      favoriteMovies: [],
      favoriteCryptos: [],
      favoriteCitiesWeather: [],
   });
   const [weatherFavorite, setWeatherFavorite] = useState<null | weatherType>(
      null
   );
   const [favoriteCrypto, setFavoriteCrypto] = useState<CryptoType[]>([]);
   const [favoriteMovies, setFavoriteMovies] = useState<MovieType[]>([]);

   const [userSession, setUserSession] = useState<any>(null);

   const weatherHandle = (value: weatherType) => {
      setWeatherFavorite(value);
      const cityRef = doc(firestore, "users", userSession.uid);
      updateDoc(cityRef, {
         favoriteCitiesWeather: [value],
      });
   };

   const handleCrypto = (value: CryptoType) => {
      if (!favoriteCrypto.includes(value) && favoriteCrypto.length < 5) {
         setFavoriteCrypto([...favoriteCrypto, value]);
      }
      const cryptoRef = doc(firestore, "users", userSession.uid);
      updateDoc(cryptoRef, {
         favoriteCryptos: arrayUnion(value),
      });
   };

   const handleMovie = (value: MovieType) => {
      const movieRef = doc(firestore, "users", userSession.uid);
      updateDoc(movieRef, {
         favoriteMovies: arrayUnion(value),
      });
      if (!favoriteMovies.includes(value) && favoriteMovies.length < 5) {
         setFavoriteMovies([...favoriteMovies, value]);
      }
   };

   const deleteMovie = async (arg: number) => {
      const movieRef = doc(firestore, "users", userSession.uid);
      const newDatas = favoriteMovies.filter((movie) => movie.id !== arg);
      updateDoc(movieRef, {
         favoriteMovies: newDatas,
      });
      setFavoriteMovies(favoriteMovies.filter((movie) => movie.id !== arg));
   };

   const deleteCoin = (arg: string) => {
      const cryptoRef = doc(firestore, "users", userSession.uid);
      const newDatas = favoriteCrypto.filter((coin) => coin.id !== arg);
      updateDoc(cryptoRef, {
         favoriteCryptos: newDatas,
      });
      setFavoriteCrypto(newDatas);
   };
   return (
      <AppStyled>
         <MainContainer>
            <Signup />
            <Login />
            <Navbar />
            <TopbarContainer>
               <TopbarRightSide />
            </TopbarContainer>
            <PanelContainer>
               <Routes>
                  <Route path="/" element={<Navigate to="/home" />} />
                  <Route
                     path="/home"
                     element={
                        <Home
                           weatherFavorite={favorites.favoriteCitiesWeather}
                           favoriteCrypto={favorites.favoriteCryptos}
                           favoriteMovies={favorites.favoriteMovies}
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
