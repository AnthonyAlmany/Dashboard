import Searchbar from "../Searchbar";

import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import styled from "styled-components";
import NavButton from "./NavButton";
import Title from "./Title";
import { NavLink } from "react-router-dom";

function Navbar() {
   return (
      <LinksContainerStyled>
         <Title />
         <NavButton label="Home" icon={<GridViewOutlinedIcon />} />
         <NavButton label="Weather" icon={<WbSunnyOutlinedIcon />} />
         <NavButton label="Market" icon={<AccountBalanceOutlinedIcon />} />
         <NavButton label="Movies" icon={<MovieOutlinedIcon />} />
         {/* <Searchbar /> */}
      </LinksContainerStyled>
   );
}



const LinksContainerStyled = styled.div`
   display: flex;
   flex-direction: column;
   height: 100%;
   margin-left: 2rem;
   margin-bottom: 4rem;
   font-family: 'Source Sans Pro', sans-serif;
`;


export default Navbar;
