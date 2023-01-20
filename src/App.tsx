import { Route, Routes } from "react-router-dom";
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

function App() {
   return (
      <AppStyled>
         <MainContainer>
            <NavbarContainer>
               <Navbar />
            </NavbarContainer>
            <PanelContainer>
               <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path="/weather" element={<Weather />} />
                  <Route path="/market" element={<Crypto />} />
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
