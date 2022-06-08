import React from "react";
import RightArrow from "../assets/svg/rightArrow.js";

const styles = {
  button: `text-[#6188FF] flex items-center cursor-pointer whitespace-no-wrap justify-between`,
};

function MoreButton(props) {
  return (
    <div className={styles.button}>
      More <RightArrow />
    </div>
  );
}

export default MoreButton;
