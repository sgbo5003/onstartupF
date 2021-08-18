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
  axios.defaults.baseURL = "https://api.on-startup.co.kr/";
  //   axios.defaults.withCredentials = true;
  //   data.token = token;
  //   data.currenturl = currenturl;

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
      if (res.data.response === "error") {
        if (error) {
          error(res.data);
          console.log("error", res);
        } else {
          alert(res.data.msg);
          console.log("error", res);
        }
      }
      if (res.data.response === "fail") {
        alert("서버접속에 실패하였습니다. 관리자에게 문의해주시기 바랍니다.");
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
        console.log("fail2", err.stack);
        alert("서버접속에 실패하였습니다. 관리자에게 문의해주시기 바랍니다.");
      }
    });
};
