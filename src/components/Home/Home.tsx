import Crypto from "../Cryptos/Crypto";
import Navbar from "../Navbar/Navbar";
import MainContainer from "./MainContainer";
import NavbarContainer from "./NavbarContainer";
import PanelContainer from "./PanelContainer";

function Home() {
   return (
      <MainContainer>
         <NavbarContainer>
            <Navbar />
         </NavbarContainer>
         <PanelContainer>
            <Crypto />
         </PanelContainer>
      </MainContainer>
   );
}

export default Home;
