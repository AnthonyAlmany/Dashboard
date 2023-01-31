import React, { useState } from "react";
import { styled as styledMUI, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import styled from "styled-components";
import { theme } from "../theme/theme";

function Searchbar() {
   const [search, setSearch] = useState("");

   //console.log(search);

   return (
      <SearchContainerStyled>
         <Search>
            <SearchIconWrapper>
               <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
               placeholder="Search…"
               inputProps={{ "aria-label": "search" }}
               value={search}
               onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSearch(e.target.value)
               }
            />
         </Search>
      </SearchContainerStyled>
   );
}

const SearchContainerStyled = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 90%;
   height: 3rem;
   background-color: ${theme.colors.background.bisque};
`;

const Search = styledMUI("div")(({ theme }) => ({
   position: "relative",
   // borderRadius: theme.shape.borderRadius,
   borderRadius: "1rem",
   backgroundColor: alpha(theme.palette.common.white, 0.25),
   "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
   },
   marginLeft: 0,
   height: "2rem",
   [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
   },
}));

const SearchIconWrapper = styledMUI("div")(({ theme }) => ({
   padding: theme.spacing(0, 2),
   height: "100%",
   position: "absolute",
   pointerEvents: "none",
   display: "flex",
   alignItems: "center",
   justifyContent: "center",
}));

const StyledInputBase = styledMUI(InputBase)(({ theme }) => ({
   color: "inherit",
   "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
         width: "12ch",
         "&:focus": {
            width: "30ch",
         },
      },
   },
}));

export default Searchbar;
