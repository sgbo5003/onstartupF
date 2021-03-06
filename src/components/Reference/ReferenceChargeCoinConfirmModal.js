import React from "react";

const ReferenceChargeCoinConfirmModal = (props) => {
  const { setReferenceChargeCoinModalOn } = props;

  const ModalClosedHandler = () => {
    setReferenceChargeCoinModalOn(false);
  };
  return (
    <div className="reference_charge_modal_container">
      <div className="reference_charge_modal_box">
        <div className="reference_charge_modal_box_top">구매하시겠습니까?</div>
        <div className="reference_charge_modal_box_bottom">
          <button className="reference_charge_modal_box_button">확인</button>
          <button
            className="reference_charge_modal_box_button"
            onClick={ModalClosedHandler}
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReferenceChargeCoinConfirmModal;
