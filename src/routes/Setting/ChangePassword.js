import React from "react";

const ChangePassword = () => {
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
              maxlength="12"
              placeholder="현재 비밀번호 입력"
            />
            <p>새 비밀번호</p>
            <input
              className="regit_pass_text_box new_pass_text"
              type="password"
              name="new_pass"
              maxlength="12"
              placeholder="새 비밀번호 입력"
            />
            <div id="error_pass" className="result-pass result-check"></div>
            <p>새 비밀번호 확인</p>
            <input
              className="regit_pass_text_box re_pass_text"
              type="password"
              name="re_pass"
              maxlength="12"
              placeholder="새 비밀번호 입력"
            />
            <div
              id="error_re_pass"
              className="result-re-pass result-check"
            ></div>
          </form>
          <form className="regit_pass_submit_group">
            <input
              className="regit_pass_submit_normal"
              type="submit"
              name="pass_submit"
              value="비밀번호 변경하기"
              disabled
            />
            <input
              className="regit_pass_submit_active"
              type="submit"
              name="pass_submit"
              value="비밀번호 변경하기"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
