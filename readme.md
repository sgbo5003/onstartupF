# onstartup (회사 인턴쉽 프로젝트)

> 페이지 별로 구현한 기능 정리

> 전체적인 세팅

- webpack 을 이용하여 프로젝트 구현
- 리덕스 사용
  - 아직 리덕스는 잘 다루지 못해서 로그인 & 회원가입 & 로그아웃 시 헤더 변경에만 적용
- axios는 공통 함수로 빼서 import 해 사용

  - 코드 (commonFunctions.jsx)

    ```jsx
    import axios from "axios";

    export const executeQuery = ({
      url,
      data,
      currenturl,
      success,
      error,
      fail,
    }) => {
      axios.defaults.baseURL = "https://api.on-startup.co.kr/";
      //   axios.defaults.headers = { "content-type": "multipart/form-data" };
      //   axios.defaults.withCredentials = true;

      const params = new FormData();
      Object.keys(data).map((element) => {
        params.append(element, data[element]);
      });
      params.append("currenturl", location.href);
      params.append("token", sessionStorage.getItem("token"));

      axios({
        method: "post",
        url,
        data: params || {},
      })
        .then((res) => {
          //   for (const keyValue of params) {
          //     console.log(keyValue);
          //   }
          if (res.data.response === "error") {
            if (error) {
              error(res.data);
              console.log("error1", res);
            } else if (res.data.msg === "이미 사용중인 E-mail 주소입니다.") {
              error(res.data);
              console.log(res);
            } else if (res.data.msg === "이미 로그인하셨습니다.") {
              console.log(res);
              success(res.data);
            } else {
              alert(res.data.msg);
              console.log("error2", res);
            }
          }
          if (res.data.response === "fail") {
            alert(
              "서버접속에 실패하였습니다. 관리자에게 문의해주시기 바랍니다."
            );
            console.log("fail1", res);
            console.log(res.data);
          }
          if (res.data.response === "ok") {
            console.log(res);
            success(res.data);
          }
        })
        .catch((err) => {
          if (fail) {
            fail(err);
          } else {
            console.log("fail2", err);
            alert(
              "서버접속에 실패하였습니다. 관리자에게 문의해주시기 바랍니다."
            );
          }
        });
    };
    ```

- JWT 사용
  - 백엔드에서 생성한 JWT Token을 받고 넘기면서 인증하는 방법을 사용하였다.

> 메인페이지

<img src="https://user-images.githubusercontent.com/61876422/134970798-b13c0e31-236a-4428-8b7e-5dde6b2a924a.png" width="680" height="600"/>

### **사이드바**

- 홈 & 저장글
  - url에 따른 색깔 변경 제어
- **카테고리**
  - api와 연동하여 data를 받아와 렌더링
  - set() 을 이용한 선택 제어

### **메인페이지**

- api와 연동하여 data를 받아와 렌더링
- 슬라이더 → react-material-ui-carousel 라이브러리 사용
- 게시글 → api에서 data를 받아와 컴포넌트에 mapping

### **출석 코인받기**

- 클릭 시 모달 화면 뜨게 구현
- api 와 연동하지 않아 숫자 클릭 시 css만 바뀐다.
- framer-motion을 사용해 모션 추가

### **헤더**

- **로고 & 커뮤니티 & 자료실 & 글작성 & 로그인**
  - 페이지 이동
- **알림**
  - 기능구현 x
- **설정**
  - 여러가지 설정페이지로 이동할 수 있게 구현
  - 다른 페이지로 이동 시 밑에 생기는 박스가 없어지게는 구현 x
- **로그인**
  - 리덕스를 이용하여 로그인 시 기본 사용자 아이콘으로 바뀌게 구현

### 저장글

- 기능구현 x

> 자료실 페이지

<img src="https://user-images.githubusercontent.com/61876422/134970991-486cacbc-0c96-4053-948f-2a8fe786cf58.png"/>

### 사이드바

- url에 따른 상태 변경 & css 변경

### 코인 충전하기

- 보유코인 & 코인 내역 각 항목에서 api를 받아와 렌더링
- api가 바뀌어서 렌더링 x

### 카테고리

- 페이지 이동만 구현

### 글쓰기

<img src="https://user-images.githubusercontent.com/61876422/134971008-faf20cd9-512f-4660-9370-0d391209b7fa.png"/>

- **글쓰기 버튼 활성화**
  - 꼭 작성해야 하는 내용, 분야를 기입했을때 상태를 바꿔 활성화
