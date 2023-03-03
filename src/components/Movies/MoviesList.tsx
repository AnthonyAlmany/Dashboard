import { useState, useEffect, useRef } from "react";
import MovieCard from "./MovieCard";

import styled from "styled-components";
import { theme } from "../../theme/theme";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import { MovieType } from "../../types/types";
import { State } from "../../hooks/useFetch";

type MoviesListProps = {
   title: string;
   moviesList: State;
};

function MoviesList({ title, moviesList }: MoviesListProps) {
   const { data, isLoading } = moviesList;

   const listRef = useRef<HTMLDivElement>(null);
   const [slideNumber, setSlideNumber] = useState<number>(0);
   const [distance, setDistance] = useState<number>(0);

   useEffect(() => {
      if (listRef.current) {
         listRef.current.style.transform = `translateX(${distance}px)`;
      }
   }, [distance]);

   function handleClick(direction: string) {
      if (direction === "left" && slideNumber > 0) {
         setSlideNumber(slideNumber - 1);
         setDistance((prev) => prev + 250);
         console.log("left");
      }
      if (direction === "right" && slideNumber < data.length - 2) {
         setSlideNumber(slideNumber + 1);
         setDistance((prev) => prev - 250);
         console.log("right");
      }
   }

   return (
      <MoviesListContainer>
         <h3>{title}</h3>
         {isLoading ? (
            <div>Loading...</div>
         ) : (
            <div className="wrapper">
               <ArrowBackIosNewIcon
                  className="arrow arrow-left"
                  onClick={() => handleClick("left")}
               />

               <div className="movies-list" ref={listRef}>
                  {data?.map((movie: MovieType) => (
                     <MovieCard key={movie.id} movie={movie} />
                  ))}
               </div>

               <ArrowForwardIosIcon
                  className="arrow arrow-right"
                  onClick={() => handleClick("right")}
               />
            </div>
         )}
      </MoviesListContainer>
   );
}

const { colors, spacing, dimensions } = theme;

const MoviesListContainer = styled.div`
   display: flex;
   flex-direction: column;
   width: ${dimensions.percent.max};

   h3 {
      color: ${colors.purple};
      margin-left: ${spacing.p4};
   }

   .wrapper {
      position: relative;
      .movies-list {
         display: flex;
         transition: all 0.6s ease;
      }
      .arrow {
         position: absolute;
         z-index: 90;
         background-color: grey;
         opacity: 0.6;
         height: 4rem;
         width: 60px;
         top: 40%;
         &:hover {
            opacity: 0.9;
            cursor: pointer;
         }
      }
      .arrow-left {
         left: 0;
      }
      .arrow-right {
         right: 0;
      }
   }
`;

export default MoviesList;

// &::-webkit-scrollbar {
//    background: ${theme.colors.xtraLightSecondary};
//    border-radius: 2rem;
//    }

//    &::-webkit-scrollbar-thumb {
//      background: ${theme.colors.secondary};
//      border-radius: 2rem;
//    }
