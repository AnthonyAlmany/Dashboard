import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import { MovieType } from "../../types/types";

type props = {
   movie: MovieType;
   handleMovie: Function;
};

function MovieCardTest({ movie, handleMovie }: props) {
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

const MovieCardStyled = styled.div`
   min-width: 250px;
   height: 350px;
   position: relative;
   margin: 1rem 0;
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
         color: white;
         font-size: 25px;
         cursor: pointer;
         position: absolute;
         top: 4px;
         right: 4px;
      }
   }

   .movie-infos {
      background-color: rgba(17, 23, 49, 0.52);
      width: 250px;
      height: 300px;
      display: flex;
      flex-direction: column;
      justify-content: start;
      gap: 20px;
      position: absolute;
      top: 310px;
      left: 0;
      overflow-y: hidden;
      transition: transform 0.3s ease-in-out;
   }

   h5 {
      margin-left: 5px;
      margin-top: 10px;
      color: ${theme.colors.white};
      font-family: "Source Sans Pro", sans-serif;
   }
   h6 {
      overflow: hidden;
      white-space: break-spaces;

      margin-left: 5px;
      color: ${theme.colors.white};
      font-family: "Source Sans Pro", sans-serif;
   }
`;

export default MovieCardTest;
