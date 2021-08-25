import React, { useState } from "react";

import coinMenu from "../../images/Context_menu_icon1.png";
import CoinAttdModal from "./CoinAttdModal";
import { motion } from "framer-motion";

const CoinButton = () => {
  const [coinModalOn, setCoinModalOn] = useState(false);

  const [attdCheckedItems, setAttdCheckedItems] = useState(new Set());

  const coinModalHandler = () => {
    setCoinModalOn(!coinModalOn);
  };
  return (
    <>
      <motion.div
        className="coin_pre_btn_cove"
        onClick={coinModalHandler}
        whileHover={{ scale: 1.1 }}
      >
        <span className="coin_pre_btn">
          <img
            className="coin_pre_btn_img"
            src={coinMenu}
            alt="Context_menu_icon1.png"
          />
        </span>
        <span className="coin_pre_text">출석 코인받기</span>
      </motion.div>
      {coinModalOn ? (
        <CoinAttdModal
          coinModalHandler={coinModalHandler}
          attdCheckedItems={attdCheckedItems}
          setAttdCheckedItems={setAttdCheckedItems}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default CoinButton;
