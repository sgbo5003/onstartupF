import React, { useState } from "react";
import { Link } from "react-router-dom";
import tailImg from "../images/tail.png";

const Qmenu = (props) => {
  return (
    <div className={props.class}>
      {/* <div className={props.class} ref={props.outside}> */}
      <span className={props.tail}>
        <img className="tail_img" src={tailImg} alt="tail.png" />
      </span>
      <p className="Qmenu_menu_cove">
        <Link to="/AccountManagement" className="Qmenu_menu">
          계정관리
        </Link>
      </p>
      <p className="Qmenu_menu_cove">
        <Link to="/ChangePassword" className="Qmenu_menu">
          비밀번호 변경
        </Link>
      </p>
      <p className="Qmenu_menu_cove">
        <Link to="/Inquiry" className="Qmenu_menu">
          문의하기
        </Link>
      </p>
      <p className="Qmenu_menu_cove">
        <Link to="/Notice" className="Qmenu_menu">
          공지사항
        </Link>
      </p>
    </div>
  );
};

export default Qmenu;
