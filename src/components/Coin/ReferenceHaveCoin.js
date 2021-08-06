import React, { useState } from "react";
import ContextMenuIcon from "../../images/Context_menu_icon1.png";
import Modal from "../../Modal";
import ReferenceChargeCoinModal from "./ReferenceChargeCoinModal";

const ReferenceHaveCoin = (props) => {
  const { userHaveCoinData } = props;

  const [ReferenceChargeCoinModalOn, setReferenceChargeCoinModalOn] =
    useState(false);

  const onCoinListClicked = () => {
    setReferenceChargeCoinModalOn(true);
  };

  const onCoinModalButtonClicked = () => {
    setReferenceChargeCoinModalOn(false);
    console.log("clicked");
  };

  const userHaveCoinDataList = userHaveCoinData.coin.map((data, index) => {
    return (
      <div
        className="reference_coin_charge_coinlist"
        onClick={onCoinListClicked}
      >
        <div>
          <img src={ContextMenuIcon} />
          <span>{userHaveCoinData.coin[index]} 코인</span>
        </div>
        <span>￦ {userHaveCoinData.price[index]}</span>
      </div>
    );
  });

  return (
    <>
      <div className="reference_coin_charge_content_container">
        <div className="reference_coin_charge_mycoin">
          <span>내가 보유한 코인</span>
          <div>
            <img src={ContextMenuIcon} />
            <span>{userHaveCoinData.user_coin} 코인</span>
          </div>
        </div>
        {userHaveCoinDataList}
      </div>
      {ReferenceChargeCoinModalOn ? (
        <ReferenceChargeCoinModal
          onCoinModalButtonClicked={onCoinModalButtonClicked}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default ReferenceHaveCoin;
