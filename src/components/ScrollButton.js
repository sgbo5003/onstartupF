import React, { useState } from "react";
import "../css/scrollButton.css";
import scrollIcon from "../images/scroll_top.png";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
		in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className="scrollBtn">
      <div className="scrollBtn_cove">
        <img
          className="scrollBtn_img"
          src="src/images/scroll_top.png"
          onClick={scrollToTop}
          style={{ display: visible ? "inline" : "none" }}
        />
      </div>
    </div>
  );
};

export default ScrollButton;
