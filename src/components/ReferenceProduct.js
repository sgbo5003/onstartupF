import React from "react";
import ReferenceSidebar from "./ReferenceSidebar";
import gallery1 from "../images/port_gallery6.png";
const ReferenceProduct = () => {
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
              <button className="reference_product_purchase_button">
                00코인으로 구매하기
              </button>
            </div>
          </div>
        </div>
        <div className="reference_product_bottom_container">
          <div className="mypage_profiles_tab_menu_cove">
            <ul className="mypage_profiles_tab_cove">
              <li className="mypage_profiles_list my_comment_tab">
                <a className="mypage_profiles_tab_btn my_comment_tab">
                  문의하기
                </a>
              </li>
              <li className="mypage_profiles_list">
                <a className="mypage_profiles_tab_btn my_port_tab mypage_profiles_tab_btn_active">
                  상품설명
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReferenceProduct;
