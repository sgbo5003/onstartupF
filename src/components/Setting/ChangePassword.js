import React, { useEffect, useState } from "react";

const ChangePassword = () => {
  const [password, setPassword] = useState(""); // 현재 비밀번호
  const [newPassword, setNewPassword] = useState(""); // 새 비밀번호
  const [newConfirmPassword, setNewConfirmPassword] = useState(""); // 새 비밀번호 확인
  const [buttonOn, setButtonOn] = useState(false); // 버튼 on & off

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const onChangeNewConfirmPassword = (e) => {
    setNewConfirmPassword(e.target.value);
  };

  const checkButtonOn = () => {
    if (password == "" || newPassword == "" || newConfirmPassword == "") {
      setButtonOn(false);
    } else {
      setButtonOn(true);
    }
  };

  const onSubmit = () => {
    if (password === newPassword) {
      alert("기존 비밀번호와 새 비밀번호가 일치합니다.");
    } else if (newPassword !== newConfirmPassword) {
      alert("비밀번호가 같은지 다시 확인해 주세요");
    } else {
      alert("비밀번호 변경");
    }
  };

  const buttonActivate = () => {
    return (
      <input
        className="regit_pass_submit_active"
        type="button"
        onClick={onSubmit}
        name="pass_submit"
        value="비밀번호 변경하기"
      />
    );
  };

  const buttonDeactivate = () => {
    return (
      <input
        className="regit_pass_submit_normal"
        type="button"
        name="pass_submit"
        value="비밀번호 변경하기"
        disabled
      />
    );
  };

  useEffect(() => {
    checkButtonOn();
  });

  return (
    <div className="wap regit_pass_wap">
      <div className="regit_pass_content">
        <div className="regit_pass_view">
          <h2 className="regit_pass_view_title">비밀번호 변경</h2>
          <form className="regit_pass_group">
            <p>현재 비밀번호</p>
            <input
              className="regit_pass_text_box now_pass_text"
              type="password"
              name="now_pass"
              maxLength="12"
              placeholder="현재 비밀번호 입력"
              value={password}
              onChange={onChangePassword}
            />
            <p>새 비밀번호</p>
            <input
              className="regit_pass_text_box new_pass_text"
              type="password"
              name="new_pass"
              maxLength="12"
              placeholder="새 비밀번호 입력"
              value={newPassword}
              onChange={onChangeNewPassword}
            />
            <div id="error_pass" className="result-pass result-check"></div>
            <p>새 비밀번호 확인</p>
            <input
              className="regit_pass_text_box re_pass_text"
              type="password"
              name="re_pass"
              maxLength="12"
              placeholder="새 비밀번호 입력"
              value={newConfirmPassword}
              onChange={onChangeNewConfirmPassword}
            />
            <div
              id="error_re_pass"
              className="result-re-pass result-check"
            ></div>
          </form>
          <form className="regit_pass_submit_group">
            {buttonOn ? buttonActivate() : buttonDeactivate()}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
