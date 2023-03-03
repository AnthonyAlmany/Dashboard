import { theme } from "../../theme/theme";
import styled from "styled-components";
import PrimaryButton from "../../reusable-ui/PrimaryButton";
import { CryptoType } from "../../types/types";
import { useCurrentUser } from "../../hooks/useCurrentUser";

type CryptoCardProps = {
   value: CryptoType;
};

function CryptoCard({ value }: CryptoCardProps): JSX.Element {
   const { handleCrypto, currentUser } = useCurrentUser();

   const { image, name, current_price } = value;

   return (
      <CryptoCardStyled>
         <img src={image} alt="crypto-logo" />
         <h3>{name.toUpperCase()}</h3>
         <p>{current_price} $</p>
         {currentUser && (
            <PrimaryButton
               disabled={false}
               label={"Add to favorite"}
               onClick={() => handleCrypto(value)}
            />
         )}
      </CryptoCardStyled>
   );
}

const { colors, dimensions, borderRadius } = theme;

const CryptoCardStyled = styled.div`
   width: ${dimensions.pixels.large};
   height: ${dimensions.pixels.xlarge};
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-around;
   color: ${colors.white};
   border-radius: ${borderRadius.rounded};
   background-color: ${colors.secondary};
   img {
      height: ${dimensions.pixels.l};
      width: ${dimensions.pixels.l};
      border-radius: ${borderRadius.circle};
   }
   p {
      color: ${colors.green};
   }
`;

export default CryptoCard;
