import axios from "axios";

export const executeQuery = ({
  url,
  data,
  currentUrl,
  success,
  fail,
  error,
}) => {
  axios({
    method: "post",
    url: "/login.php",
    data: params,
  })
    .then((response) => {
      console.log(response.data.idx);
      if (response.data.error === 0) {
        sessionStorage.setItem("email", inputEmail);
        alert("로그인 성공");
        history.push("/");
        return setIsLogin(!isLogin);
        console.log("로그인 하고 난 이후 로그인 상태 : ", isLogin);
      } else {
        alert("로그인 에러");
        console.log(response.data);
        setInputEmail("");
        setInputPassword("");
      }
      console.log(inputEmail);
      console.log(inputPassword);
    })
    .catch((error) => {
      console.log(error);
    });
};
