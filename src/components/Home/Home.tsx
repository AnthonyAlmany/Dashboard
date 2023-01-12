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
            <h2>PANEL</h2>
         </PanelContainer>
      </MainContainer>
   );
}

export default Home;
