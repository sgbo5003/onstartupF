import React from "react";

const AcademicModal = (props) => {
  const { setAcademicModalOn, setCount, count } = props;

  const onClick = () => {
    setAcademicModalOn(false);
    setCount(count + 1);
  };
  return (
    <div className="MypageInitial_add_button">
      <button onClick={onClick}>학력 추가</button>
    </div>
  );
};

export default AcademicModal;
