import { useFetch } from "../../hooks/useFetch";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import * as React from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";

export type CryptoType = {
   ath: number;
   ath_change_percentage: number;
   ath_date: string;
   atl: number;
   atl_change_percentage: number;
   atl_date: string;
   circulating_supply: number;
   current_price: number;
   fully_diluted_valuation: number;
   high_24h: number;
   id: string;
   image: string;
   last_updated: string;
   low_24h: number;
   market_cap: number;
   market_cap_change_24h: number;
   market_cap_change_percentage_24h: number;
   market_cap_rank: number;
   max_supply: number;
   name: string;
   price_change_24h: number;
   price_change_percentage_24h: number;
   roi: any;
   symbol: string;
   total_supply: number;
   total_volume: number;
};

function Crypto() {
   const baseURL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
   const { data, isLoading } = useFetch(baseURL);
   const [value, setValue] = React.useState<CryptoType | null>(null);
   const [inputValue, setInputValue] = React.useState("");


   if (isLoading) {
      return (
         <>
            <h1>Fetching Datas...</h1>
            {/* Add a loader */}
         </>
      );
   } else if (!isLoading && data) {
      const cryptos: CryptoType[] | undefined = data;

      return (
         <div>
            <h1>CRYPTOS CURRENCIES</h1>
            <Autocomplete
               id="crypto-select"
               value={value}
               onChange={(event: any, newValue: CryptoType | null) => {
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
                  <TextField
                     {...params}
                     label="Choose a crypto"
                  // inputProps={{
                  //    ...params.inputProps,
                  //    autoComplete: "new-password", // disable autocomplete and autofill
                  // }}
                  />
               )}
            />
            <CryptoCardStyled>
               <img src={value?.image} alt="crypto-logo" />
               <h3>{value?.name.toUpperCase()}</h3>
               {/* <h5>Current price :</h5>
               <p>{value?.current_price} $</p> */}
               <button>Add to favorite</button>
            </CryptoCardStyled>
         </div>
      );
   } else return null;
}

const CryptoCardStyled = styled.div`
   width: 200px;
   height: 250px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-around;
   color: ${theme.colors.tertiary};
   border-radius: ${theme.borderRadius.extraRounded};
   background-color: ${theme.colors.primary};
   box-shadow: 5px 5px 8px ${theme.colors.tertiary};
   img {
      height: 50px;
      width: 50px;
      border-radius: 50%;
   }
   button {
      height: 50px;
      border: none;
      color: ${theme.colors.primary};
      background-color: ${theme.colors.secondary};
      border-radius: ${theme.borderRadius.rounded};
      &:hover {
         border: 2px solid ${theme.colors.secondary};
         color: ${theme.colors.secondary};
         background-color: ${theme.colors.primary};
         box-shadow: 3px 3px 5px ${theme.colors.secondary};
      }
   }
`;

export default Crypto;
