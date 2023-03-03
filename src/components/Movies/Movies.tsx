import styled from "styled-components";
import MoviesList from "./MoviesList";
import { theme } from "../../theme/theme";
import { useFetch } from "../../hooks/useFetch";
import { fetchPlayingMovies, fetchUpcomingMovies } from "./helper";

function Movies() {
   const nowPlayingMovies = useFetch(fetchPlayingMovies);
   const upcomingMovies = useFetch(fetchUpcomingMovies);

   return (
      <MoviesPanelStyled>
         <MoviesList title="Now playing" moviesList={nowPlayingMovies} />
         <MoviesList title="Upcoming" moviesList={upcomingMovies} />
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