- **이미지 추가**
  - 파일 업로드 기능 구현
- **분야**
  - 모달을 띄어 api에서 받아온 카테고리를 렌더링
- **글쓰기**
  - 입력한 data들 axios를 이용하여 보내기 → 응답 받고 response에 따른 처리 → 실패 시 실패했다는걸 알려주는 실패모달 & 성공 시 홈으로 이동

> 문의하기 → 자주 묻는 질문 & 공지사항

<img src="https://user-images.githubusercontent.com/61876422/134971102-0ef4bc19-2a23-4364-bf90-88173c49beb7.png"/>

<img src="https://user-images.githubusercontent.com/61876422/134971113-49b21aac-318e-4c41-b814-b8690b7e5ab6.png" />

### 데이터 렌더링

axios를 통해 api를 받아와서 번호, 카테고리, 제목을 페이지마다 렌더링

### 페이지네이션

받아온 data중에 총 게시글 수를 나눠서 페이지네이션, 각 숫자 클릭 시 url에 따른 데이터 받아오기

> **회원가입**

<img src="https://user-images.githubusercontent.com/61876422/134971137-86570677-3fd5-4469-a481-64b5948bf1a5.png "/>

### 유효성 검사

- **전체**
  - 비어있는지 확인
- **이름**
  - 정규식 사용 → 2~4글자만 허용
- **이메일**
  - 정규식 사용 → 이메일 형식 검사
- **비밀번호 & 비밀번호 확인**
  - 서로 일치 하는지 체크

### 소셜 로그인

- **카카오 로그인**
  - react-kakao 라이브러리를 이용하여 구현
  - 사용자가 카카오 로그인 창에서 아이디,비밀번호 입력 시 id, name, email, profileImg 를 받아와서 axios 로 전송
  - response를 받아서 성공 응답 시 처리
- 네이버 & 구글 로그인
  - 구현 x

> 커머스 & 전문분야 선택 창 (회원가입 양식 다 입력 후 두번째 모달)

<img src="https://user-images.githubusercontent.com/61876422/134971149-b59b8af7-6005-4c83-9bd1-21ef54c95f05.png"/>

- 로그인 양식에 다 맞게 기입 시 커머스 & 전문분야 선택 모달 띄우기
- 두개 다 선택 시 다음으로 버튼 활성화

> 관심분야 선택 창 (커머스 & 전문분야 선택 완료 시 세번째 모달)

<img src="https://user-images.githubusercontent.com/61876422/134971153-ecedad82-3b10-4265-a3b4-b9e59c10aeb6.png" />

- 관심분야 까지 선택 하게 되면 axios로 회원가입 data 값, 커머스, 전문분야, 관심분야 data 전송

> **로그인**

<img src="https://user-images.githubusercontent.com/61876422/134971165-24b3e0a3-f070-4cb8-95ab-2e04721a8d1e.png" />

### 로그인

- 로그인 버튼 클릭 시 axios로 아이디 비밀번호 data 넘겨주기
- 성공 시 리덕스 적용하여 헤더 로그인 → 유저 기본 아이콘으로 변경 & 홈으로 이동

> **마이페이지 수정**

<img src="https://user-images.githubusercontent.com/61876422/134971177-c803c690-aa25-4d1c-91ac-9d59dd763bfc.png" />

### 데이터 렌더링

- axios로 데이터를 받아와 input 값에 저장
- **관심분야 선택**
  - set() 을 이용하여 선택한것 관심분야 배열에 추가하고 삭제 시 제거
- **경력사항**
  - 추가
    - concat을 이용하여 추가
  - 제거
    - filter를 이용해 제거
  - 값이 비었을 시 return
- **학교 & 전공**
  - 추가
    - concat을 이용하여 추가
  - 제거
    - filter 이용해 제거
  - 둘중 하나라도 값이 비었으면 return
- **유저 프로필**
  - 이미지 처리 & 저장
  - 미리보기 구현

> 메세지

<img src="https://user-images.githubusercontent.com/61876422/134971190-c03244b0-3f74-4443-89b5-680fc37eec31.png" />

- concat()을 이용해 input 값 전달 → 배열에 추가 → map()으로 렌더링

> 로그아웃

<img src="https://user-images.githubusercontent.com/61876422/134971202-c6349afb-cafb-47a0-b706-c618870df5e2.png" />

### 로그아웃 클릭 시

- axios로 데이터 전달
- sessionStorage에서 토큰 제거
- 리덕스 이용하여 바로 전역 상태 변경
- 홈으로 이동
