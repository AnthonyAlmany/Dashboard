import React, { useEffect, useRef, useState } from "react";
import axios from "axios"

import styled from "styled-components";

import MoviesList from "./MoviesList"
import { MovieResponse, MovieType } from "../../types/types";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function Movies({ handleMovie }: any): any {

   const [data, setData] = useState<any>([]);
   const [error, setError] = useState<any>(null);
   const [loading, setLoading] = useState(false);

   const listRef = useRef<HTMLDivElement>(null)
   const [slideNumber, setSlideNumber] = useState<number>(0);
   const [distance, setDistance] = useState<number>(0)

   useEffect(() => {
      if (listRef.current) {
         listRef.current.style.transform = `translateX(${distance}px)`;
      }

   }, [distance])

   const handleClick: any = (direction: string) => {

      if (direction === "left" && slideNumber > 0) {
         setSlideNumber(slideNumber - 1);
         setDistance(prev => prev + 288)
      }
      if (direction === "right" && slideNumber < 15) {
         setSlideNumber(slideNumber + 1);
         setDistance(prev => prev - 288)
      }
   };

   useEffect(() => {
      setLoading(true);
      const apiData = [
         { url: `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&language=fr-FR&page=1&region=FR`, title: 'Upcoming' },
         { url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&language=fr-FR&page=1&region=FR`, title: 'Now Playing' },
      ];

      Promise.all(apiData.map(item => axios.get(item.url)))
         .then(responses => {
            const newData = apiData.map((item, index) => ({
               title: item.title,
               data: responses[index].data.results,
            }));
            setData(newData);
            setLoading(false);
         })
         .catch(e => {
            setError(e);
            setLoading(false);
         });
   }, []);

   if (loading) {
      return <div>Loading...</div>;
   }

   if (error) {
      return <div>An error occurred: {error.message}</div>;
   }

   return (
      <MoviesPanelStyled>

         {data.map((list: any, i: any) => (
            <div className="wrapper" key={i}>
               <ArrowBackIosNewIcon className="arrow arrow-left" onClick={() => handleClick("left").bind(null, list)} />
               <MoviesList key={list.title} list={list} listRef={listRef} />
               <ArrowForwardIosIcon className="arrow arrow-right" onClick={() => handleClick("right").bind(null, list)} />
            </div>

         ))}

      </MoviesPanelStyled>
   );
}

const MoviesPanelStyled = styled.div`
   display: flex;
   width: 100%;
   position: relative;
   top: 0;
   right: 0;
   flex-direction: column;
   row-gap: 25px;
   padding: 25px 0 50px 0;
   overflow: hidden;

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
      top: 0;
      left: 2px;
   }
   .arrow-right{
      top: 0;
      right: 2px;
   }
`;

export default Movies;
