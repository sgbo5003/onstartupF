import React, { useState } from "react";
import { Link } from "react-router-dom";
import tailImg from "../images/tail.png";

const Qmenu = (props) => {
  const qmenuList = [
    {
      link: "/AccountManagement",
      text: "계정관리",
    },
    {
      link: "/ChangePassword",
      text: "비밀번호 변경",
    },
    {
      link: "/Inquiry",
      text: "문의하기",
    },
    {
      link: "/Notice",
      text: "공지사항",
    },
  ];
  return (
    <div className={props.class}>
      {/* <div className={props.class} ref={props.outside}> */}
      <span className={props.tail}>
        <img className="tail_img" src={tailImg} alt="tail.png" />
      </span>
      {qmenuList.map((data, index) => {
        return (
          <p className="Qmenu_menu_cove" key={index}>
            <Link to={data.link} className="Qmenu_menu">
              {data.text}
            </Link>
          </p>
        );
      })}
    </div>
  );
};

export default Qmenu;
