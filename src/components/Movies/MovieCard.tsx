import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";
import { MovieType } from "../../types/types";

type MovieCardProps = {
   movie: MovieType;
};

function MovieCard({ movie }: MovieCardProps) {
   const { title, poster_path, overview, vote_average } = movie;
   //console.log(poster_path);
   //console.log(movie.poster_path);

   return (
      <MovieCardStyled>
         <h4>{title}</h4>

         {/* <div className="img-container">
            {poster_path ? (
               <img
                  src={`https://image.tmdb.org/t/p/original
                 ${poster_path}`}
                  alt="wallpaper"
               />
            ) : null}
         </div> */}

         <div className="overview-container">
            <p>{overview}</p>
         </div>
         <div className="average-container">
            <span>{vote_average}</span>
         </div>
      </MovieCardStyled>
   );
}

const MovieCardStyled = styled.div`
   width: 200px;
   //height: 250px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-around;
   color: ${theme.colors.tertiary};
   border-radius: ${theme.borderRadius.extraRounded};
   background-color: ${theme.colors.primary};
   box-shadow: 5px 5px 8px ${theme.colors.tertiary};
   h4 {
      margin: 1rem;
   }
   .img-container {
      height: 200px;
      width: 150px;
      object-fit: cover;
   }
   .overview-container {
      height: 100px;
      width: 90%;
      overflow: scroll;
   }
   .average-container {
      display: flex;
      align-items: center;
      height: 50px;
   }
`;

export default MovieCard;
