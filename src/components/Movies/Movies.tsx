import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import MoviesList from "./MoviesList";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { theme } from "../../theme/theme";

function Movies() {
   const { handleMovie } = useCurrentUser();
   const [data, setData] = useState<any[] | undefined>([]);
   const [error, setError] = useState<any>(null);
   const [loading, setLoading] = useState<boolean>(false);
   console.log(data);
   useEffect(() => {
      setLoading(true);
      const apiData = [
         {
            url: `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&language=en-EN&page=1&region=US`,
            title: "Upcoming",
         },
         {
            url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&language=en-EN&page=1&region=US`,
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
      return <div>Loading...</div>;
   }

   return (
      <MoviesPanelStyled>
         {data?.map((list: any) => (
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

const { spacing, dimensions } = theme;

const MoviesPanelStyled = styled.div`
   display: flex;
   align-items: start;
   width: ${dimensions.percent.max};
   position: relative;
   top: ${spacing.null};
   right: ${spacing.null};
   flex-direction: column;
   row-gap: ${spacing.l};
   padding: ${spacing.l} ${spacing.null} ${spacing.xl};
   overflow: hidden;
`;

export default Movies;
