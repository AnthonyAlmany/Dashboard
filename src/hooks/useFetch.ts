import { useEffect, useState } from "react";
import { customAxios } from "../../src/axios/axios";
import { CryptoType } from "../components/Cryptos/Crypto";


type responseType = {
    data?: CryptoType[],
    isLoading: boolean
}

export function useFetch(baseURL: string) :responseType {
   const [data, setData] = useState();
   const [isLoading, setIsLoading] = useState(true);
   useEffect(() => {
      if (!baseURL) return;
       async function fetchData() {
         await customAxios({ baseURL })
            .get(baseURL)
            .then((res) => {
               setData(res.data);
               setIsLoading(false)
            })
            .catch((error) => console.log(error));
      }
      setIsLoading(true)
      fetchData();
   }, [baseURL]);

   return {data, isLoading};
}
