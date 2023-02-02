import React from "react";
import { useFetch } from "../../hooks/useFetch";
import styled from "styled-components";
import MovieCard from "./MovieCard";
import { MovieResponse, MovieType } from "../../types/types";
import { theme } from "../../theme/theme";

function Movies({ handleMovie }: any): any {
   const upcomingMovies: MovieResponse | null = useFetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&language=fr-FR&page=1&region=FR`,
      "movie"
   );
   const nowPlayingMovies: MovieResponse | null = useFetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&language=fr-FR&page=1&region=FR
      `,
      "movie"
   );

   return (
      <MoviesPanelStyled>
         <h1>Now playing :</h1>
         {nowPlayingMovies?.isLoading ? (
            <h1>Fetching datas...</h1>
         ) : (
            <div className="movies-card-wrapper">
               {nowPlayingMovies?.movieDatas?.map((movie: MovieType) => {
                  return (
                     <MovieCard
                        key={movie.id}
                        movie={movie}
                        handleMovie={handleMovie}
                     />
                  );
               })}
            </div>
         )}
         <h1>Upcoming :</h1>
         {upcomingMovies?.isLoading ? (
            <h1>Fetching datas...</h1>
         ) : (
            <div className="movies-card-wrapper">
               {upcomingMovies?.movieDatas?.map((movie: MovieType) => {
                  return (
                     <MovieCard
                        key={movie.id}
                        movie={movie}
                        handleMovie={handleMovie}
                     />
                  );
               })}
            </div>
         )}
      </MoviesPanelStyled>
   );
}

const MoviesPanelStyled = styled.div`
   display: flex;
   width: 100%;
   position: absolute;
   top: 0;
   right: 0;
   flex-direction: column;
   row-gap: 25px;
   padding: 25px 0 50px 0;
   align-items: center;
   overflow: hidden;
   h1 {
      color: ${theme.colors.secondary};
      text-decoration: underline;
   }
   .movies-card-wrapper {
      display: flex;
      width: 99%;
      overflow-x: scroll;
      column-gap: 40px;
      padding: 40px 20px;
      //white-space: nowrap;
      /*column-gap: 35px;
      width: 100%;
      padding: 20px;
      overflow-x: scroll;
      white-space: normal; */
      /* display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 35px; */
      &::-webkit-scrollbar {
         background: ${theme.colors.xtraLightSecondary};
         border-radius: 2rem;
         }
     
         &::-webkit-scrollbar-thumb {
           background: ${theme.colors.secondary};
           border-radius: 2rem;
         }
   }
`;

export default Movies;
