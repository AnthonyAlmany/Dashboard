import React from "react";
import { CryptoType } from "./Crypto";
import CryptoTr from "./CryptoTr";
import styled from "styled-components";
import { theme } from "../../theme/theme";

export type TableProps = {
   bestCryptos?: CryptoType[];
   handleCrypto: Function;
};

function BestCryptosTable({ bestCryptos, handleCrypto }: TableProps) {
   return (
      <TableStyled>
         <thead>
            <tr className="table-name">
               <th>---Best Cryptos---</th>
            </tr>
         </thead>
         <tbody>
            <tr className="columns-names">
               <td>Rank</td>
               <td>Image</td>
               <td>Name</td>
               <td>Symbol</td>
               <td>Current price</td>
               <td>High 24h</td>
               <td>Low 24h</td>
               <td>Add favorites</td>
            </tr>
            {bestCryptos?.map((cryptos: CryptoType): JSX.Element => {
               return (
                  <CryptoTr
                     key={cryptos.id}
                     cryptos={cryptos}
                     handleCrypto={handleCrypto}
                  />
               );
            })}
         </tbody>
      </TableStyled>
   );
}

const TableStyled = styled.table`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 90%;
   padding: 25px 10px;
   background-color: ${theme.colors.background.bisque};
   border-radius: ${theme.borderRadius.extraRounded};
   overflow: hidden;
   thead,
   tbody {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-bottom: 20px;
      tr {
         display: grid;
         grid-template-columns: repeat(8, 1fr);
         td {
            display: flex;
            align-items: center;
            justify-content: center;
            button {
               width: 25px;
               height: 25px;
               border-radius: ${theme.borderRadius.circle};
               border: none;
               background-color: ${theme.colors.secondary};
               color: white;
               &:hover {
                  cursor: pointer;
                  font-size: 20px;
               }
            }
         }
         img {
            width: 20px;
            height: 20px;
         }
         &:hover {
            cursor: default;
            background-color: ${theme.colors.secondary};
            button {
               background-color: ${theme.colors.background.bisque};
               color: ${theme.colors.secondary};
            }
         }
      }
      .table-name {
         display: flex;
         justify-content: center;
         width: 100%;
         color: ${theme.colors.secondary};
         font-size: 25px;
         &:hover {
            background-color: inherit;
         }
      }
      .columns-names {
         background-color: ${theme.colors.background.bisque};
         &:hover {
            background-color: inherit;
         }
      }
   }
`;

export default BestCryptosTable;
