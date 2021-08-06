import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import defaultUserImg from "../../images/default_user.png";
import backpackImg from "../../images/backpack.png";
import axios from "axios";

const Mypage = () => {
  const history = useHistory();

  const profileAddComponentArray = [
    "프로필 사진 추가하기",
    "소개글 추가하기",
    "경력 추가하기",
    "학력 추가하기",
    "대표 사이트 추가하기",
  ];

  //   const interestComponentArray = ["관심분야1", "관심분야2", "관심분야3"];

  // axios로 받아온 data들 상태관리
  const [userData, setUserData] = useState({
    user_name: "", // 이름
    user_belong: "", // 소속
    user_title: "", // 직함
    user_introduce: "", // 소개글
    user_representation_url: "", // 대표 홈페이지 URL
    user_interesting: [],
  });

  const getUserData = () => {
    const params = new FormData();
    params.append("command", "uinfo");
    params.append("idx", sessionStorage.getItem("user_idx"));
    axios({
      method: "post",
      url: "/response/get_info.php",
      data: params,
    })
      .then((response) => {
        console.log("alldata response :", response.data);
        setUserData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 프로필 사진 추가하기 , 소개글 추가하기 등 추가하기 관련 컴포넌트 Mapping
  const profileAddComponent = profileAddComponentArray.map((data) => {
    return <button className="profile_add_section_button">{data}</button>;
  });

  // 관심분야 컴포넌트 Mapping
  const interestComponent = userData.user_interesting.map((data) => {
    return <span className="mypage_title_tag">{data}</span>;
  });

  const logoutHandler = () => {
    console.log("clicked");
    sessionStorage.removeItem("email");
    history.push("/");
  };

  useEffect(() => {
    getUserData();
  }, []);
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
                        <a className="mypage_title_message_btn title_edit_message_btn">
                          메세지 보기
                        </a>
                      </span>
                      <span className="logout1">
                        <a className="logout2" onClick={logoutHandler}>
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
                  <div className="it">{interestComponent}</div>
                  <div className="mypage_profile_range_container">
                    <div className="profile_range_section">
                      <div className="progress_bar_container">
                        <label for="progress_bar">
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
                      {profileAddComponent}
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
                  className="mypage_profiles_tab_btn my_comment_tab mypage_profiles_tab_btn_active"
                  //   className="active"
                >
                  작성한 코멘트
                </a>
              </li>
              <li className="mypage_profiles_list">
                <a className="mypage_profiles_tab_btn my_port_tab">
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

export default Mypage;
