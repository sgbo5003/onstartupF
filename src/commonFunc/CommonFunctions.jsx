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

  //   data.keypass = keypass;
  //   data.currenturl = currenturl;

  const params = new FormData();
  Object.keys(data).map((element) => {
    params.append(element, data[element]);
  });
  params.append("currenturl", location.href);
  params.append("token", sessionStorage.getItem("token"));

  axios({
    method: "post",
    url: url,
    data: params || {},
  })
    .then((res) => {
      /* 백에서 넘어오는 response.data가 통일되어 있어야 하는데 다르게 넘어와서
           if (res.data[0].response === "ok") {
        success(res.data[1]);
        console.log(res);
      } 
      이쪽 부분에서 response가 ok 일때 res.data가 배열이 아니라
      에러가 떠서 catch로 빠져나갔다.
      해결 방법: 아예 처음부터 객체로 통일하던지, 배열로 통일하던지
        */
      console.log(res);
      if (res.data.response === "error") {
        if (error) {
          error(res.data);
          console.log("error", res);
        } else {
          alert(res.data.msg);
        }
      }
      if (res.data.response === "fail") {
        alert("서버접속에 실패하였습니다. 관리자에게 문의해주시기 바랍니다.");
        console.log("fail1", res);
        console.log(res.data);
      }
      if (res.data[0].response === "ok") {
        success(res.data[1]);
        console.log(res);
      }
      console.log(res);
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
