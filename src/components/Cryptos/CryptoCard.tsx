import React from "react";
import { theme } from "../../theme/theme";
import styled from "styled-components";
import { CryptoType } from "./Crypto";

type ValueProps = {
   value: CryptoType;
};

function CryptoCard({ value }: ValueProps) {
   const { image, name } = value;

   return (
      <CryptoCardStyled>
         <img src={image} alt="crypto-logo" />
         <h3>{name.toUpperCase()}</h3>
         <button>Add to favorite</button>
      </CryptoCardStyled>
   );
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
         font-weight: bold;
         border: 2px solid ${theme.colors.secondary};
         color: ${theme.colors.secondary};
         background-color: ${theme.colors.primary};
         box-shadow: 3px 3px 5px ${theme.colors.tertiary};
      }
   }
`;

export default CryptoCard;
