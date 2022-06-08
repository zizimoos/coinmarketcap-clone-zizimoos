import React, { useState } from "react";
import fire from "../assets/fire.png";
import btc from "../assets/btc.png";
import usdt from "../assets/usdt.png";
import gainers from "../assets/gainers.png";
import recent from "../assets/recent.png";
import Rate from "./cmc-table/rate.js";
import TrendingCard from "./trendingCard";

const styles = {
  trendingWrapper: `mx-auto max-w-screen-2xl`,
  h1: `text-3xl text-white`,
  flexCenter: `flex items-center`,
};

const trendingData = [
  {
    number: 1,
    symbol: "BTC",
    name: "Bitcoin",
    icon: btc,
    isIncrement: true,
    rate: "2.34 %",
  },
  {
    number: 2,
    symbol: "USDT",
    name: "usdt",
    icon: usdt,
    isIncrement: false,
    rate: "9.23 %",
  },
  {
    number: 3,
    symbol: "BTC",
    name: "Bitcoin",
    icon: btc,
    isIncrement: true,
    rate: "2.34 %",
  },
];

function Trending(props) {
  const [checked, setChecked] = useState(false);
  return (
    <div className="text-white">
      <div className={styles.trendingWrapper}>
        <div className="flex justify-between">
          <h1 className={styles.h1}>
            Todays Cryptocurrency Prices by Market Cap
          </h1>
          <div className="fles">
            <p className="text-gray-400">Highlights &nbsp;</p>
            <button
              checked={checked}
              onClick={() => {
                setChecked(!checked);
              }}
            ></button>
          </div>
        </div>
        <br />
        <div className="flex">
          <p className="text-gray-400">
            The global crypto market cap is $1.74T, a &nbsp;
          </p>
          <span>
            <Rate isIncrement={true} rate="0.53 %" />
          </span>
          <p>
            &nbsp; decrease over the last day.{" "}
            <span className="underline">Read More</span>
          </p>
        </div>
        <br />
        <div className={styles.flexCenter}>
          <TrendingCard
            title="trending"
            icon={fire}
            trendingData={trendingData}
          />
          <TrendingCard
            title="Biggest Gainer"
            icon={gainers}
            trendingData={trendingData}
          />
          <TrendingCard
            title="Rencently Added"
            icon={recent}
            trendingData={trendingData}
          />
        </div>
      </div>
    </div>
  );
}

export default Trending;
