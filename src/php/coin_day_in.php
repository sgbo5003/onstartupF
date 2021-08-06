<?php
define("ALLOW", true);
include "../../../dbconfig.php";
error_reporting(E_ALL);
ini_set("display_errors", 1);

$month = date("n");
$day = date("j");
$coin = 0;

$method = $_SERVER['REQUEST_METHOD'];

if ($method != "PUT" || $method != "DELETE") {
    if (!empty($_GET["coin_today"])) {
        $coin_today = $_GET["coin_today"];
    } else if (!empty($_POST["coin_today"])) {
        $coin_today = $_POST["coin_today"];
    }

    if ($day != $coin_today) {
        // header('Location: http://15.164.227.114');
        echo (json_encode(array("error" => 1, "content" => "날짜가 불일치"), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
    } else {
        $sql = "SELECT * FROM coin_day WHERE user_idx = 1001 AND month = '$month' AND day = '$day'";

        $row = sql_select($dbcon, $sql, "arr");

        if (!empty($row["idx"])) {
            echo (json_encode(array("error" => 2, "content" => "이미 출석체크한 유저"), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
        } else {
            if ($coin_today == 1 || $coin_today == 4 || $coin_today == 6 || $coin_today == 9 || $coin_today == 17 || $coin_today == 20 || $coin_today == 22 || $coin_today == 25 || $coin_today == 30) {
                $coin = 1;
            } else if ($coin_today == 13 || $coin_today == 29) {
                $coin = 2;
            }
            $sql = "INSERT INTO coin_day (user_idx, month, day, coin)";
            $sql .= "VALUES(1001, $month, $coin_today, $coin);";
            $sql .= "ALTER TABLE coin_day AUTO_INCREMENT=1; SET @COUNT = 0; UPDATE coin_day SET idx = @COUNT:=@COUNT+1;";

            sql_select($dbcon, $sql, "no");

            $sql = "SELECT user_idx, SUM(coin) AS coin FROM coin_day GROUP BY user_idx";

            $row = sql_select($dbcon, $sql, "no");
            while ($res = $row->fetch()) {
                $sql = "UPDATE user SET user_coin = {$res['coin']} WHERE idx = {$res['user_idx']}";
                sql_select($dbcon, $sql, "no");
            }
            echo (json_encode(array("complete" => 1, "content" => "출석체크 완료"), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
        }
    }
} else {
    header("HTTP/1.0 404 Not Found");
}
