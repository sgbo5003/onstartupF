import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import headerLogoImg from "../images/header_logo.png";
import QmenuIconImg from "../images/Qmenu_icon1.png";
import QmenuIcon2Img from "../images/Qmenu_icon2.png";
import QmenuIcon3Img from "../images/Qmenu_icon3.png";
import messageActiveImg from "../images/message_active.png";

import Qmenu from "./Qmenu";
import Search from "./Search";

const Header = (props) => {
  const { isDropClick, setIsDropClick } = props;
  // const outside = useRef();
  const onDropClicked = () => {
    setIsDropClick(!isDropClick);
  };

  return (
    <header>
      <div className="header_area_left">
        <h1 className="logo_area">
          <Link to="/">
            <img
              className="header_logo"
              src={headerLogoImg}
              alt="header_logo.png"
            />
          </Link>
        </h1>
        <div className="coar_area">
          <p>
            <Link to="/Community">커뮤니티</Link>
          </p>
          <p>
            <Link to="/Reference">자료실</Link>
          </p>
        </div>
      </div>
      <div className="header_area_right">
        {/* 설정 아이콘 */}
        {props.isLoginTrue}
        <div className="Qmenu_area">
          <p className="Qmenu_list">
            <div className="Qmenu_item_cove Qmenu1" onClick={onDropClicked}>
              <img
                className="Qmenu_item"
                src={QmenuIconImg}
                alt="Qmenu_icon1.png"
              />
            </div>
          </p>
          {isDropClick ? (
            <Qmenu class="Qmenu_bar_on" tail="tail_on" />
          ) : (
            // <Qmenu class="Qmenu_bar_on" tail="tail_on" ref={outside} />
            <Qmenu class="Qmenu_bar_off" tail="tail_off" />
          )}
          {/*알림 아이콘*/}
          <p className="Qmenu_list">
            <a className="Qmenu_item_cove Qmenu2">
              <img
                className="Qmenu_item Qmenu_padding"
                src={QmenuIcon2Img}
                alt="Qmenu_icon2.png"
              />
            </a>
            <a className="message_active_cove">
              <img
                className="message_active"
                src={messageActiveImg}
                alt="message_active"
              />
            </a>
          </p>
          {/* <div className="Qmenu_bar2" id="alram_cove">
              <span className="tail" id="alram_tail">
                <img
                  className="tail_img"
                  src="../../src/images/tail.png"
                  alt="tail.png"
                />
              </span>
              <div className="alram_message_cove"></div>
            </div> */}
          {/* 글쓰기 아이콘 */}
          <p className="Qmenu_list">
            <Link to="/Write" className="Qmenu_item_cove" href="write.php">
              <img
                className="Qmenu_item"
                src={QmenuIcon3Img}
                alt="Qmenu_icon3.png"
              />
            </Link>
          </p>
        </div>
      </div>
      <div className="header_area_middle">
        <Search />
      </div>
    </header>
  );
};

export default Header;
