import { Route, Routes, Navigate } from "react-router-dom";
import styled from "styled-components";
import Home from "./components/Home/Home";
import { theme } from "./theme/theme";
import Weather from "./components/Weather/Weather";
import Crypto from "./components/Cryptos/Crypto";
import Movies from "./components/Movies/Movies";
import MainContainer from "./components/containers/MainContainer";
import Navbar from "./components/Navbar/Navbar";
import PanelContainer from "./components/containers/PanelContainer";
import TopbarContainer from "./components/containers/TopbarContainer";
import TopbarRightSide from "./components/Topbar/TopbarRightSide";
import Signup from "./components/Register/Signup";
import Login from "./components/Register/Login";

function App() {
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
                  <Route path="/home" element={<Home />} />
                  <Route path="/weather" element={<Weather />} />
                  <Route path="/market" element={<Crypto />} />
                  <Route path="/movies" element={<Movies />} />
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
