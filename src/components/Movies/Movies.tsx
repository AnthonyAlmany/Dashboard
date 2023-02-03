import React, { useEffect, useRef, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import styled from "styled-components";
import MovieCard from "./MovieCard";
import { MovieResponse, MovieType } from "../../types/types";
import { theme } from "../../theme/theme";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';



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

   const listRef: any = useRef()
   const [slideNumber, setSlideNumber] = useState(0);
   const [distance, setDistance] = useState<number>(0)

   useEffect(() => {
      if (listRef.current) {
         listRef.current.style.transform = `translateX(${distance}px)`;
      }

   }, [distance])

   const handleClick = (direction: any) => {

      if (direction === "left" && slideNumber > 0) {
         setSlideNumber(slideNumber - 1);
         setDistance(prev => prev + 288)
      }
      if (direction === "right" && slideNumber < 15) {
         setSlideNumber(slideNumber + 1);
         setDistance(prev => prev - 288)
      }
   };

   return (
      <MoviesPanelStyled>
         <h1>Now playing :</h1>

         {nowPlayingMovies?.isLoading ? (
            <h1>Fetching datas...</h1>
         ) : (

            <div className="wrapper">
               <ArrowBackIosNewIcon className="arrow arrow-left" onClick={() => handleClick("left")} />
               <div className="movies-card-wrapper" ref={listRef}>

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
               <ArrowForwardIosIcon className="arrow arrow-right" onClick={() => handleClick("right")} />
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
   overflow: hidden;
   
   h1 {
      color: ${theme.colors.secondary};
      text-decoration: underline;
   }

   .wrapper{
      position: relative;
   }

   .movies-card-wrapper {
      display: flex;
      width: max-content;
      transition: all 0.6s ease;
      column-gap: 40px;
      padding: 40px 20px;
      // &::-webkit-scrollbar {
      //    background: ${theme.colors.xtraLightSecondary};
      //    border-radius: 2rem;
      //    }
     
      //    &::-webkit-scrollbar-thumb {
      //      background: ${theme.colors.secondary};
      //      border-radius: 2rem;
      //    }
   }
   
   .arrow{
      position: absolute;
      z-index: 90;
      background-color: grey;
      opacity: 0.6;
      height: 4rem;
      width: 60px;
      top: 18rem;
      &:hover{
         opacity: 0.9;
         cursor: pointer;
      }
   }
   .arrow-left{
      left: 2px;
   }
   .arrow-right{
      right: 2px;
   }
`;

export default Movies;
