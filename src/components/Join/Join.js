import React, { useEffect, useState } from "react";
import naverImg from "../../images/naver.png";
import googleImg from "../../images/google.png";
import kakaoImg from "../../images/kakao.png";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import { KAKAO_AUTH_URL } from "../../OAuth";
import { NAVER_AUTH_URL } from "../../OAuth";
import JoinSubmitModal from "./JoinSubmitModal";
import JoinSubmitQnaFirstModal from "./JoinSubmitQnaFirstModal";
import JoinSubmitQnaSecondModal from "./JoinSubmitQnaSecondModal";
import Modal from "../../Modal";
import * as fnc from "../../commonFunc/CommonFunctions";

const Join = (props) => {
  const { naver } = window;
  const [name, setName] = useState(""); // 이름
  const [nameError, setNameError] = useState(false); // 이름 오류체크
  const [email, setEmail] = useState(""); // 이메일
  const [password, setPassword] = useState(""); // 비밀번호
  const [passwordError, setPasswordError] = useState(false); // 비밀번호 오류체크
  const [confirmPassword, setConfirmPassword] = useState(""); // 비밀번호 확인
  const [confirmPasswordError, setConfirmPasswordError] = useState(false); // 비밀번호확인 오류체크
  const [emailError, setEmailError] = useState(false); // 이메일 오류체크
  const [buttonOn, setButtonOn] = useState(false); // 버튼 활성화 & 비활성화 체크
  const [joinSubmitModalOn, setJoinSubmitModalOn] = useState(false); // 회원가입 성공 모달 on & off 체크
  const [joinSubmitQnaModalOn, setJoinSubmitQnaModalOn] = useState(false); // 회원가입 첫번째 질문 모달 on & off 체크
  const [joinSubmitQnaSecondModalOn, setJoinSubmitQnaSecondModalOn] =
    useState(false); // 회원가입 두번째 질문 모달 on & off 체크
  const history = useHistory();
  const { isLogin, setIsLogin } = props;

  // 커머스 -> 체크된 버튼들을 담는 state
  const [commersCheckedItems, setCommersCheckedItems] = useState(new Set());
  // 전문분야 -> 체크된 버튼들을 담는 state
  const [specialCheckedItems, setSpecialCheckedItems] = useState(new Set());
  // 관심분야 -> 체크된 버튼들을 담는 state
  const [interestCheckedItems, setInterestCheckedItems] = useState(new Set());

  // 커머스 & 전문분야 & 관심분야 카테고리 저장
  const [joinCategoryData, setJoinCategoryData] = useState([]);

  // 카카오 로그인
  const kakaoLoginHandler = () => {
    axios
      .get(KAKAO_AUTH_URL)
      .then((response) => {
        console.log(response);
        if (response.data.error === 3) {
          sessionStorage.setItem(
            "kakaoLoginStatus",
            JSON.stringify(response.data.error)
          );
          history.push("/");
          window.location.replace("/");
        } else if (response.data.error === 2) {
          alert("필수항목을 체크해주세요.");
        } else if (response.data.error === 1) {
          alert("토큰오류");
        } else {
          location.replace(
            "https://accounts.kakao.com/login?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fresponse_type%3Dcode%26redirect_uri%3Dhttp%253A%252F%252Flocalhost:8080%26client_id%3D4626efd0ab72ba3533e4947b9b02c37f"
          );
          sessionStorage.setItem("kakaoLogin", "true");
          window.location.replace("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //네이버 로그인
  const NaverLoginHandler = () => {
    axios
      .get(NAVER_AUTH_URL)
      .then((response) => {
        console.log(response);
        if (response.data.error === 3) {
          sessionStorage.setItem(
            "naverLoginStatus",
            JSON.stringify(response.data.error)
          );
          history.push("/");
          window.location.replace("/");
          console.log(response.data.error);
        } else if (response.data.error === 2) {
          alert("필수항목을 체크해주세요.");
        } else if (response.data.error === 1) {
          alert("토큰오류");
        } else {
          location.replace(
            "https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=jxNOYlz8FOqMBba83QbQ&redirect_uri=http://localhost:8080"
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 회원가입 버튼 비활성화
  function btnDeactivate() {
    return (
      <input
        className="join_member_submit_off"
        type="submit"
        name="join_member_submit"
        value="회원가입"
        disabled
      />
    );
  }

  // 회원가입 버튼 활성화
  function btnActivate() {
    return (
      <input
        className="join_member_submit_on"
        // type="submit"
        type="button"
        onClick={onJoinSubmitModal}
        // onSubmit={onSubmit}
        name="join_member_submit"
        value="회원가입"
      />
    );
  }

  // 버튼 활성화 & 비활성화 체크
  function checkBtnOn() {
    if (name == "" || email == "" || password == "" || confirmPassword == "") {
      setButtonOn(false);
    } else {
      setButtonOn(true);
    }
  }

  // 첫번째 모달창 -> 두번째 모달창으로 이동 함수 구현
  const onJoinSubmitQnaModal = () => {
    setJoinSubmitModalOn(false);
    setJoinSubmitQnaModalOn(true);
  };

  // 선택창 두번째 모달 off, 세번째 모달 on
  const onJoinSubmitQnaSecondModal = () => {
    setJoinSubmitQnaModalOn(false);
    setJoinSubmitQnaSecondModalOn(true);
  };

  // submit
  const onJoinSubmitModal = (e) => {
    if (emailError || passwordError || confirmPasswordError || nameError) {
      alert("형식을 다시 확인해주세요");
      return;
    }
    console.log({ name, email, password, confirmPassword });
    //회원가입 조건 다 만족 시 회원가입진행
    if (password && email && name && confirmPassword) {
      //
      //   sessionStorage.setItem("email", email);
      // pushData();
      //   history.push("/");
      //   setIsLogin(!isLogin);
      setJoinSubmitModalOn(true);
    }
  };

  // 마지막 제출 기능 함수로 구현
  const onSubmit = (e) => {
    pushData();
    // jwt token
    // const { accessToken } = response.data;
    //  API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
    // axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    // history.push("/");
    // // location.reload();
    // alert("회원가입 완료");
    // history.push("/Login");
  };

  // 이메일 유효성 검사
  const validateEmail = (email) => {
    const regExp =
      /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/i;
    if (regExp.test(email)) {
      return false;
    } else if (email === "") {
      return false;
    } else {
      return true;
    }
  };

  // 이름 유효성 검사
  const validateName = (name) => {
    const reg = /^[가-힣]{2,4}$/;
    if (reg.test(name)) {
      return false;
    } else if (name === "") {
      return false;
    } else {
      return true;
    }
  };

  // 비밀번호 유효성 검사
  const validatePassword = (password) => {
    if (password.length > 8 && password.length < 20) {
      return false;
    } else if (password === "") {
      return false;
    } else {
      return true;
    }
  };

  // 비밀번호 일치 확인 유효성 검사
  const validateConfirmPassword = (confirmPassword, password) => {
    if (password == "" && confirmPassword == "") {
      return false;
    }
    // 비밀번호 & 비밀번호 유효성 검사
    if (password !== confirmPassword) {
      return true;
    }
  };

  // 이름 변경 감지
  const onChangeName = (e) => {
    setName(e.target.value);
    setNameError(validateName(e.target.value));
  };
  // 이메일 변경 감지
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    setEmailError(validateEmail(e.target.value));
  };
  // 비밀번호 변경 감지
  const onChangePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError(validatePassword(e.target.value));
  };
  // 비밀번호 확인 변경 감지
  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordError(e.target.value !== password);
  };

  // 회원가입 data 보내기
  const pushData = () => {
    // const params = new FormData();
    // params.append("token", sessionStorage.getItem("token"));
    // params.append("currenturl", location.href);
    // params.append("name", name);
    // params.append("id", email);
    // params.append("password", password);
    // params.append("commerce", JSON.stringify([...commersCheckedItems]));
    // params.append("specialty", JSON.stringify([...specialCheckedItems]));
    // params.append("interesting", JSON.stringify([...interestCheckedItems]));
    // axios({
    //   method: "post",
    //   url: "action/member/join.php",
    //   data: params,
    // })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    fnc.executeQuery({
      url: "action/member/join.php",
      data: {
        id: email,
        name: name,
        password: password,
        commerce: JSON.stringify([...commersCheckedItems]),
        specialty: JSON.stringify([...specialCheckedItems]),
        interesting: JSON.stringify([...interestCheckedItems]),
      },
      success: (res) => {},
    });
  };

  // 실시간으로 state 변경 & 체크
  useEffect(() => {
    checkBtnOn();
  });

  useEffect(() => {
    if (password == "" && confirmPassword == "") setConfirmPasswordError(false);
  }, [password, confirmPassword]);

  return (
    <>
      <div className="wap login_join_wap">
        <div className="login_join_content">
          <div className="login_join_view">
            <h2 className="login_join_title">
              커머스 관련 인사이트를
              <br />
              온스타트업에서 만나보세요!
            </h2>
            <div className="login_form_group">
              <section className="login_form">
                <p>
                  앗! 이미 회원이신가요?
                  <Link to="/Login" className="login_btn">
                    로그인하기
                  </Link>
                </p>
              </section>

              <section className="kakao_form" onClick={kakaoLoginHandler}>
                <p>
                  <img src={kakaoImg} alt="kakao" />
                  카카오 3초만에 가입하기
                </p>
              </section>
              <section className="login_form_line">
                <p>또는</p>
                <div></div>
              </section>
            </div>
            <div className="login_text_group">
              <h2 className="login_member_join_title">일반 회원가입하기</h2>
              <form className="login_member_join_form">
                <p>이름</p>
                <input
                  className="join_member_text join_member_name"
                  type="text"
                  name="join_member_name"
                  placeholder="이름 입력"
                  value={name}
                  required
                  onChange={onChangeName}
                />
                {nameError && (
                  <div style={{ color: "red" }}>
                    이름은 한글로만 가능합니다.
                  </div>
                )}
                <p>이메일</p>
                <div className="result-email"></div>
                <input
                  className="join_member_text join_member_email"
                  type="email"
                  name="join_member_email"
                  placeholder="이메일 입력"
                  value={email}
                  required
                  onChange={onChangeEmail}
                />
                {emailError && (
                  <div style={{ color: "red" }}>
                    이메일 형식이 일치하지 않습니다.
                  </div>
                )}
                <p>비밀번호</p>
                <div className="result-pass"></div>
                <input
                  className="join_member_text join_member_pass"
                  type="password"
                  name="join_member_pass"
                  placeholder="비밀번호 입력"
                  //최소 8글자 제한
                  value={password}
                  required
                  onChange={onChangePassword}
                />
                {passwordError && (
                  <div style={{ color: "red" }}>
                    비밀번호는 최소 8~20글자 입력해주세요
                  </div>
                )}
                <p>비밀번호 확인</p>
                <div className="result-re-pass"></div>
                <input
                  className="join_member_text join_member_repass"
                  type="password"
                  name="join_member_repass"
                  placeholder="비밀번호 입력"
                  value={confirmPassword}
                  required
                  onChange={onChangeConfirmPassword}
                />
                {confirmPasswordError && (
                  <div style={{ color: "red" }}>
                    비밀번호가 일치하지 않습니다.
                  </div>
                )}
                <span>
                  '회원가입'을 누름으로써 온스타트업의
                  <a className="service_tab" href="#">
                    이용약관
                  </a>
                  과
                  <a className="policy_tab" href="#">
                    개인정보 처리 방침
                  </a>
                  에 동의합니다.
                </span>
                {buttonOn ? btnActivate() : btnDeactivate()}
                <a className="service_center_join_btn" href="#">
                  고객센터
                </a>
              </form>
              <section className="login_form_line">
                <p>또는</p>
                <div></div>
              </section>
              <section
                className="naver_form"
                // id="naverIdLogin"
                onClick={NaverLoginHandler}
              >
                <p>
                  <img src={naverImg} alt="naver" />
                  네이버 간편가입
                </p>
              </section>
              <section className="google_form">
                <p>
                  <img src={googleImg} alt="google" />
                  구글 간편가입
                </p>
              </section>
            </div>
            {joinSubmitModalOn ? (
              <JoinSubmitModal
                class="join_member_checked_cove_on"
                onJoinSubmitQnaModal={onJoinSubmitQnaModal}
              />
            ) : (
              <JoinSubmitModal class="join_member_checked_cove_off" />
            )}
          </div>
        </div>
      </div>
      <Modal isOpen={joinSubmitQnaModalOn} setIsOpen={setJoinSubmitModalOn}>
        <JoinSubmitQnaFirstModal
          onJoinSubmitQnaSecondModal={onJoinSubmitQnaSecondModal}
          commersCheckedItems={commersCheckedItems}
          setCommersCheckedItems={setCommersCheckedItems}
          specialCheckedItems={specialCheckedItems}
          setSpecialCheckedItems={setSpecialCheckedItems}
          joinCategoryData={joinCategoryData}
          setJoinCategoryData={setJoinCategoryData}
        />
      </Modal>
      <Modal
        isOpen={joinSubmitQnaSecondModalOn}
        setIsOpen={setJoinSubmitQnaModalOn}
      >
        <JoinSubmitQnaSecondModal
          onSubmit={onSubmit}
          interestCheckedItems={interestCheckedItems}
          setInterestCheckedItems={setInterestCheckedItems}
          joinCategoryData={joinCategoryData}
          setJoinCategoryData={setJoinCategoryData}
        />
      </Modal>
    </>
  );
};

export default Join;
