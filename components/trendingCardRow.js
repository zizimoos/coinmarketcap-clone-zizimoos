import React from "react";
import Image from "next/image";
import Rate from "./cmc-table/rate";

const styles = {
  trendingCardRow: `flex items-center justify-between mb-4 text-[0.93rem]`,
};

function TrendingCardRow({ number, symbol, name, icon, isIncrement, rate }) {
  return (
    <div className={styles.trendingCardRow}>
      <p className="opacity-40">{number}</p>
      <div className="w-full flex">
        <div className="mx-5">
          {icon && <Image src={icon} width={20} height={20} alt="icon" />}
        </div>
        <p className="font-bold">
          {name}
          <span className="text-gray-400"> {symbol}</span>
        </p>
      </div>
      <Rate isIncrement={isIncrement} rate={rate} />
    </div>
  );
}

export default TrendingCardRow;
