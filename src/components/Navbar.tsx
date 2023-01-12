import React from "react";
import { NavLink } from "react-router-dom";
import Searchbar from "./Searchbar";

import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import styled from "styled-components";

function Navbar() {
   return (
      <LinksContainerStyled>
         <h1>DASHBOARD</h1>
         <NavLinkStyled
            to="/Home"
            style={{
               ...({ isActive }) => {
                  return isActive ? "active" : "";
               },
            }}
         >
            <div className="button-container">
               <GridViewOutlinedIcon />
               <div className="text-button">Home</div>
            </div>
         </NavLinkStyled>
         <NavLinkStyled to="/Weather">
            <div className="button-container">
               <WbSunnyOutlinedIcon />
               <div className="text-button">Weather</div>
            </div>
         </NavLinkStyled>
         <NavLinkStyled to="/Crypto">
            <div className="button-container">
               <AccountBalanceOutlinedIcon />
               <div className="text-button">Market</div>
            </div>
         </NavLinkStyled>
         <NavLinkStyled to="/Movies">
            <div className="button-container">
               <MovieOutlinedIcon />
               <div className="text-button">Movies</div>
            </div>
         </NavLinkStyled>
         <Searchbar />
      </LinksContainerStyled>
   );
}

const NavLinkStyled = styled(NavLink)`
   display: flex;
   align-items: center;
   text-decoration: none;
   color: inherit;
   margin-bottom: 2rem;
   width: 8rem;
   height: 2rem;
   border-radius: 1rem;
`;

const LinksContainerStyled = styled.div`
   display: flex;
   flex-direction: column;
   height: 100%;
   margin-left: 2rem;
   margin-bottom: 4rem;
   h1 {
      margin: 4rem 0;
   }
   .button-container {
      display: flex;
      align-items: center;
      height: 2rem;
      width: 8rem;
      border-radius: 1rem;
      padding-left: 12px;
      :hover {
         background-color: antiquewhite;
      }
      .active {
         background-color: antiquewhite;
      }
      .text-button {
         margin-top: 3px;
         margin-left: 1rem;
      }
   }
`;

export default Navbar;
