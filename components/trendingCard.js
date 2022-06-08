import React from "react";
import Image from "next/image";
import MoreButton from "./moreButton";
import TrendingCardRow from "./trendingCardRow";

const styles = {
  trendingCard: `w-full p-5 py-3 pb-0 bg-[#323546] rounded-xl text-white mr-3`,
  trendingCardWrapper: `flex items-center justify-between`,
};

function TrendingCard({ title, icon, trendingData }) {
  return (
    <div className={styles.trendingCard}>
      <div className={styles.trendingCardWrapper}>
        <div className="flex">
          {icon && <Image src={icon} width={27} height={27} alt="icon" />}
          &nbsp;&nbsp;
          <p className="font-bold">{title}</p>
        </div>
        {/* MoreButton */}
        <MoreButton />
      </div>
      <br />
      {trendingData.map((data, index) => (
        <TrendingCardRow
          key={index}
          number={data.number}
          symbol={data.symbol}
          name={data.name}
          icon={data.icon}
          isIncrement={data.isIncrement}
          rate={data.rate}
        />
      ))}
    </div>
  );
}

export default TrendingCard;
