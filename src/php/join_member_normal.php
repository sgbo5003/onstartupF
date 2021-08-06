<?php
define("ALLOW", true);
include "../../../dbconfig.php";
session_start();
error_reporting(E_ALL);
ini_set("display_errors", 1);

header('Content-Type: application/json; charset=UTF-8');
$method = $_SERVER['REQUEST_METHOD'];

$sql = "SELECT MAX(idx) FROM user;";
$row = sql_select($dbcon, $sql, "arr")[0] + 1;

if ($method != "PUT" || $method != "DELETE") {
    if ($method == "GET") {
        if (isset($_GET["user_name"]) && isset($_GET["user_email"]) && isset($_GET["user_password"]) && $_GET["user_name"] != "" && $_GET["user_email"] != "" && $_GET["user_password"] != "" && !empty($_GET["user_name"]) && !empty($_GET["user_email"]) && !empty($_GET["user_password"])) {
            $user_name = $_GET["user_name"];
            $user_email = $_GET["user_email"];
            $user_password = $_GET["user_password"];

            $sql_select = "SELECT * FROM user WHERE user_name = '$user_name' AND user_email = '$user_email';";
            $req = sql_select($dbcon, $sql_select, "arr");

            if ($req) {
                echo (json_encode(array("error" => 1, "content" => "이미 가입된 유저입니다."), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
            } else {
                $sql = "INSERT INTO user (idx, user_name, user_email, user_password)";
                $sql .= "VALUES($row, '$user_name', '$user_email', '$user_password');";

                if (sql_select($dbcon, $sql, "no")) {

                    $sql_select = "SELECT d.token, u.idx, u.user_name, u.user_email FROM user as u, device as d WHERE u.user_name = '$user_name' AND u.user_email = '$user_email' AND u.user_password = '$user_password'";

                    $req = sql_select($dbcon, $sql_select, "arr");

                    $token = array();
                    $user_idx = array();
                    $user_name = array();
                    $user_email = array();

                    array_push($token, $req["token"]);
                    array_push($user_idx, $req["idx"]);
                    array_push($user_name, $req["user_name"]);
                    array_push($user_email, $req["user_email"]);

                    echo json_encode(array("token" => $token, "user_idx" => $user_idx, "user_name" => $user_name, "user_email" => $user_email), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
                } else {
                    echo (json_encode(array("error" => 2, "content" => "값 오류"), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
                }
            }
        }
    } else {
        header("HTTP/1.0 404 Not Found"); //url에 타이핑해서 진입시 404에러로 보안
    }

    if ($method == "POST") {
        if (isset($_POST["user_name"]) && isset($_POST["user_email"]) && isset($_POST["user_password"]) && $_POST["user_name"] != "" && $_POST["user_email"] != "" && $_POST["user_password"] != "" && !empty($_POST["user_name"]) && !empty($_POST["user_email"]) && !empty($_POST["user_password"])) {
            $user_name = $_POST["user_name"];
            $user_email = $_POST["user_email"];
            $user_password = $_POST["user_password"];

            $sql_select = "SELECT * FROM user WHERE user_name = '$user_name' AND user_email = '$user_email';";
            $req = sql_select($dbcon, $sql_select, "arr");

            if ($req) {
                echo (json_encode(array("error" => 1, "content" => "이미 가입된 유저입니다."), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
            } else {
                $sql = "INSERT INTO user (idx, user_name, user_email, user_password)";
                $sql .= "VALUES($row, '$user_name', '$user_email', '$user_password');";

                if (sql_select($dbcon, $sql, "no")) {
                    // $_SESSION["login"] = true;
                    // header('Location: http://15.164.227.114');
                    echo (json_encode(array("complete" => 1, "content" => "회원가입 완료"), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
                } else {
                    echo (json_encode(array("error" => 2, "content" => "값 오류"), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
                }
            }
        }
    }
} else {
    while (1) {
        echo (json_encode(array("error" => 3, "content" => "값 오류"), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
    }
}
