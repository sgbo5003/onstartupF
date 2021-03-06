import axios from "axios";
import React, { useEffect, useState } from "react";
import * as fnc from "../../commonFunc/CommonFunctions";
import _ from "lodash";

const JoinSubmitQnaSecondModal = (props) => {
  const {
    interestCheckedItems,
    setInterestCheckedItems,
    onSubmit,
    joinCategoryData,
    setJoinCategoryData,
  } = props;

  const [buttonOn, setButtonOn] = useState(true);

  useEffect(() => {
    if (_.isEmpty(interestCheckedItems) == true) {
      setButtonOn(false);
    } else {
      setButtonOn(true);
    }
  }, [interestCheckedItems]);
  // 관심분야 item들을 제어하는 함수
  const onInterestHandler = (data) => {
    let itemSet = new Set(interestCheckedItems);
    if (interestCheckedItems.has(data)) {
      itemSet.delete(data);
      setInterestCheckedItems(itemSet);
    } else {
      itemSet.add(data);
      setInterestCheckedItems(itemSet);
    }
  };

  const getJoinCategoryData = () => {
    fnc.executeQuery({
      url: "action/main/osu_category.php",
      data: {},
      success: (res) => {
        setJoinCategoryData(res.category);
      },
    });
  };

  useEffect(() => {
    getJoinCategoryData();
  }, []);

  const btnActivate = () => {
    return (
      <button
        className="join_member_qna_select_confirm_first_btn_on"
        onClick={onSubmit}
      >
        선택완료
      </button>
    );
  };

  const btnDeactivate = () => {
    return (
      <button
        className="join_member_qna_select_confirm_first_btn_off"
        onClick={onSubmit}
        disabled
      >
        선택완료
      </button>
    );
  };

  return (
    <>
      <div className="join_member_qna_title_container">
        <div className="join_member_qna_Qtitle">Q.</div>
        <div className="join_member_qna_title">관심분야는 무엇인가요?</div>
      </div>
      <div className="join_member_qna_special_container">
        <div className="join_member_qna_special_title">관심분야</div>
        <div className="join_member_qna_special_select_container">
          {joinCategoryData.map((data, idx) => {
            return (
              data.sort === "interesting" && (
                <button
                  className={`join_member_qna_select_btn ${
                    interestCheckedItems.has(data.category_text)
                      ? "join_btn_selected"
                      : ""
                  }`}
                  onClick={() => onInterestHandler(data.category_text)}
                  key={idx}
                >
                  {data.category_text}
                </button>
              )
            );
          })}
        </div>
      </div>
      <div className="join_member_qna_select_confirm_btn_container">
        {buttonOn ? btnActivate() : btnDeactivate()}
      </div>
    </>
  );
};

export default JoinSubmitQnaSecondModal;
