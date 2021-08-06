import React, { useEffect, useState } from "react";
import axios from "axios";
import ScrollButton from "../ScrollButton";
import viewIcon1 from "../../images/view_icon1.png";
import viewIcon2 from "../../images/view_icon2.png";
import ReferenceContent from "./ReferenceContent";

const ReferenceContentPage = () => {
  return (
    <div className="reference_content">
      <div className="reference_content_title_container">
        <h2 className="reference_content_title_main">이 교재 어때요?</h2>
        <img src={viewIcon1} alt="icon1.png" />
      </div>
      <div className="reference_content_contents_container">
        <ReferenceContent coinbox="" />
        <ReferenceContent coinbox="" />
      </div>
      <div className="reference_content_title_container">
        <h2 className="reference_content_title_main">
          많은 사람들이 보고 있어요
        </h2>
        <img src={viewIcon2} alt="icon2.png" />
      </div>
      <div className="reference_content_contents_container">
        <ReferenceContent coinbox="" />
        <ReferenceContent coinbox="" />
      </div>
      <div className="reference_content_title_container">
        <h2 className="reference_content_title_main">NEW TOPIC</h2>
      </div>
    </div>
  );
};

export default ReferenceContentPage;
