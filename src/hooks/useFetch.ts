import React from "react";
import { customAxios } from "../../src/axios/axios";
import {
   CryptoResponse,
   CryptoType,
   MovieResponse,
   MovieType,
   WeatherResponse,
   WeatherType,
} from "../types/types";

export function useFetch(
   baseURL: string,
   api: string
): CryptoResponse | MovieResponse | WeatherResponse | null {
   const [cryptoDatas, setCryprosDatas] = React.useState<CryptoType[]>();
   const [movieDatas, setMovieDatas] = React.useState<MovieType[]>([]);
   const [weatherDatas, setWeatherDatas] = React.useState<WeatherType>({
      location: "",
      temperature: null,
      condition: "",
   });
   const [isLoading, setIsLoading] = React.useState(true);
   React.useEffect(() => {
      if (!baseURL) return;
      async function fetchData() {
         await customAxios({ baseURL })
            .get(baseURL)
            .then((res) => {
               switch (api) {
                  case "market":
                     setCryprosDatas(res.data);
                     break;
                  case "movie":
                     setMovieDatas(res.data.results);
                     break;
                  case "weather":
                     setWeatherDatas({
                        location: res.data.location.name,
                        temperature: res.data.current.temp_c,
                        condition: res.data.current.condition.text,
                     });
                     break;
                  default:
                     break;
               }
               setIsLoading(false);
            })
            .catch((error) => console.log(error));
      }
      setIsLoading(true);
      fetchData();
   }, [baseURL, api]);
   if (baseURL.includes("market")) return { cryptoDatas, isLoading };
   else if (baseURL.includes("themoviedb")) return { movieDatas, isLoading };
   else if (baseURL.includes("weather")) return { weatherDatas, isLoading };
   else return null;
}
