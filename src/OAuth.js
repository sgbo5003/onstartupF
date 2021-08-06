export const CLIENT_ID = "4626efd0ab72ba3533e4947b9b02c37f";
export const REDIRECT_URI =
  "http://15.164.227.114/web/src/php/join_sns_kakao.php";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

export const CLIENT2_ID = "jxNOYlz8FOqMBba83QbQ";
export const REDIRECT_URI2 =
  "http://15.164.227.114/web/src/php/join_sns_naver.php";

export const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT2_ID}&redirect_uri=${REDIRECT_URI2}`;

// https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=jxNOYlz8FOqMBba83QbQ&redirect_uri=http://15.164.227.114/web/src/php/join_sns_naver.php
