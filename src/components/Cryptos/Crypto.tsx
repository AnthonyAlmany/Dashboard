import { useFetch } from "../../hooks/useFetch";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import * as React from "react";
import CryptoCard from "./CryptoCard";
import BestCryptosTable from "./BestCryptosTable";
import styled from "styled-components";
import { CryptoResponse, CryptoType } from "../../types/types";

function Crypto({ handleCrypto }: any) {
   const baseURL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
   const crypto: CryptoResponse | null = useFetch(baseURL, "market");
   const [value, setValue] = React.useState<CryptoType | null>(null);
   const [inputValue, setInputValue] = React.useState("");

   const bestCryptos: CryptoType[] = [];
   const getBestCryptos: Function = (data: any): CryptoType[] => {
      for (let i: number = 0; i < 5; i++) {
         bestCryptos?.push(data?.[i]);
      }
      return bestCryptos;
   };
   getBestCryptos(crypto?.cryptoDatas);
   console.log(crypto);

   if (crypto?.isLoading) {
      return (
         <CryptoPanelStyled>
            <h1>Fetching Datas...</h1>
            {/* Add a loader */}
         </CryptoPanelStyled>
      );
   } else if (!crypto?.isLoading && crypto?.cryptoDatas) {
      const cryptos: any = crypto.cryptoDatas; //any?

      return (
         <CryptoPanelStyled>
            <h1>CRYPTOS CURRENCIES</h1>
            {bestCryptos ? (
               <BestCryptosTable
                  bestCryptos={bestCryptos}
                  handleCrypto={handleCrypto}
               />
            ) : null}
            <Autocomplete
               id="crypto-select"
               value={value}
               onChange={(event, newValue: CryptoType | null) => {
                  setValue(newValue);
               }}
               inputValue={inputValue}
               onInputChange={(event, newInputValue) => {
                  setInputValue(newInputValue);
               }}
               sx={{ width: 300 }}
               options={cryptos}
               autoHighlight
               getOptionLabel={(option) => option.name}
               renderOption={(props, option) => (
                  <Box
                     component="li"
                     sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                     {...props}
                  >
                     <img
                        loading="lazy"
                        width="20"
                        src={option.image}
                        srcSet={option.image}
                        alt=""
                     />
                     {option.name} ({option.symbol})
                  </Box>
               )}
               renderInput={(params) => (
                  <TextField {...params} label="Search a crypto" />
               )}
            />
            {value && <CryptoCard value={value} handleCrypto={handleCrypto} />}
         </CryptoPanelStyled>
      );
   } else return null;
}

const CryptoPanelStyled = styled.div`
   display: flex;
   width: 100%;
   position: absolute;
   top: 0;
   right: 0;
   flex-direction: column;
   row-gap: 25px;
   padding: 25px 0 50px 0;
   align-items: center;
`;

export default Crypto;
