import axios from "axios";

export const executeQuery = ({
  url,
  data,
  currenturl,
  success,
  error,
  fail,
}) => {
  //   const token = sessionStorage.getItem("token");
  //   const keypass = sessionStorage.getItem("keypass");
  axios.defaults.baseURL = "https://api.on-startup.co.kr/";
  //   axios.defaults.withCredentials = true;
  //   data.token = token;

  //   data = new FormData();

  //   data.keypass = keypass;
  //   data.currenturl = currenturl;

  const params = new FormData();
  params.append("currenturl", location.href);
  params.append("token", sessionStorage.getItem("token"));

  axios({
    method: "post",
    url,
    data: params || {},
  })
    .then((res) => {
      if (res.data[0].response === "error") {
        if (error) {
          error(res.data);
        } else {
          alert(res.data.msg);
        }
      }
      if (res.data[0].response === "fail") {
        alert("서버접속에 실패하였습니다. 관리자에게 문의해주시기 바랍니다.");
        console.log(res.data);
      }
      if (res.data[0].response === "ok") {
        success(res.data[1]);
        console.log(res);
      }
    })
    .catch((err) => {
      if (fail) {
        fail(err);
      } else {
        alert("서버접속에 실패하였습니다. 관리자에게 문의해주시기 바랍니다.");
      }
    });
};
