import { MovieType } from "./../../types/types";
import { customAxios } from "../../axios/axios";

const getbaseUrl = (name: string): string => {
   switch (name) {
      case "playing":
         return `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&language=en-EN&page=1&region=US`;
      case "upcoming":
         return `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&language=en-EN&page=1&region=US`;
      default:
         throw new Error("Invalid url");
   }
};

export const fetchPlayingMovies = async () => {
   const baseURL = getbaseUrl("playing");
   return new Promise<MovieType>((resolve, reject) => {
      customAxios({ baseURL })
         .get(baseURL)
         .then((res: any) => {
            resolve(res.data.results);
         })
         .catch((error: any) => {
            reject(error);
         });
   });
};

export const fetchUpcomingMovies = async () => {
   const baseURL = getbaseUrl("upcoming");
   return new Promise<MovieType>((resolve, reject) => {
      customAxios({ baseURL })
         .get(baseURL)
         .then((res: any) => {
            resolve(res.data.results);
         })
         .catch((error: any) => {
            reject(error);
         });
   });
};
