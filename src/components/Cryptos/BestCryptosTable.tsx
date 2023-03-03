import React from "react";
import CryptoTr from "./CryptoTr";
import styled from "styled-components";
import { theme } from "../../theme/theme";
import { CryptoType } from "../../types/types";

export type TableProps = {
   bestCryptos?: CryptoType[];
};

function BestCryptosTable({ bestCryptos }: TableProps): JSX.Element {
   return (
      <BestCryptosTableStyled>
         <thead>
            <tr className="table-name">
               <th>---Top 5---</th>
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
               return <CryptoTr key={cryptos.id} cryptos={cryptos} />;
            })}
         </tbody>
      </BestCryptosTableStyled>
   );
}

const { colors, spacing, fonts, dimensions, borderRadius } = theme;

const BestCryptosTableStyled = styled.table`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: ${dimensions.percent.tall};
   padding: ${spacing.l} ${spacing.xs};
   background-color: ${colors.secondary};
   border-radius: ${borderRadius.extraRounded};
   overflow: hidden;
   thead,
   tbody {
      display: flex;
      flex-direction: column;
      width: ${dimensions.percent.max};
      margin-bottom: ${spacing.m};
      tr {
         display: grid;
         grid-template-columns: repeat(8, 1fr);
         td {
            display: flex;
            align-items: center;
            justify-content: center;
         }
      }
      th,
      td {
         color: ${colors.white};
         background-color: ${colors.secondary};
      }
      th {
         font-size: ${fonts.size.M};
      }
      .table-name {
         display: flex;
         align-items: center;
         justify-content: center;
         width: ${dimensions.percent.max};
         color: ${colors.secondary};
         font-size: ${fonts.size.XXL};
      }
      .columns-names {
         margin-bottom: ${spacing.s};
         background-color: ${colors.background.bisque};
         td {
            color: ${colors.purple};
         }
      }
   }
`;

export default BestCryptosTable;
