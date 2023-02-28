import Searchbar from "../Searchbar";

import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import styled from "styled-components";
import NavButton from "./NavButton";
import Title from "./Title";
import { theme } from "../../theme/theme";

function Navbar(): JSX.Element {
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

const { colors, dimensions } = theme;

const LinksContainerStyled = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   height: ${dimensions.percent.max};
   width: ${dimensions.pixels.xlarge};
   position: absolute;
   left: 0;
   z-index: 3;
   font-family: "Source Sans Pro", sans-serif;
   background-color: ${colors.secondary};
`;

export default Navbar;
