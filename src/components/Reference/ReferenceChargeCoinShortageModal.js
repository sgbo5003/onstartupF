import React from "react";

const ReferenceChargeCoinShortageModal = () => {
  return (
    <div className="reference_charge_modal_container">
      <div className="reference_charge_modal_box">
        <div className="reference_charge_modal_box_top">코인이 부족해요!</div>
        <div className="reference_charge_modal_box_bottom">
          <button className="reference_charge_modal_box_button">
            충전하러 가기
          </button>
          <button className="reference_charge_modal_box_button">취소</button>
        </div>
      </div>
    </div>
  );
};

export default ReferenceChargeCoinShortageModal;
