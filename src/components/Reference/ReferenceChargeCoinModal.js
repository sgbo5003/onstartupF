import React from "react";

const ReferenceChargeCoinModal = (props) => {
  const { onCoinModalButtonClicked } = props;
  return (
    <div className="reference_charge_modal_container">
      <div className="reference_charge_modal_box">
        <div className="reference_charge_modal_box_top">
          00코인을 충전하시겠습니까?
        </div>
        <div className="reference_charge_modal_box_bottom">
          <button
            className="reference_charge_modal_box_button"
            onClick={onCoinModalButtonClicked}
          >
            확인
          </button>
          <button
            className="reference_charge_modal_box_button"
            onClick={onCoinModalButtonClicked}
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReferenceChargeCoinModal;
