import { CryptoType } from "../../types/types";
import { theme } from "../../theme/theme";
import styled from "styled-components";
import ClearIcon from "@mui/icons-material/Clear";
import { useCurrentUser } from "../../hooks/useCurrentUser";

type FavoriteCryptoPropsType = {
   coin: CryptoType;
   index: number;
};

function FavoriteCrypto({ coin, index }: FavoriteCryptoPropsType): JSX.Element {
   const { deleteCoin } = useCurrentUser();
   return (
      <FavoriteCryptoStyled index={index}>
         <div className="data-container">
            <h3>{coin.name}</h3>
            <h6>{coin.current_price} USD</h6>
            <button
               className="unset-all"
               id="margin-button"
               onClick={() => deleteCoin(coin.id)}
            >
               <ClearIcon id="clear-icon" />
            </button>
         </div>
         {index !== 4 && <div className="line"></div>}
      </FavoriteCryptoStyled>
   );
}

const { colors, fonts, spacing, dimensions } = theme;

const FavoriteCryptoStyled = styled.div<any>`
   display: flex;
   flex-direction: column;
   align-items: space-between;
   justify-content: center;
   gap: ${spacing.p2};
   margin-top: ${spacing.p2};
   background-color: ${colors.secondary};
   .data-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: ${spacing.null} ${spacing.s};
      &:hover {
         transform: scale(1.01);
      }
      h3 {
         width: ${dimensions.pixels.large};
         color: ${colors.white};
         font-family: "Source Sans Pro", sans-serif;
         font-size: ${fonts.size.S};
      }
      h6 {
         color: ${colors.green};
         font-family: "Source Sans Pro", sans-serif;
         padding-top: ${spacing.p2};
      }
      #clear-icon {
         color: ${colors.purple};
         font-size: ${fonts.size.M};
         &:hover {
            cursor: pointer;
         }
      }
      .unset-all {
         all: unset;
      }
      #margin-button {
         margin-top: ${spacing.xs};
      }
   }
   .line {
      height: ${dimensions.pixels.xxxs};
      width: ${dimensions.percent.max};
      margin-top: ${spacing.p4};
      background-color: ${colors.white};
   }
`;

export default FavoriteCrypto;
