import React from "react";
import { theme } from "../../theme/theme";
import styled from "styled-components";
import { MovieType } from "../../types/types";
import ClearIcon from "@mui/icons-material/Clear";

type props = {
   movie: MovieType;
   index: number;
   deleteMovie: Function;
};

function FavoriteMovie({ movie, index, deleteMovie }: props) {
   return (
      <LargeContainerStyled index={index}>
         <div className="data-container">
            <h3>{movie.title}</h3>
            <h6>Note: {movie.vote_average}</h6>
            <button
               className="unset-all"
               id="margin-button"
               onClick={() => deleteMovie(movie.id)}
            >
               <ClearIcon id="clear-icon" />
            </button>
         </div>
         {index !== 4 && <div className="line"></div>}
      </LargeContainerStyled>
   );
}

export default FavoriteMovie;

const LargeContainerStyled = styled.div<any>`
   display: flex;
   flex-direction: column;
   align-items: space-between;
   justify-content: center;
   gap: 2px;
   margin-top: 4px;
   background-color: ${theme.colors.secondary};

   .data-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 1rem 0 1rem;
      &:hover {
         transform: scale(1.01);
      }
   }

   h3 {
      width: 12rem;
      color: ${theme.colors.white};
      font-family: "Source Sans Pro", sans-serif;
      font-size: ${theme.fonts.size.S};
   }
   h6 {
      color: ${theme.colors.green};
      font-family: "Source Sans Pro", sans-serif;
      padding-top: 2px;
   }
   #clear-icon {
      color: ${theme.colors.purple};
      font-size: 16px;
      &:hover {
         cursor: pointer;
      }
   }
   .line {
      height: 1px;
      width: 100%;
      margin-top: 4px;
      background-color: white;
   }
   .unset-all {
      all: unset;
   }
   #margin-button {
      margin-top: 8px;
   }
`;
