import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import * as fnc from "../../commonFunc/CommonFunctions";
import { useDispatch, useSelector } from "react-redux";
import * as refreshActions from "../../modules/refresh";
import KakaoLogin from "react-kakao-login";
const Login = (props) => {
  const kakaoAppKey = "bd83d0a39d192921732e44fd8f838bdd";
  const allRefresh = useSelector((state) => state.refresh.get("allRefresh"));
  const dispatch = useDispatch();
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const history = useHistory();
  const { isLogin, setIsLogin } = props;

  // 카카오 로그인 -> 동의하기 -> 완료 시 실행되는 함수
  const kakaoSuccess = (data) => {
    const social_id = data.profile.id; // 고유번호
    const social_name = data.profile.properties.nickname; // 이름
    const social_email = data.profile.kakao_account.email; // 이메일
    const social_profileImg = data.profile.properties.profile_image; // 프로필 이미지
    const [socialToken, setSocialToken] = useState(""); // 소셜 로그인을 이용하기 위한 토큰

    fnc.executeQuery({
      url: "action/member/social_join.php",
      data: {
        id: social_id,
        name: social_name,
        email: social_email,
        profile_image_url: social_profileImg,
        social_sort: "kakao",
      },
      success: (res) => {
        setSocialToken(res.token);
        console.log(res.token);
      },
      error: (res) => {
        // redux 사용
        dispatch(refreshActions.setAllRefresh(allRefresh + 1));
        history.push("/");
      },
    });
  };

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

  const getData = () => {
    fnc.executeQuery({
      url: "action/member/login.php",
      data: {
        id: inputEmail,
        password: inputPassword,
      },
      success: (res) => {
        sessionStorage.setItem("token", res.token);
        dispatch(refreshActions.setAllRefresh(allRefresh + 1));
        history.push("/");
      },
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
          <section className="kakao_form">
            <KakaoLogin
              className="KaKaoLogin"
              token={kakaoAppKey}
              onSuccess={kakaoSuccess}
              onFail={console.log}
            >
              {/* <img src={kakaoImg} alt="kakao" />
                  카카오 3초만에 가입하기 */}
            </KakaoLogin>
            {/* <div>
                  <button onClick={disconnect}>연결끊기</button>
                </div> */}
          </section>
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
