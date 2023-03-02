import { theme } from "../../theme/theme";
import styled from "styled-components";
import { MovieType } from "../../types/types";
import ClearIcon from "@mui/icons-material/Clear";
import { useCurrentUser } from "../../hooks/useCurrentUser";

type FavoriteMovieProps = {
   movie: MovieType;
   index: number;
};

function FavoriteMovie({ movie, index }: FavoriteMovieProps): JSX.Element {
   const { deleteMovie } = useCurrentUser();
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

const { colors, spacing, fonts, dimensions } = theme;

const LargeContainerStyled = styled.div<any>`
   display: flex;
   flex-direction: column;
   align-items: space-between;
   justify-content: center;
   gap: ${spacing.p2};
   margin-top: ${spacing.p2};
   background-color: ${colors.secondary};
   .data-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 ${spacing.s};
      &:hover {
         transform: scale(1.01);
      }
      h3 {
         width: ${dimensions.pixels.large};
         color: ${colors.white};
         font-family: "Source Sans Pro", sans-serif;
         font-size: ${fonts.size.S};
      }
      h6 {
         color: ${colors.green};
         font-family: "Source Sans Pro", sans-serif;
         padding-top: ${spacing.p2};
      }
      #clear-icon {
         color: ${colors.purple};
         font-size: ${fonts.size.M};
         &:hover {
            cursor: pointer;
         }
      }
      .unset-all {
         all: unset;
      }
      #margin-button {
         margin-top: ${spacing.xs};
      }
   }
   .line {
      height: ${dimensions.pixels.xxxs};
      width: ${dimensions.percent.max};
      margin-top: ${spacing.p4};
      background-color: ${colors.white};
   }
`;

export default FavoriteMovie;
