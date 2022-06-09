import React, { useState, useContext, useEffect, useCallback } from "react";
import btc from "../../assets/btc.png";
import { CoinMarketContext } from "../../context/context";
import CMCtableHeader from "./cmcTableHeader";
import CMCtableRow from "./cmcTableRow";

const CMCTable = () => {
  let { getTopTenCoins } = useContext(CoinMarketContext);
  let [coinData, setCoinData] = useState(null);

  useEffect(() => {
    setData();
  }, []);

  const setData = useCallback(async () => {
    try {
      let apiResponse = await getTopTenCoins();
      let filteredResponse = [];
      for (let i = 0; i < apiResponse.length; i++) {
        const element = apiResponse[i];
        if (element.cmc_rank < 11) {
          filteredResponse.push(element);
        }
      }
      setCoinData(filteredResponse);
    } catch (err) {
      console.log(err);
    }
  }, [getTopTenCoins]);

  return (
    <div className="text-white font-bold">
      <div className="mx-auto max-w-screen-2xl">
        <table className="w-full">
          <CMCtableHeader />
          {coinData && coinData ? (
            coinData.map((coin, index) => {
              return (
                <CMCtableRow
                  key={index}
                  starNum={coin.cmc_rank}
                  coinName={coin.name}
                  coinSymbol={coin.symbol}
                  coinIcon={btc}
                  showBuy={true}
                  hRate={coin.quote.USD.percent_change_24h}
                  dRate={coin.quote.USD.percent_change_7d}
                  hRateIsIncrement={true}
                  price={coin.quote.USD.price}
                  marketCapValue={coin.quote.USD.market_cap}
                  volumeCryptoValue={coin.quote.USD.volume_24h}
                  volumeValue={coin.totla_supply}
                  circulatingSupply={coin.circulating_supply}
                />
              );
            })
          ) : (
            <div>Loading...</div>
          )}
        </table>
      </div>
    </div>
  );
};

export default CMCTable;
