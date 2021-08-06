<?php
define("ALLOW", true);
include "../../../dbconfig.php";
error_reporting(E_ALL);
ini_set("display_errors", 1);

header('Content-Type: application/json; charset=UTF-8');

function naver_login_api($url, $header)
{
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    if ($header != "") {
        curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
    }
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    $status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    if ($status_code == 200) {
        $res = json_decode($response, true);
        return $res;
    }
}

$sql = "SELECT MAX(idx) FROM user;";
$row = sql_select($dbcon, $sql, "arr")[0] + 1;

$app_key = "4626efd0ab72ba3533e4947b9b02c37f";
$client_secret = "HDqFPSbz4x";
$code = $_GET["code"];
$redirectURI = urlencode("http://15.164.227.114/web/src/php/join_sns_kakao.php");
$res = naver_login_api("https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=" . $app_key . "&client_secret=" . $client_secret . "&redirect_uri=" . $redirectURI . "&code=" . $code, "");
$ac_token = $res['access_token'];

if (empty($ac_token)) {
    echo (json_encode(array("error" => 1, "content" => "토큰 생성 불가"), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
} else {
    $header = array(
        'Content-Type: application/json', sprintf('Authorization: Bearer %s', $ac_token)
    );

    $res = naver_login_api("https://kapi.kakao.com/v2/user/me", $header);

    if (empty($res['properties']['nickname']) || empty($res['kakao_account']['email']) || empty($res['properties']['profile_image'])) {
        $res = naver_login_api("https://kapi.kakao.com/v1/user/unlink", $header);

        echo (json_encode(array("error :" => 2, "content" => "필수 정보 제공 동의 거부"), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
    } else {
        $sql = "SELECT * FROM user WHERE user_name = '{$res["properties"]["nickname"]}' AND user_email = '{$res["kakao_account"]["email"]}'";
        $req = sql_select($dbcon, $sql, "arr");

        if (!$req) {
            $sql = "INSERT INTO user (idx, user_name, user_email, user_password)";
            $sql .= "VALUES($row, '{$res["properties"]["nickname"]}', '{$res["kakao_account"]["email"]}', 'kakao');";
            $req = sql_select($dbcon, $sql, "no");

            $sql = "SELECT * FROM user WHERE user_name = '{$res["properties"]["nickname"]}' AND user_email = '{$res["kakao_account"]["email"]}'";
            $req = sql_select($dbcon, $sql, "arr");

            $sql = "INSERT INTO user_img (user_idx, user_img_root)";
            $sql .= "VALUES({$req["idx"]}, '{$res["properties"]["profile_image"]}');";
            sql_select($dbcon, $sql, "no");

            $nickname = array();
            $email = array();
            $profile_image = array();

            array_push($nickname, $res["properties"]["nickname"]);
            array_push($email, $res["kakao_account"]["email"]);
            array_push($profile_image, $res["properties"]["profile_image"]);

            echo (json_encode(array("nickname" => $nickname, "email" => $email, "profile_image" => $profile_image), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
        } else {
            echo (json_encode(array("error" => 3, "content" => "이미 가입한 유저"), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
        }
    }
}
