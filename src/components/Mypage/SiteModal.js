import React from "react";

const SiteModal = (props) => {
  const { setSiteModalOn, setCount, count } = props;

  const onClick = () => {
    setSiteModalOn(false);
    setCount(count + 1);
  };
  return (
    <div className="MypageInitial_add_button">
      <button onClick={onClick}>대표 사이트 추가</button>
    </div>
  );
};

export default SiteModal;
