import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import * as fnc from "../../commonFunc/CommonFunctions";

const Login = (props) => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const { isLogin, setIsLogin } = props;

  const onChangeInputEmail = (e) => {
    setInputEmail(e.target.value);
  };

  const onChangeInputPassword = (e) => {
    setInputPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
    alert("로그인");
  };

  const history = useHistory();

  const getData = () => {
    // const params = new FormData();
    // params.append("id", inputEmail);
    // params.append("password", inputPassword);
    //   .then((response) => {
    // if (response.data.error === 0) {
    //   sessionStorage.setItem("user_idx", response.data.user_idx);
    // alert("로그인 성공");
    //   history.push("/");
    //   return setIsLogin(!isLogin);

    // } else {
    //   alert("로그인 에러");
    //   console.log(response.data);
    //   setInputEmail("");
    //   setInputPassword("");
    // }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    fnc.executeQuery({
      url: "action/member/login.php",
      data: {
        id: inputEmail,
        password: inputPassword,
      },
      success: (res) => {},
    });
  };

  return (
    <div className="wap login_wap">
      <div className="login_pass_content">
        <div className="login_pass_view">
          <h2 className="login_view_title">로그인</h2>
          <div className="login_view_join_member">
            <p>
              아직 회원이 아니신가요? 5초 안에
              <Link to="/Join" className="join_member_btn">
                가입하기
              </Link>
            </p>
          </div>
          <form
            name="login_account_set_list"
            className="login_account_group"
            onSubmit={onSubmit}
          >
            <p>이메일</p>
            <input
              className="login_account_text_box login_account_email"
              type="email"
              placeholder="이메일 입력"
              name="new_email"
              maxLength="30"
              value={inputEmail}
              onChange={onChangeInputEmail}
              required
            />
            <div id="error_mail" className="result-email result-check"></div>
            <p>비밀번호</p>
            <input
              className="login_account_text_box login_account_pass"
              type="password"
              placeholder="비밀번호 입력"
              name="new_pass"
              maxLength="20"
              value={inputPassword}
              onChange={onChangeInputPassword}
              required
            />
            <div id="error_tel" className="result-tel result-check"></div>

            {/* <form className="login_submit_group"> */}
            {/* <input
              className="login_submit_normal"
              type="submit"
              name="account_submit"
              value="로그인"
              on
              // disabled
            /> */}
            <input
              className="login_submit_active"
              type="submit"
              name="account_submit"
              value="로그인"
            />
          </form>
          {/* </form> */}
          <div className="login_help_group">
            <a className="service_center_login_btn">고객센터</a>
            <Link to="/FindPassword" className="help_pass_btn">
              비밀번호를 잊으셨나요?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
