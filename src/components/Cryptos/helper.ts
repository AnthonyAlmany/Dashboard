import { CryptoType } from "./../../types/types";
import { AxiosError } from "axios";
import { AxiosResponse } from "axios";
import { customAxios } from "../../axios/axios";

export const fetchCryptos = (): Promise<CryptoType[]> => {
   const baseURL: string = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
   return new Promise<CryptoType[]>((resolve, reject) => {
      customAxios({ baseURL })
         .get(baseURL)
         .then((res: AxiosResponse) => {
            resolve(res.data);
         })
         .catch((error: AxiosError) => {
            reject(error);
         });
   });
};
