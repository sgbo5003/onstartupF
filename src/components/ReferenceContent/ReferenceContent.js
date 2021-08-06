import React from "react";
import Sidebar from "../Sidebar";
import defaultUserImg from "../../images/default_user.png";
import commentIcon from "../../images/icon_comment.png";
import likeIcon from "../../images/icon_like.png";
import likeOnIcon from "../../images/icon_like_on.png";
import shareIcon from "../../images/icon_share.png";
import messageBackIcon from "../../images/message_back.png";
import saveIcon from "../../images/icon_sav.png";
import saveOnIcon from "../../images/icon_sav_on.png";
import imgExample1 from "../../images/port_gallery4.png";
import ContextMenuIcon from "../../images/Context_menu_icon1.png";

const ReferenceContent = (props) => {
  const { coinbox, onProductClicked } = props;
  return (
    <div className="reference_content_home_tag_cove" onClick={onProductClicked}>
      <div className="reference_content_img_container">
        <img className="reference_content_img" src={imgExample1} />
      </div>
      <div className="reference_content_content_container">
        <div className="reference_content_content_title_container">
          <p>Title</p>
          <p>Text</p>
        </div>
        <div className="reference_content_content_middle_container">
          소제목 Lorem isupm dolor sit amet
        </div>
        <div className="reference_content_content_bottom_container">
          <p>리뷰 12</p>
          <div className={coinbox}>
            <img src={ContextMenuIcon} />
            <span>00 코인</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferenceContent;
