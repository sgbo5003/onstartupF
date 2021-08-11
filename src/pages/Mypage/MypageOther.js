import React from "react";
import defaultUserImg from "../../images/default_user.png";

import { useState } from "react";
import MypageComment from "./MypageComment";
import MypagePortfolio from "./MypagePortfolio";
import { Link } from "react-router-dom";
const MypageOther = () => {
  // 메뉴 클릭 감지 state
  const [menuClicked, setMenuClicked] = useState(false);

  // 메뉴 핸들러
  const MenuHandler = () => {
    setMenuClicked(!menuClicked);
  };
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
                        <a className="nick">닉네임</a>
                      </li>
                      <li className="dept_item">
                        <a className="dept">소속</a>
                      </li>
                    </ul>
                    <div className="edit_message">
                      <span className="mypage_title_edit">
                        <Link
                          to="/Message"
                          className="mypage_title_edit_btn title_edit_message_btn"
                        >
                          협업/문의하기
                        </Link>
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
                    <span className="mypage_title_tag">관심분야1</span>
                    <span className="mypage_title_tag">관심분야2</span>
                    <span className="mypage_title_tag">관심분야3</span>
                  </div>
                </div>
              </section>
              <div className="mypage_phrase mypage_lower">
                <p className="mypage_small_title">
                  소개글 내용 텍스트 Lorem ipsum dolor sit amet, consetetur
                  sadipscing elitr, sed diam nonumy eirmod
                </p>
                <div className="career_area first_career_area">
                  <div className="career_title">
                    <p className="career_title_name">경력사항</p>
                    <span className="career_title_img_cove">
                      <img
                        className="career_title_img"
                        src="src/images/backpack.png"
                        alt="backpack.png"
                      />
                    </span>
                  </div>
                  <div className="career_list">
                    <span className="career_item">
                      Lorem ipsum dolor sit amet
                    </span>
                    <span className="career_item">sed diam nonumy eirmod</span>
                    <span className="career_item">
                      dolore magna aliquyam erat, sed
                    </span>
                    <span className="career_item">
                      sed diam nonumy eirmod te
                    </span>
                    <span className="career_item">
                      dolore magna aliquyam erat,
                    </span>
                  </div>
                </div>
                <div className="career_area">
                  <div className="career_title">
                    <p className="career_title_name education">학력</p>
                    <span className="career_title_img_cove">
                      <img
                        className="career_title_img"
                        src="src/images/backpack.png"
                        alt="backpack.png"
                      />
                    </span>
                  </div>
                  <div className="career_list education">
                    <span className="career_item">
                      Lorem ipsum dolor sit amet
                    </span>
                    <span className="career_item">sed diam nonumy eirmod</span>
                    <span className="career_item">
                      dolore magna aliquyam erat, sed
                    </span>
                    <span className="career_item">
                      sed diam nonumy eirmod te
                    </span>
                    <span className="career_item">
                      dolore magna aliquyam erat,
                    </span>
                  </div>
                </div>
                <div className="mypage_homeurl">
                  <p>대표 홈페이지 URL</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mypage_profiles_tab_menu_cove">
            <ul className="mypage_profiles_tab_cove">
              <li className="mypage_profiles_list my_comment_tab">
                <a
                  className={`mypage_profiles_tab_btn my_comment_tab ${
                    menuClicked ? "" : "mypage_profiles_tab_btn_active"
                  }`}
                  onClick={MenuHandler}
                >
                  작성한 코멘트
                </a>
              </li>
              <li className="mypage_profiles_list">
                <a
                  className={`mypage_profiles_tab_btn my_comment_tab ${
                    menuClicked ? "mypage_profiles_tab_btn_active" : ""
                  }`}
                  onClick={MenuHandler}
                >
                  포트폴리오
                </a>
              </li>
            </ul>
          </div>
          <div className="mypage_profiles_view_cove">
            {/* 작성한 코멘트 영역 */}
            <div className="mypage_other_comment_view_cove">
              {menuClicked ? <MypagePortfolio /> : <MypageComment />}
            </div>
            {/*작성한 코멘트 영역 */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MypageOther;
