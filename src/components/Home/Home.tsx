import { theme } from "../../theme/theme";
import styled from "styled-components";
import WeatherContainer from "./WeatherContainer";
import FavoriteMovie from "./FavoriteMovie";
import FavoriteCrypto from "./FavoriteCrypto";
import GridContainer from "../containers/GridContainer";
import FavoritesContainer from "../containers/FavoritesContainer";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DefaultHome from "./DefaultHome";
import { useCurrentUser } from "../../hooks/useCurrentUser";

function Home(): JSX.Element {
   const { currentUser, userInfos } = useCurrentUser();

   return (
      <HomeStyled>
         {currentUser ? (
            <GridContainer>
               <FavoritesContainer>
                  <h4>Coins List</h4>

                  {userInfos.favoriteCryptos?.map((coin, index) => (
                     <FavoriteCrypto key={coin.id} coin={coin} index={index} />
                  ))}
               </FavoritesContainer>
               <FavoritesContainer>
                  <WeatherContainer />
               </FavoritesContainer>
               <FavoritesContainer>
                  <h4>Watch List</h4>

                  {userInfos.favoriteMovies?.map((movie, index) => (
                     <FavoriteMovie
                        key={movie.id}
                        movie={movie}
                        index={index}
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
         ) : (
            <DefaultHome />
         )}
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
