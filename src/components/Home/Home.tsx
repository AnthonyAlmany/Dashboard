import { weatherType } from "../../App";

type props = {
   weatherFavorite: weatherType | null;
}



function Home({ weatherFavorite }: props) {

   return <h1>Favorite city: {!weatherFavorite ? "Sydney" : weatherFavorite?.city}</h1>;
}

export default Home;
