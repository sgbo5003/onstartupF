import React from "react";
import defaultUserImg from "../../images/default_user.png";
import likeIcon from "../../images/icon_like.png";
import likeOnIcon from "../../images/icon_like_on.png";
import commentIcon from "../../images/icon_comment.png";
import shareIcon from "../../images/icon_share.png";
import messageBackIcon from "../../images/message_back.png";
import saveIcon from "../../images/icon_sav.png";
import saveOnIcon from "../../images/icon_sav_on.png";

const Content = (props) => {
  const {
    belong,
    boardImg,
    content,
    likeNum,
    reviewNum,
    shareNum,
    saveNum,
    name,
    profileImg,
    writeTime,
  } = props;
  return (
    <div className="home_view_cove">
      <div className="home_view_content_cove">
        <div className="home_tag_cove">
          <section className="home_title">
            <h2 className="hidden">view title</h2>
            <p>
              <a href="user_board.php">
                <img src={profileImg} alt="default_user.png" />
              </a>
            </p>
            <div className="home_title_box">
              <ul className="home_ti">
                <li>
                  <a>title</a>
                </li>
                <li>
                  <a>{belong}</a>
                </li>
              </ul>
              <ul className="home_it">
                <li>{writeTime}</li>
              </ul>
            </div>
          </section>
          <section className="home_title_info">
            <h2 className="hidden">view info</h2>
            <div className="home_notice_info_top">
              <p>
                <a>
                  <img src={boardImg} alt="gallery.png" />
                </a>
              </p>
            </div>
            <div className="home_notice_info_middle">
              <h2>Title Text</h2>
              <p>{content}</p>
            </div>
          </section>
          <section className="home_notice_info_lower">
            <h2 className="hidden">view lower</h2>
            <div>
              <ul className="icon_left">
                <li className="ic_click">
                  <a>
                    <img src={likeIcon} alt="icon_like" className="nor_img" />
                    <img
                      src={likeOnIcon}
                      alt="icon_like"
                      className="active_img"
                    />
                    <span>{likeNum}</span>
                  </a>
                </li>
                <li className="ic_click">
                  <a>
                    <img src={commentIcon} alt="icon_comment" />
                    <span>{reviewNum}</span>
                  </a>
                </li>
              </ul>
              <ul className="icon_right">
                <li className="ic_click">
                  <a className="share_btn">
                    <img src={shareIcon} alt="icon_share" className="nor_img" />
                    <img
                      src={messageBackIcon}
                      alt="message_back"
                      className="active_img"
                    />
                  </a>
                  <a>
                    ??????<span>{shareNum}</span>
                  </a>
                </li>
                <li className="ic_click">
                  <a>
                    <img src={saveIcon} alt="icon_sav" className="nor_img" />
                    <img
                      src={saveOnIcon}
                      alt="icon_sav"
                      className="active_img"
                    />
                  </a>
                  <a>
                    ??????<span>{saveNum}</span>
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <div className="share_cove">
            <ul className="share_box">
              <li className="copylink">?????? ??????</li>
              <li className="kakaotalk_share">???????????? ??????</li>
              <li className="facebook_share">???????????? ??????</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
