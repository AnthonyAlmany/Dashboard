import React from "react";
import { useFetch } from "../../hooks/useFetch";
import styled from "styled-components";
import MovieCard from "./MovieCard";
import { MovieResponse, MovieType } from "../../types/types";

function Movies(): any {
   const upcomingMovies: MovieResponse | null = useFetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&language=fr-FR&page=1&region=FR`,
      "movie"
   );
   const nowPlayingMovies: MovieResponse | null = useFetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&language=fr-FR&page=1&region=FR`,
      "movie"
   );

   return (
      <MoviesPanelStyled>
         <h1>Now playing</h1>
         {nowPlayingMovies?.isLoading ? (
            <h1>Fetching datas...</h1>
         ) : (
            <div className="movies-card-wrapper">
               {nowPlayingMovies?.movieDatas?.map((movie: MovieType) => {
                  return <MovieCard key={movie.id} movie={movie} />;
               })}
            </div>
         )}
         <h1>Upcoming movies</h1>
         {upcomingMovies?.isLoading ? (
            <h1>Fetching datas...</h1>
         ) : (
            <div className="movies-card-wrapper">
               {upcomingMovies?.movieDatas?.map((movie: MovieType) => {
                  return <MovieCard key={movie.id} movie={movie} />;
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
   .movies-card-wrapper {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 25px;
   }
`;

export default Movies;
