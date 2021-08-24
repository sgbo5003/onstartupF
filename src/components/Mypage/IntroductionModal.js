import React from "react";

const IntroductionModal = (props) => {
  const { setIntroductionModalOn, setCount, count } = props;

  const onClick = () => {
    setIntroductionModalOn(false);
    setCount(count + 1);
  };
  return (
    <div className="MypageInitial_add_button">
      <button onClick={onClick}>소개글 추가</button>
    </div>
  );
};

export default IntroductionModal;
