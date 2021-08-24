import React from "react";

const ProfileImgAddModal = (props) => {
  const { setProfileImgModalOn, setCount, count } = props;

  const onClick = () => {
    setProfileImgModalOn(false);
    setCount(count + 1);
  };
  return (
    <div className="MypageInitial_add_button">
      <button onClick={onClick}>프로필 사진 추가</button>
    </div>
  );
};

export default ProfileImgAddModal;
