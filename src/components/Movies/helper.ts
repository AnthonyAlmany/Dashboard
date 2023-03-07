import { AxiosError } from "axios";
import { AxiosResponse } from "axios";
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

export const fetchPlayingMovies = async (): Promise<MovieType> => {
   const baseURL: string = getbaseUrl("playing");
   return new Promise<MovieType>((resolve, reject) => {
      customAxios({ baseURL })
         .get(baseURL)
         .then((res: AxiosResponse) => {
            resolve(res.data.results);
         })
         .catch((error: AxiosError) => {
            reject(error);
         });
   });
};

export const fetchUpcomingMovies = async (): Promise<MovieType[]> => {
   const baseURL: string = getbaseUrl("upcoming");
   return new Promise<MovieType[]>((resolve, reject) => {
      customAxios({ baseURL })
         .get(baseURL)
         .then((res: AxiosResponse) => {
            resolve(res.data.results);
         })
         .catch((error: AxiosError) => {
            reject(error);
         });
   });
};
