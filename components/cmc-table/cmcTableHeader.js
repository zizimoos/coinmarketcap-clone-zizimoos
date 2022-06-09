import React from "react";
import ChevronDown from "../../assets/svg/chevronDown";
import Info from "../../assets/svg/info";

const styles = {
  textIcon: "flex items-center",
};

function CmcTableHeader(props) {
  return (
    <tbody>
      <tr>
        <th></th>
        <th className="flex items-center">
          <b># &nbsp;</b>
          <ChevronDown />
        </th>
        <th>Name</th>
        <th>Price</th>
        <th>24h %</th>
        <th>7d %</th>
        <th>
          <div className={styles.textIcon}>
            <p className="mr-2">Market Cap</p>
            <Info />
          </div>
        </th>
        <th>
          <div className={styles.textIcon}>
            <p className="mr-2">Volume</p>
            <Info />
          </div>
        </th>
        <th>
          <div className={styles.textIcon}>
            <p className="mr-2">Circulateing Supply</p>
            <Info />
          </div>
        </th>
        <th>
          <div>Last 7 days</div>
        </th>
      </tr>
    </tbody>
  );
}

export default CmcTableHeader;