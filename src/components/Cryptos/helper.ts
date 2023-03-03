import { customAxios } from "../../axios/axios";
import { CryptoType } from "../../types/types";

export const fetchCryptos = () => {
   const baseURL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
   return new Promise<CryptoType>((resolve, reject) => {
      customAxios({ baseURL })
         .get(baseURL)
         .then((res: any) => {
            resolve(res.data);
         })
         .catch((error: any) => {
            reject(error);
         });
   });
};
