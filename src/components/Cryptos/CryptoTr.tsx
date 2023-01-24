import React from "react";
import { CryptoType } from "./Crypto";

type TrProps = {
   cryptos: CryptoType;
   handleCrypto: Function;
};

function CryptoTr({ cryptos, handleCrypto }: TrProps) {
   return (
      <tr>
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
            <button onClick={() => handleCrypto(cryptos)}>+</button>
         </td>
      </tr>
   );
}

export default CryptoTr;
