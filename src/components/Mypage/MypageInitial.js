import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import defaultUserImg from "../../images/default_user.png";
import backpackImg from "../../images/backpack.png";
import axios from "axios";
import ProfileImgAddModal from "./profileImgAddModal";
import IntroductionModal from "./IntroductionModal";
import CareerModal from "./CareerModal";
import AcademicModal from "./AcademicModal";
import SiteModal from "./SiteModal";
import { useDispatch, useSelector } from "react-redux";
import * as refreshActions from "../../modules/refresh";
import * as fnc from "../../commonFunc/CommonFunctions";

const MypageInitial = () => {
  const allRefresh = useSelector((state) => state.refresh.get("allRefresh"));
  const history = useHistory();
  const dispatch = useDispatch();

  const profileAddComponentArray = [
    {
      text: "프로필 사진 추가하기",
      handler: () => {
        profileImgModalHandler();
      },
      modalon: profileImgModalOn,
      link: <ProfileImgAddModal />,
    },
    {
      text: "소개글 추가하기",
      handler: () => {
        introductionModalHandler();
      },
      modalon: introductionModalOn,
      link: <IntroductionModal />,
    },
    {
      text: "경력 추가하기",
      handler: () => {
        careerModalHandler();
      },
      modalon: careerModalOn,
      link: <CareerModal />,
    },
    {
      text: "학력 추가하기",
      handler: () => {
        academicModalHandler();
      },
      modalon: academicModalOn,
      link: <AcademicModal />,
    },
    {
      text: "대표 사이트 추가하기",
      handler: () => {
        siteModalHandler();
      },
      modalon: siteModalOn,
      link: <SiteModal />,
    },
  ];

  // axios로 받아온 data들 상태관리
  const [userData, setUserData] = useState({
    user_name: "", // 이름
    user_belong: "", // 소속
    user_title: "", // 직함
    user_introduce: "", // 소개글
    user_representation_url: "", // 대표 홈페이지 URL
    user_interesting: [],
  });

  //   const getUserData = () => {
  //     const params = new FormData();
  //     params.append("command", "uinfo");
  //     params.append("idx", sessionStorage.getItem("user_idx"));
  //     axios({
  //       method: "post",
  //       url: "/response/get_info.php",
  //       data: params,
  //     })
  //       .then((response) => {
  //         console.log("alldata response :", response.data);
  //         setUserData(response.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };

  const [profileImgModalOn, setProfileImgModalOn] = useState(false); // 프로필 사진 추가하기 Modal 감지 state
  const [introductionModalOn, setIntroductionModalOn] = useState(false); // 소개글 추가하기 Modal 감지 state
  const [careerModalOn, setCareerModalOn] = useState(false); // 경력 추가하기 Modal 감지 state
  const [academicModalOn, setAcademicModalOn] = useState(false); // 학력 추가하기 Modal 감지 state
  const [siteModalOn, setSiteModalOn] = useState(false); // 대표 사이트 추가하기 Modal 감지 state
  const [menuClicked, setMenuClicked] = useState(false); // 메뉴 클릭 감지 state

  const profileImgModalHandler = () => {
    setProfileImgModalOn(!profileImgModalOn);
    console.log("profileImgModalOn:", profileImgModalOn);
    console.log("프로필clicked");
  };
  const introductionModalHandler = () => {
    setIntroductionModalOn(!introductionModalOn);
    console.log("introductionModalOn:", introductionModalOn);
    console.log("소개글clicked");
  };
  const careerModalHandler = () => {
    setCareerModalOn("careerModalOn:", !careerModalOn);
    console.log("경력clicked");
  };
  const academicModalHandler = () => {
    setAcademicModalOn("academicModalOn:", !academicModalOn);
    console.log("학력clicked");
  };
  const siteModalHandler = () => {
    setSiteModalOn("siteModalOn:", !siteModalOn);
    console.log("대표사이트clicked");
  };

  // 작성한 코멘트 메뉴 핸들러
  const commentMenuHandler = () => {
    setMenuClicked(false);
  };

  // 포트폴리오 메뉴 핸들러
  const portfolioMenuHandler = () => {
    setMenuClicked(true);
  };

  // axios 와 연동해 로그아웃
  const getLogOutData = () => {
    fnc.executeQuery({
      url: "action/member/logout.php",
      data: {},
      success: (res) => {
        sessionStorage.removeItem("token");
        dispatch(refreshActions.setAllRefresh(allRefresh + 1));
        history.push("/");
      },
    });
  };

  //   useEffect(() => {
  //     getUserData();
  //   }, []);
  return (
    <div className="wap mypage_wap">
      <div className="mypage_content">
        <div className="mypage_view">
          <div className="mypage_profiles_cove">
            <div className="mypage_profiles">
              <section className="mypage_title">
                <h3 className="hidden">view title</h3>
                <p className="mypage_title_img_cove">
                  <img
                    className="mypage_title_img"
                    src={defaultUserImg}
                    alt="default_user_big.png"
                  />
                </p>
                <div className="title_right">
                  <div className="ti">
                    <ul className="nick_dept">
                      <li className="nick_item">
                        <a className="nick">
                          {userData.user_name === ""
                            ? "이름없음"
                            : userData.user_name}
                        </a>
                      </li>
                      <li className="dept_item">
                        <a className="dept">
                          {userData.user_belong === ""
                            ? "소속없음"
                            : userData.user_belong}
                        </a>
                      </li>
                    </ul>
                    <div className="edit_message">
                      <span className="mypage_title_edit">
                        <Link
                          to="/MypageEdit"
                          className="mypage_title_edit_btn title_edit_message_btn"
                        >
                          EDIT
                        </Link>
                      </span>
                      <span className="mypage_title_message">
                        <Link
                          to="/Message"
                          className="mypage_title_message_btn title_edit_message_btn"
                        >
                          메세지 보기
                        </Link>
                      </span>
                      <span className="logout1">
                        <a className="logout2" onClick={getLogOutData}>
                          로그아웃
                        </a>
                      </span>
                    </div>
                    <div className="mypage_share">
                      <a className="mypage_share_btn">
                        <img
                          src="src/images/icon_share.png"
                          alt="icon_share.png"
                        />
                        <span>
                          <img
                            className="share_active"
                            src="src/images/message_back.png"
                            alt="message_back.png"
                          />
                        </span>
                      </a>
                      <div className="mypage_share_box_cove">
                        <ul className="mypage_share_box">
                          <li className="copylink">링크 복사</li>
                          <li className="kakaotalk_share">카카오톡 공유</li>
                          <li className="facebook_share">페이스북 공유</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="it">
                    {userData.user_interesting.map((data) => {
                      return <span className="mypage_title_tag">{data}</span>;
                    })}
                  </div>
                  <div className="mypage_profile_range_container">
                    <div className="profile_range_section">
                      <div className="progress_bar_container">
                        <label htmlFor="progress_bar">
                          프로필 작성 단계
                          <span className="progress_bar_num">0/5</span>
                        </label>
                      </div>
                      <div>
                        <progress
                          id="progress_bar"
                          max="5"
                          value="0"
                        ></progress>
                      </div>
                    </div>
                    <div className="profile_add_section">
                      {profileAddComponentArray.map((data, idx) => {
                        return (
                          <>
                            <button
                              className="profile_add_section_button"
                              onClick={data.handler}
                            >
                              {data.text}
                            </button>
                            {/* {data.modalon ? <div>hi</div> : ""}
                            {profileImgModalOn ? <div>hi</div> : ""} */}
                          </>
                        );
                      })}
                      {profileImgModalOn ? <ProfileImgAddModal /> : ""}
                      {introductionModalOn ? <IntroductionModal /> : ""}
                      {careerModalOn ? <CareerModal /> : ""}
                      {academicModalOn ? <AcademicModal /> : ""}
                      {siteModalOn ? <SiteModal /> : ""}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="mypage_profiles_tab_menu_cove">
            <ul className="mypage_profiles_tab_cove">
              <li className="mypage_profiles_list my_comment_tab">
                <a
                  className={`mypage_profiles_tab_btn my_comment_tab ${
                    menuClicked ? "" : "mypage_profiles_tab_btn_active"
                  }`}
                  onClick={commentMenuHandler}
                >
                  작성한 코멘트
                </a>
              </li>
              <li className="mypage_profiles_list">
                <a
                  className={`mypage_profiles_tab_btn my_comment_tab ${
                    menuClicked ? "mypage_profiles_tab_btn_active" : ""
                  }`}
                  onClick={portfolioMenuHandler}
                >
                  포트폴리오
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MypageInitial;
