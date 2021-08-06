import React from "react";
import ReferenceSidebar from "../components/ReferenceSidebar";

const ReferenceGiftCoin = () => {
  return (
    <>
      <ReferenceSidebar />
      <div className="reference_gift_container">
        <h1>코인 선물받기</h1>
        <div className="reference_gift_code_container">
          <h3 className="reference_gift_code_title">코드 입력</h3>
          <div className="reference_gift_code_form_container">
            <input type="text" />
            <button type="submit" className="reference_gift_code_form_button">
              등록하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReferenceGiftCoin;
