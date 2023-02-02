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
         <p>Current price : {current_price} $</p>
         {pathname === "/market" && (
            <PrimaryButton
               disabled={false}
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
   color: ${theme.colors.tertiary};
   border-radius: ${theme.borderRadius.extraRounded};
   background-color: ${theme.colors.primary};
   box-shadow: 5px 5px 8px ${theme.colors.tertiary};
   img {
      height: 50px;
      width: 50px;
      border-radius: 50%;
   }
`;

export default CryptoCard;
