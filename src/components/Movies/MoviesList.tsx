import React, { useState, useEffect, useRef } from 'react'
import MovieCardTest from './MovieCardTest'

import styled from "styled-components";
import { theme } from "../../theme/theme";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import { MovieDataType , MovieType } from "../../types/types";


type props ={
title: string;
data: MovieType[];
handleMovie: Function;
}


function MoviesList({ title, data, handleMovie }: props) {


   const listRef = useRef<HTMLDivElement>(null)
   const [slideNumber, setSlideNumber] = useState<number>(0);
   const [distance, setDistance] = useState<number>(0)

   useEffect(() => {
      if (listRef.current) {
         listRef.current.style.transform = `translateX(${distance}px)`;
      }

   }, [distance])

   function handleClick(direction: string) {

      if (direction === "left" && slideNumber > 0) {
         setSlideNumber(slideNumber - 1);
         setDistance(prev => prev + 240)
         console.log("left")
      }
      if (direction === "right" && slideNumber < 13) {
         setSlideNumber(slideNumber + 1);
         setDistance(prev => prev - 240)
         console.log("right")
      }
   };

    return (
        <MoviesListContainer>
            <h3>{title}</h3>
            <div className="wrapper">
            <ArrowBackIosNewIcon className="arrow arrow-left" onClick={() => handleClick("left")} />

                <div className="movies-list" ref={listRef}>
                    {data.map((movie) => <MovieCardTest key={movie.id} movie={movie} handleMovie={handleMovie} />)}
                </div>
                
                <ArrowForwardIosIcon className="arrow arrow-right" onClick={() => handleClick("right")} />
            </div>


        </MoviesListContainer>



    )
}

const MoviesListContainer = styled.div`

    display: flex;
    flex-direction: column; 
    width: 100%;
   

    .movies-list{
        display: flex;

        transition: all 0.6s ease;
    }
    .wrapper{
        position: relative;
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
        top: 30%;
        left: 0;
     }
     .arrow-right{
        top: 30%;
        right: 0;
     }

`

export default MoviesList;


    // &::-webkit-scrollbar {
    //    background: ${theme.colors.xtraLightSecondary};
    //    border-radius: 2rem;
    //    }
   
    //    &::-webkit-scrollbar-thumb {
    //      background: ${theme.colors.secondary};
    //      border-radius: 2rem;
    //    }