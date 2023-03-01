import { weatherType } from "../../types/types";
import { theme } from "../../theme/theme";
import styled from "styled-components";
import { CryptoType, MovieType } from "../../types/types";
import WeatherContainer from "./WeatherContainer";
import FavoriteMovie from "./FavoriteMovie";
import FavoriteCrypto from "./FavoriteCrypto";
import GridContainer from "../containers/GridContainer";
import FavoritesContainer from "../containers/FavoritesContainer";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

type HomeProps = {
   weatherFavorite: weatherType[] | null;
   favoriteCrypto: CryptoType[] | null;
   favoriteMovies: MovieType[] | null;
   deleteMovie: Function;
   deleteCoin: Function;
};

function Home({
   weatherFavorite,
   favoriteCrypto,
   favoriteMovies,
   deleteCoin,
   deleteMovie,
}: HomeProps): JSX.Element {
   return (
      <HomeStyled>
         <GridContainer>
            <FavoritesContainer>
               <h4>Coins List</h4>

               {favoriteCrypto?.map((coin, index) => (
                  <FavoriteCrypto
                     coin={coin}
                     index={index}
                     deleteCoin={deleteCoin}
                  />
               ))}
            </FavoritesContainer>
            <FavoritesContainer>
               <WeatherContainer weatherFavorite={weatherFavorite} />
            </FavoritesContainer>
            <FavoritesContainer>
               <h4>Watch List</h4>

               {favoriteMovies?.map((movie, index) => (
                  <FavoriteMovie
                     key={movie.id}
                     movie={movie}
                     index={index}
                     deleteMovie={deleteMovie}
                  />
               ))}
            </FavoritesContainer>
            <FavoritesContainer>
               <h4>Messages</h4>
               <div className="icon">
                  <MailOutlineIcon />
               </div>
            </FavoritesContainer>
         </GridContainer>
      </HomeStyled>
   );
}

export default Home;

const HomeStyled = styled.div`
   height: ${theme.dimensions.percent.tall};
   width: ${theme.dimensions.percent.tall};
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-color: ${theme.colors.primary};
`;
