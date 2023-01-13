import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Home from "./components/Home/Home";
import { theme } from "./theme/theme";

import Api from "./api/Api";

function App() {



   return (

      <AppStyled>
         <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/weather" element={<Weather />} />
                <Route path="/crypto" element={<Crypto />} />
                <Route path="/movies" element={<Movies />} /> */}
         </Routes>
         <Api />
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
