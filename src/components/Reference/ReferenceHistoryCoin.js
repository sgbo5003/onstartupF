import React from "react";
import ContextMenuIcon from "../../images/Context_menu_icon1.png";
const ReferenceHistoryCoin = (props) => {
  const { userHistoryCoinData } = props;

  const userHistoryCoinDataList = userHistoryCoinData.amount.map(
    (data, index) => {
      return (
        <div className="reference_coin_charge_coinlist">
          <div>
            <span>{userHistoryCoinData.deposit_deduction[index]}</span>
          </div>
          <div>
            <span className="reference_coin_charge_history_title">
              {userHistoryCoinData.used[index]}
            </span>
            <span className="reference_coin_charge_history_data">
              {userHistoryCoinData.amount[index]}
            </span>
          </div>
        </div>
      );
    }
  );

  return (
    <div className="reference_coin_charge_content_container">
      <div className="reference_coin_charge_mycoin">
        <span>현재 누적 코인</span>
        <div>
          <img src={ContextMenuIcon} />
          <span>{userHistoryCoinData.used_sum} 코인</span>
        </div>
      </div>
      {userHistoryCoinDataList}
    </div>
  );
};

export default ReferenceHistoryCoin;
