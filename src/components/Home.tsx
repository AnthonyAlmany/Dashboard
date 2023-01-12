import styled from "styled-components";
import { theme } from "../theme/theme";
import Navbar from "./Navbar/Navbar";

function Home() {
   return (
      <HomeStyled>
         <div className="container">
            <div className="navigation-container">
               <Navbar />
            </div>
            <div className="main-container"></div>
         </div>
      </HomeStyled>
   );
}

const HomeStyled = styled.div`
   height: 100vh;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: ${theme.colors.xtraLightGrey};
   .container {
      height: 85%;
      width: 85%;
      display: flex;
      overflow: hidden;
      border-radius: ${theme.borderRadius.extraRounded};
      background-color: ${theme.colors.primary};
      .navigation-container {
         height: 100%;
         width: 25%;
         background-color: ${theme.colors.secondary};
         border-radius: ${theme.borderRadius.extraRounded};
      }
      .main-container {
         height: 100%;
         width: 75%;
      }
   }
`;
export default Home;
