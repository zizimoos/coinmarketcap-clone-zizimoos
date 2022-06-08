import React, { useState } from "react";
import fire from "../assets/fire.png";
import btc from "../assets/btc.png";
import usdt from "../assets/usdt.png";
import gainers from "../assets/gainers.png";
import recent from "../assets/recent.png";

const styles = {
  trendingWrapper: `mx-auto max-w-screen-2xl`,
  h1: `text-3xl text-white`,
};

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
      </div>
    </div>
  );
}

export default Trending;
