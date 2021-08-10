import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import defaultUserImg from "../images/default_user.png";
import commentIcon from "../images/icon_comment.png";
import likeIcon from "../images/icon_like.png";
import likeOnIcon from "../images/icon_like_on.png";
import shareIcon from "../images/icon_share.png";
import messageBackIcon from "../images/message_back.png";
import saveIcon from "../images/icon_sav.png";
import saveOnIcon from "../images/icon_sav_on.png";
const MiddleCategory = () => {
  // const sort = useParams
  // useEffect((
  //     const repsone = await axios(`/getCommersInfo/${sort}`)

  // ))
  const renderComponents = () => {
    return (
      <div className="middle_category_content_home_tag_cove">
        <section className="home_title">
          <h2 className="hidden">view title</h2>
          <p>
            <a href="user_board.php">
              <img src={defaultUserImg} alt="default_user.png" />
            </a>
          </p>
          <div>
            <ul className="home_ti">
              <li>
                <a href="#">이름</a>
              </li>
              <li>
                <a href="#">소속</a>
              </li>
            </ul>
            <ul className="home_it">
              <li>2021-08-03</li>
            </ul>
          </div>
        </section>
        <section className="home_title_info">
          <h2 className="hidden">view info</h2>
          <div className="home_notice_info_top">
            <p>
              <a href="#">
                <img src={defaultUserImg} alt="gallery.png" />
              </a>
            </p>
          </div>
          <div className="home_notice_info_middle">
            <h2>Title Text</h2>
            <p>댓글</p>
          </div>
        </section>
        <section className="home_notice_info_lower">
          <h2 className="hidden">view lower</h2>
          <div>
            <ul className="icon_left">
              <li className="ic_click">
                <a href="#">
                  <img src={likeIcon} alt="icon_like" className="nor_img" />
                  <img
                    src={likeOnIcon}
                    alt="icon_like"
                    className="active_img"
                  />
                  <span>2</span>
                </a>
              </li>
              <li className="ic_click">
                <a href="#">
                  <img src={commentIcon} alt="icon_comment" />
                  <span>3</span>
                </a>
              </li>
            </ul>
            <ul className="icon_right">
              <li className="ic_click">
                <a className="share_btn" href="#">
                  <img src={shareIcon} alt="icon_share" className="nor_img" />
                  <img
                    src={messageBackIcon}
                    alt="message_back"
                    className="active_img"
                  />
                </a>
                <a href="#">
                  공유<span>4</span>
                </a>
              </li>
              <li className="ic_click">
                <a href="#">
                  <img src={saveIcon} alt="icon_sav" className="nor_img" />
                  <img src={saveOnIcon} alt="icon_sav" className="active_img" />
                </a>
                <a href="#">
                  저장<span>5</span>
                </a>
              </li>
            </ul>
          </div>
        </section>
        <div className="share_cove">
          <ul className="share_box">
            <li className="copylink">링크 복사</li>
            <li className="kakaotalk_share">카카오톡 공유</li>
            <li className="facebook_share">페이스북 공유</li>
          </ul>
        </div>
      </div>
    );
  };

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    // middle_category_
    <>
      <Sidebar />
      <div className="middle_category_content">
        <div className="middle_category_title_container">
          <p className="middle_category_title_main">커머스 정보</p>
          <p className="middle_category_title_sub">중분류</p>
        </div>
        <div className="middle_category_content_container">
          {arr.map((data) => {
            return renderComponents();
          })}
        </div>
      </div>
    </>
  );
};

export default MiddleCategory;
