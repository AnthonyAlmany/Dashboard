import { weatherType } from "../../types/types";
import { theme } from "../../theme/theme";
import styled from "styled-components";
import { CryptoType, MovieType } from "../../types/types";
import WeatherContainer from "./WeatherContainer";
import FavoriteMovie from "./FavoriteMovie";
import CryptoContainer from "./CryptoContainer";

import MailOutlineIcon from '@mui/icons-material/MailOutline';


type props = {
   weatherFavorite: weatherType | null;
   favoriteCrypto: CryptoType[] | null;
   favoriteMovies: MovieType[] | null;
   deleteMovie: Function;
   deleteCoin: Function;
};

function Home({ weatherFavorite, favoriteCrypto, favoriteMovies, deleteMovie, deleteCoin }: props) {


   return (
      <HomeCardStyled>

         <GridStyled>
            <div className="container">
               <div className="title"><h4>Coins List</h4></div>

               {favoriteCrypto?.length === 0 ? <div className="no-favorite"><h3>No Favorites selected</h3></div>
                  : favoriteCrypto?.map((coin, index) => <CryptoContainer key={coin.id} coin={coin} index={index} deleteCoin={deleteCoin} />)}

            </div>
            <div className="container"><WeatherContainer weatherFavorite={weatherFavorite} /></div>
            <div className="container movies">
               <div className="title"><h4>Watch List</h4></div>
               {favoriteMovies?.length === 0 ? <div className="no-favorite"><h3>No Favorites selected</h3></div> : favoriteMovies?.map((movie, index) => <FavoriteMovie key={movie.id} movie={movie} index={index} deleteMovie={deleteMovie} />)}
            </div>
            <div className="container mails">
               <h3>No New Messages</h3>
               <MailOutlineIcon className="email-icon"></MailOutlineIcon>
            </div>
         </GridStyled>
      </HomeCardStyled>
   );
}

export default Home;

const HomeCardStyled = styled.div`
height: 90%;
width: 90%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: ${theme.colors.primary}
`
const GridStyled = styled.div`
display: grid;
grid-template-columns: 36rem 12rem;
grid-template-rows: 15rem 15rem;
column-gap: 6rem;
row-gap: 2rem;

.container{
   background-color: ${theme.colors.secondary};
   color: ${theme.fonts.color.white};
   font-family: 'Source Sans Pro', sans-serif;
   border-radius: 4px;
}
.mails{
   display:flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
}
.no-favorite{
   height:80%;
   padding: 70px 0;
   text-align:center;
   color: ${theme.fonts.color.white};
   font-family: 'Source Sans Pro', sans-serif;

}
.movies{
   display: flex;
   flex-direction: column;
   justify-content: start;
}
.title{
   color: ${theme.fonts.color.white};
   font-family: 'Source Sans Pro', sans-serif;
   height: 1.5rem;
   margin: 10px 0 2px 0;
   h4{
      color: ${theme.colors.purple};
      margin-left: 10px;
   }
}
.email-icon{
   font-size: 4rem;
   margin-top: 1rem;

}
`

// const WeatherCardStyled = styled.div`
//    width: 200px;
//    height: 250px;
//    display: flex;
//    flex-direction: column;
//    align-items: center;
//    justify-content: space-around;
//    color: ${theme.colors.tertiary};
//    border-radius: ${theme.borderRadius.extraRounded};
//    background-color: ${theme.colors.primary};
//    box-shadow: 5px 5px 8px ${theme.colors.tertiary};
// `;
