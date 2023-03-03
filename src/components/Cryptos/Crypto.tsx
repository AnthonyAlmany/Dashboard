import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import * as React from "react";
import CryptoCard from "./CryptoCard";
import BestCryptosTable from "./BestCryptosTable";
import styled from "styled-components";
import { CryptoType } from "../../types/types";
import { theme } from "../../theme/theme";
import { fetchCryptos } from "./helper";
import { useFetch } from "../../hooks/useFetch";

function Crypto(): JSX.Element | null {
   const crypto = useFetch(fetchCryptos);
   const [value, setValue] = React.useState<CryptoType | null>(null);
   const [inputValue, setInputValue] = React.useState("");

   const bestCryptos: CryptoType[] = [];
   const getBestCryptos: Function = (data: any): CryptoType[] => {
      for (let i: number = 0; i < 5; i++) {
         bestCryptos?.push(data?.[i]);
      }
      return bestCryptos;
   };
   getBestCryptos(crypto?.data);

   if (crypto?.isLoading) {
      return (
         <CryptoPanelStyled>
            <h1>Fetching Datas...</h1>
            {/* Add a loader */}
         </CryptoPanelStyled>
      );
   } else if (!crypto?.isLoading && crypto?.data) {
      const cryptos: CryptoType[] = crypto.data;

      return (
         <CryptoPanelStyled>
            <h1>CRYPTO CURRENCIES</h1>
            {bestCryptos ? (
               <BestCryptosTable bestCryptos={bestCryptos} />
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
               sx={{
                  width: 300,
                  backgroundColor: `${theme.colors.xtraLightSecondary}`,
                  borderRadius: `${theme.borderRadius.rounded}`,
               }}
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
                     label={<h4>Search a crypto</h4>}
                     variant="filled"
                  />
               )}
            />
            {value && <CryptoCard value={value} />}
         </CryptoPanelStyled>
      );
   } else return null;
}

const { colors, spacing, fonts, dimensions } = theme;

const CryptoPanelStyled = styled.div`
   display: flex;
   width: ${dimensions.percent.max};
   position: absolute;
   top: ${spacing.null};
   right: ${spacing.null};
   flex-direction: column;
   row-gap: ${spacing.l};
   padding: ${spacing.l} ${spacing.null} ${spacing.xl};
   align-items: center;
   h1 {
      color: ${colors.white};
      font-size: ${fonts.size.M};
   }
   h4 {
      color: ${colors.secondary};
   }
`;

export default Crypto;
