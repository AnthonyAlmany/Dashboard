import { useFetch } from "../../hooks/useFetch";

function Crypto() {
   const baseURL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
   const datas = useFetch(baseURL);
   console.log(datas);

   return (
      <div>
         <h1>Cryptos</h1>
         <h2>{datas[0].name} </h2>
         <h2>{datas[0].symbol} </h2>
         <img src={datas[0].image} alt="cool" />
      </div>
   );
}

export default Crypto;
