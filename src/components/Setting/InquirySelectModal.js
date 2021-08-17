import React from "react";
import BackImg from "../../images/back.png";

const InquirySelectModal = (props) => {
  const arr = [1, 2, 3, 4, 5];
  const { selectModalHandler, setCategory } = props;

  return (
    <div className="write_select_popup_cove_on">
      <div className="write_select_popup">
        <ul>
          <li>
            <div className="write_select_popup_title">
              분야 선택
              <span className="write_select_popup_back">
                <img
                  src={BackImg}
                  alt="back.png"
                  onClick={selectModalHandler}
                />
              </span>
            </div>
            <ul className="write_select_li">
              {arr.map((data) => {
                return (
                  <li>
                    <a
                      className="write_select_list"
                      onClick={() => {
                        setCategory(data);
                      }}
                    >
                      {data}
                    </a>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InquirySelectModal;
