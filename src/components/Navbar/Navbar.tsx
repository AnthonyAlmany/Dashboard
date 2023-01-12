import Searchbar from "../Searchbar";

import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import styled from "styled-components";
import NavButton from "./NavButton";

function Navbar() {
   return (
      <LinksContainerStyled>
         <h1>DASHBOARD</h1>
         <NavButton label="Home" icon={<GridViewOutlinedIcon />} />
         <NavButton label="Weather" icon={<WbSunnyOutlinedIcon />} />
         <NavButton label="Market" icon={<AccountBalanceOutlinedIcon />} />
         <NavButton label="Movies" icon={<MovieOutlinedIcon />} />
         <Searchbar />
      </LinksContainerStyled>
   );
}

const LinksContainerStyled = styled.div`
   display: flex;
   flex-direction: column;
   height: 100%;
   margin-left: 2rem;
   margin-bottom: 4rem;
   h1 {
      margin: 4rem 0;
   }
`;

export default Navbar;
