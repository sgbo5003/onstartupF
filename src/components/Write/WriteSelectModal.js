import React, { useState } from "react";
import BackImg from "../../images/back.png";

const WriteSelectModal = (props) => {
  const {
    classOnOff,
    onOpenModal,
    category,
    setCategory,
    selectModalOn,
    categoryData,
    setCategoryData,
  } = props;
  const selectList = categoryData.map((data, idx) => {
    return (
      <li>
        <a
          className="write_select_list"
          onClick={() => {
            setCategory(data.category_text);
          }}
        >
          {data.category_text}
        </a>
      </li>
    );
  });

  return (
    <div className={classOnOff}>
      <div className="write_select_popup">
        <ul>
          <li>
            <div className="write_select_popup_title">
              분야 선택
              <span className="write_select_popup_back" onClick={onOpenModal}>
                <img src={BackImg} alt="back.png" />
              </span>
            </div>
            <ul className="write_select_li" onClick={onOpenModal}>
              <li>
                <a className="write_select_first_list">
                  마이페이지 > 포트폴리오
                </a>
              </li>
              {selectList}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WriteSelectModal;
