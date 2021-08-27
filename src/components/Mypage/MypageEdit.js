import axios from "axios";
import React, { useEffect, useState } from "react";
import defaultUserImg from "../../images/default_user.png";
import editTagImg from "../../images/edit_tag_cancel.png";
import cameraImg from "../../images/camera.png";
import * as fnc from "../../commonFunc/CommonFunctions";
import { join } from "lodash";
const MypageEdit = () => {
  const [userData, setUserData] = useState([]); // 유저의 모든 정보
  const [inputData, setInputData] = useState({
    name: "",
    belong: "",
    rank: "",
    introduce: "",
    url: "",
  }); // 이름, 소속, 직함, 소개글, 대표 홈페이지 url input 제어
  const [interestData, setInterestData] = useState([]); // 관심분야 all data
  //   const [userInterestData, setUserInterestData] = useState([]); // 관심분야
  const [interestSelectItemRenderList, setInterestSelectItemRenderList] =
    useState(new Set()); // 관심분야 선택하기에서 선택한 것들을 담는 객체
  const [careerItem, setCareerItem] = useState([]); // 경력사항
  const [careerItemList, setCareerItemList] = useState([]); // 경력사항을 담는 배열
  const [schoolItem, setSchoolItem] = useState(""); //학교
  const [majorItem, setMajorItem] = useState(""); // 전공
  const [educationItemList, setEducationItemList] = useState([]); //학력사항을 담는 배열
  const [userImg, setUserImg] = useState(null); // 유저의 이미지
  const [fileImg, setFileImg] = useState(null); // 파일 업로드 할 이미지

  const onChangeImg = (e) => {
    if (e.target.files[0]) {
      //   console.log("picture", e.target.files[0]);
      setFileImg(e.target.files[0]);
      const reader = new FileReader();
      reader.onload = function (e) {
        setUserImg(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  //input 값 감지 함수
  const onChangeInputHandler = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  // 관심분야 선택 클릭 함수 (항목 추가)
  const onInterestSelectClick = (data) => {
    let interestAddSet = new Set(interestSelectItemRenderList);
    interestAddSet.add(data);
    setInterestSelectItemRenderList(interestAddSet);
  };

  // 관심분야 -> 추가한 항목 삭제 기능
  const onInterestCancelClick = (data) => {
    let interestSubSet = new Set(interestSelectItemRenderList);
    interestSubSet.delete(data);
    setInterestSelectItemRenderList(interestSubSet);
  };

  // 경력추가 input 값 감지 함수
  const careerOnChangeHandler = (e) => {
    setCareerItem(e.target.value);
  };

  // 경력추가 버튼 기능
  const onCareerSubmit = () => {
    if (careerItem == "") {
      return;
    } else if (careerItem == careerItemList.includes(careerItem)) {
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

  // 학교 input 변경 값 감지 함수
  const educationOnChangeHandler = (e) => {
    setSchoolItem(e.target.value);
  };

  // 학력 추가 버튼 기능
  const onEducationSubmit = () => {
    if (schoolItem == "" || majorItem == "") {
      return;
    } else {
      const concatItem = schoolItem.concat("-", majorItem);
      setEducationItemList(educationItemList.concat(concatItem));
    }
    setSchoolItem("");
    setMajorItem("");
  };

  // 학교 -> 추가한 항목 삭제버튼 기능
  const onEducationCancelClick = (item) => {
    const checkNewArray = educationItemList.filter((el) => el !== item);
    setEducationItemList(checkNewArray);
  };

  // 전공 input 변경 값 감지 함수
  const majorOnChangeHandler = (e) => {
    setMajorItem(e.target.value);
  };

  const onSubmit = () => {
    sendData();
  };

  const getData = () => {
    fnc.executeQuery({
      url: "action/member/edit.php",
      data: {},
      success: (res) => {
        setInterestData(res.interesting);
        setInterestSelectItemRenderList(res.member_info.interesting);
        setCareerItem(res.member_info.career);
        setSchoolItem(res.member_info.edu.nd);
        setMajorItem(res.member_info.edu.st);
        setUserImg(res.member_info.img_url);
        setInputData({
          name: res.member_info.name,
          belong: res.member_info.belong,
          rank: res.member_info.ranks,
          introduce: res.member_info.introduce,
          url: res.member_info.url,
        });
      },
    });
  };

  const editData = {
    is_update: true,
    name: inputData.name,
    belong: inputData.belong,
    ranks: inputData.rank,
    introduce: inputData.introduce,
    url: inputData.url,
    interesting: [...interestSelectItemRenderList],
    career: careerItemList,
    education: educationItemList,
  };

  const json = btoa(encodeURIComponent(JSON.stringify(editData)));

  const sendData = () => {
    fnc.executeQuery({
      url: "action/member/edit.php",
      data: {
        json,
        file: fileImg,
      },
      success: (res) => {},
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="mypage_edit_wap">
      <div className="mypage_profile_component">
        <div className="mypage_edit_profile_box">
          <img src={userImg} id="preview" />
          <p>
            <input
              type="file"
              id="getfile"
              accept="image/*"
              style={{ display: "none" }}
              onChange={onChangeImg}
            />
            <label htmlFor="getfile">
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
                value={inputData.name == "N" ? "" : inputData.name}
                onChange={onChangeInputHandler}
                name="name"
              />
            </div>
          </div>
          <div className="mypage_belongTitle_container">
            <div className="mypage_belong_container">
              <h2 className="mypage_input_title">소속</h2>
              <div>
                <input
                  className="mypage_input"
                  value={inputData.belong == "N" ? "" : inputData.belong}
                  onChange={onChangeInputHandler}
                  name="belong"
                />
              </div>
            </div>
            <div className="mypage_subtitle_container">
              <h2 className="mypage_input_title">직함</h2>
              <div>
                <input
                  className="mypage_input"
                  value={inputData.rank == "N" ? "" : inputData.rank}
                  onChange={onChangeInputHandler}
                  name="rank"
                />
              </div>
            </div>
          </div>
          <div className="mypage_introduceWrite_container">
            <h2 className="mypage_input_title">소개글</h2>
            <div>
              <input
                className="mypage_input"
                value={inputData.introduce == "N" ? "" : inputData.introduce}
                onChange={onChangeInputHandler}
                name="introduce"
              />
            </div>
          </div>
          <div className="mypage_interest_container">
            <div className="mypage_interest_view">
              <h2 className="mypage_input_title">관심분야</h2>
              {[...interestSelectItemRenderList].map((data, idx) => {
                return (
                  <div className="mypage_input_interest" key={idx}>
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
            </div>
            <div className="mypage_interest_select">
              <h2 className="mypage_input_title">관심분야 선택하기</h2>
              <ul className="mypage_edit_select_interest_list_container">
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
            {careerItemList.map((item, idx) => {
              return (
                <div className="mypage_input_add_button_component" key={idx}>
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
            <h2 className="mypage_input_title">학교</h2>
            <input
              className="mypage_input_add"
              placeholder="OO학교"
              value={schoolItem}
              onChange={educationOnChangeHandler}
            />
            <h2 className="mypage_input_title">전공</h2>
            <input
              className="mypage_input_add"
              placeholder="OO전공"
              value={majorItem}
              onChange={majorOnChangeHandler}
            />
            {educationItemList.map((item, idx) => {
              return (
                <div className="mypage_input_add_button_component" key={idx}>
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
                value={inputData.url == "N" ? "" : inputData.url}
                onChange={onChangeInputHandler}
                name="url"
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
              onClick={onSubmit}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default MypageEdit;
