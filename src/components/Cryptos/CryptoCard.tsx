import React from "react";
import { theme } from "../../theme/theme";
import styled from "styled-components";
import PrimaryButton from "../../reusable-ui/PrimaryButton";
import { CryptoType } from "../../types/types";

type ValueProps = {
   value: CryptoType;
   handleCrypto?: any;
};

function CryptoCard({ value, handleCrypto }: ValueProps): JSX.Element {
   const pathname: string = window.location.pathname;

   const { image, name, current_price } = value;

   return (
      <CryptoCardStyled>
         <img src={image} alt="crypto-logo" />
         <h3>{name.toUpperCase()}</h3>
         <p>{current_price} $</p>
         {pathname === "/market" && (
            <PrimaryButton
               label={"Add to favorite"}
               onClick={() => handleCrypto(value)}
            />
         )}
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
   font-family: 'Source Sans Pro', sans-serif;
   color: ${theme.colors.white};
   border-radius: ${theme.borderRadius.rounded};
   background-color: ${theme.colors.secondary};

   img {
      height: 50px;
      width: 50px;
      border-radius: 50%;
   }
   p{
      color: ${theme.colors.green};
   }
`;

export default CryptoCard;
