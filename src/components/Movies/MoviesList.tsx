import React, { useState, useEffect, useRef } from 'react'
import MovieCardTest from './MovieCardTest'

import styled from "styled-components";
import { theme } from "../../theme/theme";



function MoviesList({ list,listRef }: any) {


console.log("test")

    return (
        <MoviesListContainer>
            <h3>{list.title}</h3>
            <div className="wrapper">
                
                <div className="movies-list" ref={listRef}>

                    {list.data.map((movie: any) => <MovieCardTest key={movie.id} movie={movie} />)}

                </div>
               
            </div>


        </MoviesListContainer>



    )
}

const MoviesListContainer = styled.div`

    display: flex;
    flex-direction: column; 
    width: 100%;
    transition: all 0.6s ease;

    .wrapper{

     }

    .movies-list{
        display: flex;
        gap: 40px;
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