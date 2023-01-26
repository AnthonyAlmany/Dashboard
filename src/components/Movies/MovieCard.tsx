import styled from "styled-components";
import { theme } from "../../theme/theme";
import { MovieType } from "../../types/types";

type MovieCardProps = {
   movie: MovieType;
};

function MovieCard({ movie }: MovieCardProps) {
   const { title, poster_path, overview, vote_average } = movie;

   return (
      <MovieCardStyled>
         <h3>{title}</h3>

         <div className="img-container">
            {poster_path ? (
               <img
                  src={`https://image.tmdb.org/t/p/original${poster_path}`}
                  alt="wallpaper"
               />
            ) : null}
         </div>

         <div className="overview-container">
            <p>Synopsis : </p>
            <p>{overview}</p>
         </div>
         <div className="average-container">
            <span>Note {vote_average} / 10</span>
         </div>
      </MovieCardStyled>
   );
}

const MovieCardStyled = styled.div`
   width: 250px;
   display: flex;
   flex-direction: column;
   white-space: nowrap;
   row-gap: 1rem;
   padding: 1rem 0;
   align-items: center;
   justify-content: space-around;
   color: ${theme.colors.tertiary};
   border-radius: ${theme.borderRadius.extraRounded};
   background-color: ${theme.colors.primary};
   box-shadow: 5px 5px 8px ${theme.colors.tertiary};
   h3 {
      width: 250px;
      height: 70px;
      //width: 90%;
      padding: 0 5px;
      overflow: hidden;
      white-space: normal;
      text-align: center;
   }
   .img-container {
      height: 200px;
      width: 150px;
      object-fit: cover;
      img {
         width: 100%;
         height: 100%;
      }
   }
   .overview-container {
      width: 90%;
      p {
         text-overflow: ellipsis;
         overflow: hidden;
         // Addition lines for 2 line or multiline ellipsis
         display: -webkit-box !important;
         -webkit-line-clamp: 4;
         -webkit-box-orient: vertical;
         white-space: normal;
      }
   }
   .average-container {
      display: flex;
      align-items: center;
      height: 50px;
   }
`;

export default MovieCard;
