import axios from "axios";
import React, { useEffect, useState } from "react";
import * as fnc from "../../commonFunc/CommonFunctions";
import _ from "lodash";

const JoinSubmitQnaFirstModal = (props) => {
  const {
    commersCheckedItems,
    setCommersCheckedItems,
    specialCheckedItems,
    setSpecialCheckedItems,
    onJoinSubmitQnaSecondModal,
    joinCategoryData,
    setJoinCategoryData,
  } = props;

  const [buttonOn, setButtonOn] = useState(true);

  useEffect(() => {
    // console.log(Object.keys(commersCheckedItems.values()).length);
    console.log(_.isEmpty(commersCheckedItems), _.isEmpty(specialCheckedItems));
    if (
      _.isEmpty(commersCheckedItems) == true ||
      _.isEmpty(specialCheckedItems) == true
    ) {
      setButtonOn(false);
    } else {
      setButtonOn(true);
    }
  }, [commersCheckedItems, specialCheckedItems]);

  const obj = { name1: "hello", name2: "hi", name3: "bye" };
  useEffect(() => {
    console.log("obj : ", Object.keys(obj).length);
  }, []);

  //커머스 버튼 색상변경 핸들러
  const onCommersHandler = (data) => {
    let itemSet = new Set(commersCheckedItems);
    if (commersCheckedItems.has(data)) {
      itemSet.delete(data);
      setCommersCheckedItems(itemSet);
    } else {
      itemSet.add(data);
      setCommersCheckedItems(itemSet);
    }
    console.log(
      "커머스 객체 길이 :",
      Object.keys(commersCheckedItems.values()).length
    );
  };

  // 전문분야 버튼 색상변경 핸들러
  const onSpecialHandler = (data) => {
    let itemSet = new Set(specialCheckedItems);
    if (specialCheckedItems.has(data)) {
      itemSet.delete(data);
      setSpecialCheckedItems(itemSet);
    } else {
      itemSet.add(data);
      setSpecialCheckedItems(itemSet);
    }
    // console.log(data, specialCheckedItems.values());
    console.log(
      "전문분야 객체 길이 :",
      Object.keys(specialCheckedItems.values()).length
    );
  };

  const btnActivate = () => {
    return (
      <button
        className="join_member_qna_select_confirm_first_btn_on"
        onClick={onJoinSubmitQnaSecondModal}
      >
        다음으로
      </button>
    );
  };

  const btnDeactivate = () => {
    return (
      <button
        className="join_member_qna_select_confirm_first_btn_off"
        onClick={onJoinSubmitQnaSecondModal}
        disabled
      >
        다음으로
      </button>
    );
  };

  const getJoinCategoryData = () => {
    // const params = new FormData();
    // params.append("command", "ca");
    // params.append("kind", "specialty");
    // axios({
    //   method: "post",
    //   url: "/response/get_info.php",
    //   data: params,
    // })
    //   .then((response) => {
    //     console.log("specialty response :", response.data);
    //     setSpecialtyData(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // const params = {token:};
    // params.append("token", sessionStorage.getItem("token"));
    // params.append("currenturl", location.href);

    // axios({
    //   method: "post",
    //   url: "action/main/osu_category.php",
    //   data: params,
    // })
    //   .then((response) => {
    //     console.log("category response :", response);
    //     setJoinCategoryData(response.data[1]);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    const params = new FormData();
    params.append("currenturl", location.href);
    params.append("token", sessionStorage.getItem("token"));

    fnc.executeQuery({
      url: "action/main/osu_category.php",
      data: params,
      success: (res) => {
        setJoinCategoryData(res);
      },
    });
  };

  useEffect(() => {
    getJoinCategoryData();
  }, []);

  return (
    <>
      <div className="join_member_qna_title_container">
        <div className="join_member_qna_Qtitle">Q.</div>
        <div className="join_member_qna_title">
          운영중인 커머스, 혹은 전문분야는 무엇인가요?
        </div>
      </div>
      <div className="join_member_qna_commers_container">
        <div className="join_member_qna_commers_title">커머스</div>
        <div className="join_member_qna_commers_select_container">
          {joinCategoryData.map((data, idx) => {
            return (
              data.sort === "commerce" && (
                <button
                  className={`join_member_qna_select_btn ${
                    commersCheckedItems.has(data.category_text)
                      ? "join_btn_selected"
                      : ""
                  }`}
                  onClick={() => onCommersHandler(data.category_text)}
                  key={idx}
                >
                  {data.category_text}
                </button>
              )
            );
          })}
        </div>
      </div>
      <div className="join_member_qna_special_container">
        <div className="join_member_qna_special_title">전문분야</div>
        <div className="join_member_qna_special_select_container">
          {joinCategoryData.map((data, idx) => {
            return (
              data.sort === "specialty" && (
                <button
                  className={`join_member_qna_select_btn ${
                    specialCheckedItems.has(data.category_text)
                      ? "join_btn_selected"
                      : ""
                  }`}
                  onClick={() => onSpecialHandler(data.category_text)}
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

export default JoinSubmitQnaFirstModal;
