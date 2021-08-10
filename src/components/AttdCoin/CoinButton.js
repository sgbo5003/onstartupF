import React, { useState } from "react";

import coinMenu from "../../images/Context_menu_icon1.png";
import CoinAttdModal from "./CoinAttdModal";

const CoinButton = () => {
  const [coinModalOn, setCoinModalOn] = useState(false);

  const [attdCheckedItems, setAttdCheckedItems] = useState(new Set());

  const coinModalHandler = () => {
    setCoinModalOn(!coinModalOn);
  };
  return (
    <>
      <div class="coin_pre_btn_cove" onClick={coinModalHandler}>
        <span class="coin_pre_btn">
          <img
            class="coin_pre_btn_img"
            src={coinMenu}
            alt="Context_menu_icon1.png"
          />
        </span>
        <span class="coin_pre_text">출석 코인받기</span>
      </div>
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
