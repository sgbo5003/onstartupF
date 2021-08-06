<?php
define("ALLOW", true);
include "../../../dbconfig.php";
session_start();
error_reporting(E_ALL);
ini_set("display_errors", 1);

$method = $_SERVER['REQUEST_METHOD'];

if ($method != "PUT" || $method != "DELETE") {
    if ($method == "GET") {
        if (isset($_GET["user_email"]) && isset($_GET["user_password"]) && $_GET["user_email"] != "" && $_GET["user_password"] != "" && !empty($_GET["user_email"]) && !empty($_GET["user_password"])) {
            $user_email = $_GET["user_email"];
            $user_password = $_GET["user_password"];
        }
    } else {
        if (isset($_POST["user_email"]) && isset($_POST["user_password"]) && $_POST["user_email"] != "" && $_POST["user_password"] != "" && !empty($_POST["user_email"]) && !empty($_POST["user_password"])) {
            $user_email = $_POST["user_email"];
            $user_password = $_POST["user_password"];
        }
    }

    $sql = "SELECT d.token, u.idx, u.user_name, u.user_email FROM user as u, device as d WHERE u.user_email = '$user_email' AND u.user_password = '$user_password' AND d.token = {$_SESSION['token']};";

    $row = sql_select($dbcon, $sql, "no");

    if ($row) {
        $token = array();
        $user_idx = array();
        $user_name = array();
        $user_email = array();

        while ($res = $row->fetch()) {
            $_SESSION["user_idx"] = $res["idx"];
            array_push($token, $res["token"]);
            array_push($user_idx, $res["idx"]);
            array_push($user_name, $res["user_name"]);
            array_push($user_email, $res["user_email"]);
        }

        $_SESSION["login"] = true;
        echo (json_encode(array("token" => $token, "idx" => $user_idx, "user_name" => $user_name, "user_email" => $user_email)));

        $sql = "UPDATE device SET user_idx = {$_SESSION["user_idx"]} WHERE token = '{$_SESSION['token']}'";
        sql_select($dbcon, $sql, "no");
    } else {
        echo (json_encode(array("error" => 1, "content" => "값 오류"), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
    }
} else {
    echo (json_encode(array("error" => 2, "content" => "값 오류"), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
}
