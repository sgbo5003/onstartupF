import React, { useState } from "react";
import ReferenceSidebar from "./ReferenceSidebar";
import gallery1 from "../../images/port_gallery6.png";
import ReferenceChargeCoinShortageModal from "./ReferenceChargeCoinShortageModal";
import ReferenceChargeCoinConfirmModal from "./ReferenceChargeCoinConfirmModal";
const ReferenceProduct = () => {
  const [referenceChargeCoinModalOn, setReferenceChargeCoinModalOn] =
    useState(false);
  const [menuClicked, setMenuClicked] = useState(false); // 메뉴 클릭 감지 state

  // 모달 핸들러
  const modalHandler = () => {
    setReferenceChargeCoinModalOn(true);
  };
  // 문의하기 메뉴 핸들러
  const inquiryMenuHandler = () => {
    setMenuClicked(true);
  };

  // 상품설명 메뉴 핸들러
  const explainMenuHandler = () => {
    setMenuClicked(false);
  };

  return (
    <>
      <ReferenceSidebar />
      <div className="reference_product_content">
        <div className="reference_product_top_container">
          <div className="reference_product_top_left_container">
            <img className="reference_product_img_container" src={gallery1} />
          </div>
          <div className="reference_product_top_right_container">
            <h2>Title text</h2>
            <h3>소제목 소제목 소제목 소제목</h3>
            <p>리뷰 0</p>
            <div>
              <button
                className="reference_product_purchase_button"
                onClick={modalHandler}
              >
                00코인으로 구매하기
              </button>
            </div>
          </div>
        </div>
        <div className="reference_product_bottom_container">
          <div className="mypage_profiles_tab_menu_cove">
            <ul className="mypage_profiles_tab_cove">
              <li className="mypage_profiles_list my_comment_tab">
                <a
                  className={`mypage_profiles_tab_btn my_comment_tab ${
                    menuClicked ? "mypage_profiles_tab_btn_active" : ""
                  }`}
                  onClick={inquiryMenuHandler}
                >
                  문의하기
                </a>
              </li>
              <li className="mypage_profiles_list">
                <a
                  className={`mypage_profiles_tab_btn my_comment_tab ${
                    menuClicked ? "" : "mypage_profiles_tab_btn_active"
                  }`}
                  onClick={explainMenuHandler}
                >
                  상품설명
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {referenceChargeCoinModalOn ? (
        <ReferenceChargeCoinConfirmModal
          setReferenceChargeCoinModalOn={setReferenceChargeCoinModalOn}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default ReferenceProduct;
