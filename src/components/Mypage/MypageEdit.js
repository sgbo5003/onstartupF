import axios from "axios";
import React, { useEffect, useState } from "react";
import defaultUserImg from "../../images/default_user.png";
import editTagImg from "../../images/edit_tag_cancel.png";
import cameraImg from "../../images/camera.png";
import * as fnc from "../../commonFunc/CommonFunctions";
const MypageEdit = (props) => {
  const [userData, setUserData] = useState([]); // 유저의 모든 정보
  const [interestData, setInterestData] = useState([]); // 관심분야 all data
  //   const [userInterestData, setUserInterestData] = useState([]); // 관심분야
  const [interestSelectItemRenderList, setInterestSelectItemRenderList] =
    useState(new Set()); // 관심분야 선택하기에서 선택한 것들을 담는 객체
  const [careerItem, setCareerItem] = useState([]); // 경력사항
  const [careerItemList, setCareerItemList] = useState([]); // 경력사항을 담는 배열
  const [educationItem, setEducationItem] = useState(""); //학력사항
  const [educationItemList, setEducationItemList] = useState([]); //학력사항을 담는 배열
  const [userImg, setUserImg] = useState(null); // 유저의 이미지
  const [fileImg, setFileImg] = useState(null); // 파일 업로드 할 이미지

  const onChangeImg = (e) => {
    if (e.target.files[0]) {
      console.log("picture", e.target.files[0]);
      setUserImg(e.target.files[0]);
      const reader = new FileReader();
      reader.onload = function (e) {
        setUserImg(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  console.log(userImg);

  //input 값 감지 함수
  const onChangeInputHandler = (e) => {
    setUserData(e.target.value);
    console.log(e.target.value);
  };

  // 관심분야 선택 클릭 함수 (항목 추가)
  const onInterestSelectClick = (data) => {
    let interestAddSet = new Set(interestSelectItemRenderList);
    interestAddSet.add(data);
    setInterestSelectItemRenderList(interestAddSet);
    console.log(interestSelectItemRenderList.values());
  };

  // 관심분야 -> 추가한 항목 삭제 기능
  const onInterestCancelClick = (data) => {
    let interestSubSet = new Set(interestSelectItemRenderList);
    interestSubSet.delete(data);
    setInterestSelectItemRenderList(interestSubSet);
  };

  // 경력추가 input 값 감지 함수
  const careerOnChangeHandler = (e) => {
    console.log(e.target.value);
    setCareerItem(e.target.value);
  };

  // 경력추가 버튼 기능
  const onCareerSubmit = () => {
    if (careerItem == "") {
      return;
    } else {
      setCareerItemList(careerItemList.concat(careerItem));
    }
    setCareerItem("");
  };

  // 경력사항 -> 추가한 항목 삭제버튼 기능
  const onCareerCancelClick = (item) => {
    const checkNewArray = careerItemList.filter((el) => el !== item);
    setCareerItemList(checkNewArray);
  };

  // 학력사항 input 변경 값 감지 함수
  const educationOnChangeHandler = (e) => {
    console.log(e.target.value);
    setEducationItem(e.target.value);
  };

  // 학력추가 버튼 기능
  const onEducationSubmit = () => {
    if (educationItem === "") {
      return;
    } else {
      setEducationItemList(educationItemList.concat(educationItem));
    }
    setEducationItem("");
  };

  // 학력사항 -> 추가한 항목 삭제버튼 기능
  const onEducationCancelClick = (item) => {
    const checkNewArray = educationItemList.filter((el) => el !== item);
    setEducationItemList(checkNewArray);
  };

  const getData = () => {
    fnc.executeQuery({
      url: "action/member/edit.php",
      data: {},
      success: (res) => {
        setUserData(res.member_info);
        setInterestData(res.interesting);
        setInterestSelectItemRenderList(res.member_info.interesting);
        setCareerItem(res.member_info.career);
        setEducationItem(res.member_info.edu);
        setUserImg(res.member_info.img_url);
      },
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="mypage_edit_wap">
      <div className="mypage_profile_component">
        <div className="mypage_edit_profile_box">
          <img
            src={userImg}
            id="preview"
            // style={{ width: "100%", height: "100%" }}
          />
          <p
          // style={{ position: "absolute", top: 81, left: 61 }}
          >
            <input
              type="file"
              id="getfile"
              accept="image/*"
              style={{ display: "none" }}
              onChange={onChangeImg}
            />
            <label for="getfile">
              <img src="src/images/camera.png" alt="camera.png" />
            </label>
          </p>
        </div>
      </div>
      <div className="mypage_edit_content">
        <form className="mypage_edit_view">
          <div className="mypage_name_container">
            <h2 className="mypage_input_title">이름</h2>
            <div>
              <input
                className="mypage_input"
                value={userData.name}
                onChange={onChangeInputHandler}
              />
            </div>
          </div>
          <div className="mypage_belongTitle_container">
            <div className="mypage_belong_container">
              <h2 className="mypage_input_title">소속</h2>
              <div>
                <input
                  className="mypage_input"
                  value={userData.belong == "N" ? "" : userData.belong}
                  onChange={onChangeInputHandler}
                />
              </div>
            </div>
            <div className="mypage_subtitle_container">
              <h2 className="mypage_input_title">직함</h2>
              <div>
                <input
                  className="mypage_input"
                  value={userData.ranks == "N" ? "" : userData.ranks}
                  onChange={onChangeInputHandler}
                />
              </div>
            </div>
          </div>
          <div className="mypage_introduceWrite_container">
            <h2 className="mypage_input_title">소개글</h2>
            <div>
              <input
                className="mypage_input"
                value={userData.introduce == "N" ? "" : userData.introduce}
                onChange={onChangeInputHandler}
              />
            </div>
          </div>
          <div className="mypage_interest_container">
            <div className="mypage_interest_view">
              <h2 className="mypage_input_title">관심분야</h2>
              {[...interestSelectItemRenderList].map((data) => {
                return (
                  <div className="mypage_input_interest">
                    {data}
                    <a
                      className="mypage_edit_tag_cancel_img_box"
                      onClick={() => onInterestCancelClick(data)}
                    >
                      <img src={editTagImg} alt="edit_tag_cancel" />
                    </a>
                  </div>
                );
              })}
              {/* {userData.interesting.map((data) => {
                return (
                  <div className="mypage_input_interest">
                    {data}
                    <a
                      className="mypage_edit_tag_cancel_img_box"
                      //   onClick={() => onInterestCancelClick(item)}
                    >
                      <img src={editTagImg} alt="edit_tag_cancel" />
                    </a>
                  </div>
                );
              })} */}
              {/* {[...interestSelectItemRenderList].map((data) => {
                return (
                  <div className="mypage_input_interest">
                    {data}
                    <a
                      className="mypage_edit_tag_cancel_img_box"
                      onClick={() => onInterestCancelClick(data)}
                    >
                      <img src={editTagImg} alt="edit_tag_cancel" />
                    </a>
                  </div>
                );
              })} */}
            </div>
            <div className="mypage_interest_select">
              <h2 className="mypage_input_title">관심분야 선택하기</h2>
              <ul className="mypage_edit_select_interest_list_container">
                {/* {interestSelectItemList.category_text.map((data) => {
                  return (
                    <li
                      className="mypage_edit_select_interest_list"
                      onClick={() => onInterestSelectClick(data)}
                    >
                      <a className="wirte_select_list">{data}</a>
                    </li>
                  );
                })} */}
                {interestData.map((data, idx) => {
                  return (
                    <li
                      className="mypage_edit_select_interest_list"
                      onClick={() => onInterestSelectClick(data)}
                      key={idx}
                    >
                      <a className="wirte_select_list">{data}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="mypage_career_container">
            <h2 className="mypage_input_title">경력사항</h2>
            <input
              type="text"
              className="mypage_input_add"
              placeholder="회사"
              value={careerItem}
              onChange={careerOnChangeHandler}
            />
            {careerItemList.map((item) => {
              return (
                <div className="mypage_input_add_button_component">
                  {item}
                  <a
                    className="mypage_edit_tag_cancel_img_box"
                    onClick={() => onCareerCancelClick(item)}
                  >
                    <img src={editTagImg} alt="edit_tag_cancel" />
                  </a>
                </div>
              );
            })}
            <p className="mypage_input_add_btn">
              <a className="mypage_input_add_btn_a" onClick={onCareerSubmit}>
                경력추가 +
              </a>
            </p>
          </div>
          <div className="mypage_education_container">
            <h2 className="mypage_input_title">학력</h2>
            <input
              className="mypage_input_add"
              placeholder="OO학교 OO전공"
              value={educationItem}
              onChange={educationOnChangeHandler}
            />
            {educationItemList.map((item) => {
              return (
                <div className="mypage_input_add_button_component">
                  {item}
                  <a
                    className="mypage_edit_tag_cancel_img_box"
                    onClick={() => onEducationCancelClick(item)}
                  >
                    <img src={editTagImg} alt="edit_tag_cancel" />
                  </a>
                </div>
              );
            })}
            <p className="mypage_input_add_btn">
              <a className="mypage_input_add_btn_a" onClick={onEducationSubmit}>
                학력추가 +
              </a>
            </p>
          </div>
          <div className="mypage_hompageUrl_container">
            <h2 className="mypage_input_title">대표 홈페이지 URL</h2>
            <div>
              <input
                className="mypage_input"
                value={userData.url == "N" ? "" : userData.url}
                onChange={onChangeInputHandler}
              />
            </div>
          </div>
          <div className="mypage_button_container">
            <input
              className="mypage_submit_button_off"
              type="button"
              value="취소"
            />
            <input
              className="mypage_submit_button_on"
              type="button"
              value="완료"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default MypageEdit;
