import React from "react";

const CareerModal = (props) => {
  const { setCareerModalOn, setCount, count } = props;

  const onClick = () => {
    setCareerModalOn(false);
    setCount(count + 1);
  };
  return (
    <div className="MypageInitial_add_button">
      <button onClick={onClick}>경력 추가</button>
    </div>
  );
};

export default CareerModal;
