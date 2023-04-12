import React, { useEffect, useState } from "react";
import axios from "axios";

import styled from "styled-components";
import { theme } from "../../theme/theme";

import MoviesList from "./MoviesList";
import { MovieDataType } from "../../types/types";

type props = {
   handleMovie: Function;
};

function Movies({ handleMovie }: props) {
   const [data, setData] = useState<MovieDataType[] | undefined>([]);
   const [error, setError] = useState<any>(null);
   const [loading, setLoading] = useState<boolean>(false);

   useEffect(() => {
      const apiKey = process.env.REACT_APP_MOVIES_API_KEY
      setLoading(true);
      const apiData = [
         {
            url: `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-EN&page=1&region=US`,
            title: "Upcoming",
         },
         {
            url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-EN&page=1&region=US`,
            title: "Now Playing",
         },
      ];

      Promise.all(apiData.map((item) => axios.get(item.url)))
         .then((responses) => {
            const newData = apiData.map((item, index) => ({
               title: item.title,
               data: responses[index].data.results,
            }));
            setData(newData);
            setLoading(false);
         })
         .catch((e) => {
            setError(e);
            setLoading(false);
         });
   }, []);

   if (loading) {
      return <h3>Loading...</h3>;
   }

   if (error) {
      return <div>An error occurred: {error.message}</div>;
   }

   return (
      <MoviesPanelStyled>
         {data?.map((list: MovieDataType) => (
            <MoviesList
               key={list.title}
               title={list.title}
               data={list.data}
               handleMovie={handleMovie}
            />
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

   h3{
      color: ${theme.fonts.color.white};
      font-family: 'Source Sans Pro', sans-serif;
   }
`;

export default Movies;
