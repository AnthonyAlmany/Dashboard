import React from "react";
import CryptoTr from "./CryptoTr";
import styled from "styled-components";
import { theme } from "../../theme/theme";
import { CryptoType } from "../../types/types";

export type TableProps = {
   bestCryptos?: CryptoType[];
   handleCrypto: Function;
};

function BestCryptosTable({
   bestCryptos,
   handleCrypto,
}: TableProps): JSX.Element {
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
         }
      }
      .table-name {
         display: flex;
         align-items: center;
         justify-content: center;
         width: 100%;
         color: ${theme.colors.secondary};
         font-size: 25px;
      }
      .columns-names {
         margin-bottom: 15px;
         background-color: ${theme.colors.background.bisque};
      }
   }
`;

export default BestCryptosTable;
