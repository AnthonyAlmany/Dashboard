import { CryptoType } from "./Crypto";
import AddButton from "../../reusable-ui/AddButton";
import styled from "styled-components";
import { theme } from "../../theme/theme";

type TrProps = {
   cryptos: CryptoType;
   handleCrypto: Function;
};

function CryptoTr({ cryptos, handleCrypto }: TrProps) {
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
   td {
      display: flex;
      align-items: center;
      justify-content: center;
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
`;

export default CryptoTr;