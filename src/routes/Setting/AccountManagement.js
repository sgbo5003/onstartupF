import React, { useEffect, useState } from "react";

const AccountManagement = () => {
  const [buttonOn, setButtonOn] = useState(false);
  const [inputEmail, setInputEmail] = useState("");

  const onSubmit = () => {
    e.preventDefault();
  };

  function btnDeActivate() {
    return (
      <input
        className="regit_account_submit_normal"
        type="submit"
        name="account_submit"
        value="계정 정보 변경하기"
        disabled
      />
    );
  }

  function btnActivate() {
    return (
      <input
        className="regit_account_submit_active"
        type="submit"
        name="account_submit"
        value="계정 정보 변경하기"
      />
    );
  }

  const onChangeInputEmail = (e) => {
    setInputEmail(e.target.value);
    console.log(e.target.value);
  };

  function checkBtnOn() {
    if (inputEmail == "") {
      setButtonOn(false);
    } else {
      setButtonOn(true);
    }
  }

  // 버튼 변경 & state 변경 실시간 감지
  useEffect(() => {
    checkBtnOn();
  });
  return (
    <div className="wap regit_pass_wap">
      <div className="regit_pass_content">
        <div className="regit_pass_view">
          <h2 className="regit_account_view_title">계정관리</h2>
          <form name="account_set_list" className="regit_account_group">
            <p>이메일</p>
            <input
              className="regit_account_text_box new_account_email"
              id="userEmail"
              type="email"
              name="new_email"
              maxlength="20"
              placeholder="이메일 입력"
              onChange={onChangeInputEmail}
            />
            <div id="error_mail" className="result-email result-check"></div>
            <div id="error_tel" className="result-tel result-check"></div>
          </form>
          <form className="regit_account_submit_group" onSubmit={onSubmit}>
            {buttonOn ? btnActivate() : btnDeActivate()}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountManagement;
