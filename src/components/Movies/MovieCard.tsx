import { useState, useEffect } from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import { MovieType } from "../../types/types";
import { useCurrentUser } from "../../hooks/useCurrentUser";

type MovieCardProps = {
   movie: MovieType;
};

function MovieCard({ movie }: MovieCardProps) {
   const { handleMovie } = useCurrentUser();
   const [scale, setScale] = useState(1);

   useEffect(() => {
      const timeoutId = setTimeout(() => {
         setScale(1);
      }, 1000);

      return () => {
         clearTimeout(timeoutId);
      };
   }, [scale]);

   const handleClick = () => {
      setScale(1.5);
   };

   return (
      <MovieCardStyled>
         <div className="image-movie">
            <img
               src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
               alt="movie-poster"
            />
            <div>
               <StarBorderIcon
                  id="fav"
                  style={{
                     transform: `scale(${scale})`,
                     transition: "transform 0.5s ease",
                  }}
                  onClick={() => {
                     handleClick();
                     handleMovie(movie);
                  }}
               />
            </div>
         </div>

         <div className="movie-infos">
            <h5>{movie.title}</h5>
            <h6>{movie.overview}</h6>
         </div>
      </MovieCardStyled>
   );
}

const { spacing, fonts, colors, dimensions } = theme;

const MovieCardStyled = styled.div`
   min-width: 250px;
   height: 350px;
   position: relative;
   margin: ${spacing.s} 0;
   display: flex;
   flex-direction: column;
   overflow: hidden;
   &:hover .movie-infos {
      transform: translateY(-200px);
   }

   .image-movie {
      position: relative;
      img {
         object-fit: cover;
         width: 250px;
         height: 350px;
      }
      #fav {
         color: ${colors.white};
         font-size: ${fonts.size.XXL};
         cursor: pointer;
         position: absolute;
         top: ${spacing.p4};
         right: ${spacing.p4};
      }
   }

   .movie-infos {
      background-color: rgba(17, 23, 49, 0.52);
      width: 250px;
      height: ${dimensions.pixels.xxl};
      display: flex;
      flex-direction: column;
      justify-content: start;
      gap: ${spacing.m};
      position: absolute;
      top: 310px;
      left: ${spacing.null};
      overflow-y: hidden;
      transition: transform 0.3s ease-in-out;
   }

   h5 {
      margin-left: ${spacing.xxs};
      margin-top: ${spacing.xs};
      color: ${theme.colors.white};
   }
   h6 {
      overflow: hidden;
      white-space: break-spaces;
      margin-left: ${spacing.xxs};
      color: ${colors.white};
   }
`;

export default MovieCard;
