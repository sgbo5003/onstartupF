import axios from "axios";
import React, { useEffect, useState } from "react";

const JoinSubmitQnaSecondModal = (props) => {
  const { interestCheckedItems, setInterestCheckedItems, onSubmit } = props;

  const [interestingData, setInterestingData] = useState({
    category_order_num: [],
    category_parent_idx: [],
    category_text: [],
  });

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
    console.log(data, interestCheckedItems.values());
  };

  // 관심분야 관련 버튼 컴포넌트 Mapping
  const interestButtonOnList = interestingData.category_text.map((data) => {
    return (
      <button
        className={`join_member_qna_select_btn ${
          interestCheckedItems.has(data) ? "join_btn_selected" : ""
        }`}
        onClick={() => onInterestHandler(data)}
      >
        {data}
      </button>
    );
  });

  const getInterestingData = () => {
    const params = new FormData();
    params.append("command", "ca");
    params.append("kind", "interesting");
    axios({
      method: "post",
      url: "/response/get_info.php",
      data: params,
    })
      .then((response) => {
        console.log("interesting response :", response.data);
        setInterestingData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getInterestingData();
  }, []);

  return (
    <>
      <div className="join_member_qna_title_container">
        <div className="join_member_qna_Qtitle">Q.</div>
        <div className="join_member_qna_title">관심분야는 무엇인가요?</div>
      </div>
      <div className="join_member_qna_special_container">
        <div className="join_member_qna_special_title">관심분야</div>
        <div className="join_member_qna_special_select_container">
          {interestButtonOnList}
        </div>
      </div>
      <div className="join_member_qna_select_confirm_btn_container">
        <a className="join_member_qna_select_confirm_btn" onClick={onSubmit}>
          선택완료
        </a>
      </div>
    </>
  );
};

export default JoinSubmitQnaSecondModal;
