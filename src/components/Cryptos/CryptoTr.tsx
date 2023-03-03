import AddButton from "../../reusable-ui/AddButton";
import styled from "styled-components";
import { theme } from "../../theme/theme";
import { CryptoType } from "../../types/types";
import { useCurrentUser } from "../../hooks/useCurrentUser";

type TrProps = {
   cryptos: CryptoType;
};

function CryptoTr({ cryptos }: TrProps): JSX.Element {
   const { handleCrypto } = useCurrentUser();

   return (
      <CryptoTrStyled>
         <td>{cryptos.market_cap_rank}</td>
         <td>
            <img src={cryptos.image} alt="crypto_image" />
         </td>
         <td>{cryptos.name}</td>
         <td>{cryptos.symbol}</td>
         <td>{cryptos.current_price} $</td>
         <td>{cryptos.high_24h} $</td>
         <td>{cryptos.low_24h} $</td>
         <td>
            <AddButton label={"+"} onClick={() => handleCrypto(cryptos)} />
         </td>
      </CryptoTrStyled>
   );
}

const CryptoTrStyled = styled.tr`
   display: grid;
   grid-template-columns: repeat(8, 1fr);
   margin-bottom: ${theme.spacing.xs};
   td {
      display: flex;
      align-items: center;
      justify-content: center;
   }
   img {
      width: ${theme.dimensions.pixels.xs};
      height: ${theme.dimensions.pixels.xs};
   }
   button {
      &:hover {
         background-color: ${theme.colors.purple};
      }
   }
`;

export default CryptoTr;
