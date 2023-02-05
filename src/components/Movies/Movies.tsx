import React, { useEffect, useRef, useState } from "react";
import axios from "axios"

import styled from "styled-components";

import MoviesList from "./MoviesList"
import { MovieResponse, MovieType } from "../../types/types";



function Movies({ handleMovie }: any): any {

   const [data, setData] = useState<any>([]);
   const [error, setError] = useState<any>(null);
   const [loading, setLoading] = useState(false);


   useEffect(() => {
      setLoading(true);
      const apiData = [
         { url: `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&language=en-EN&page=1&region=US`, title: 'Upcoming' },
         { url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&language=en-EN&page=1&region=US`, title: 'Now Playing' },
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
         {data.map((list: any) => (
            <MoviesList key={list.title} list={list} />
         ))}
      </MoviesPanelStyled>
   );
}

const MoviesPanelStyled = styled.div`
   display: flex;
align-items: start;
   width: 100%;
   position: relative;
   top: 0;
   right: 0;
   flex-direction: column;
   row-gap: 25px;
   padding: 25px 0 50px 0;
   overflow: hidden;


`;

export default Movies;
