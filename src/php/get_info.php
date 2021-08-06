<?php
define("ALLOW", true);
include "../../../dbconfig.php";
error_reporting(E_ALL);
ini_set("display_errors", 1);

header('Content-Type: application/json; charset=UTF-8');
$method = $_SERVER['REQUEST_METHOD'];

if ($method != "PUT" || $method != "DELETE") {
    if (!isset($_GET["comment"])) {
        header("HTTP/1.0 404 Not Found"); //url에 타이핑해서 진입시 404에러로 보안
    } else if ($_GET["comment"] == "1") {
        if (!empty($_GET["val"])) {
            $val = $_GET["val"];
        } else {
            $val = "0";
        }

        $sql = "SELECT u.idx AS user_idx, c.comment_idx, c.comment_time, c.comment_text, c.comment_like_num, (SELECT COUNT(*) FROM comment_reply AS cr WHERE c.comment_idx = cr.comment_idx) AS comment_reply_num, c.comment_share_num, (SELECT COUNT(*) FROM comment_save AS cs WHERE c.comment_idx = cs.comment_idx) AS comment_save_num, c.comment_view_num, ci.comment_img_root, ci.comment_img_name, u.user_name, u.user_belong, ui.user_img_root, ui.user_img_name FROM comment AS c INNER JOIN comment_img AS ci ON c.comment_idx = ci.comment_idx INNER JOIN user AS u ON c.user_idx = u.idx INNER JOIN user_img AS ui ON c.user_idx = ui.user_idx WHERE c.idx > (SELECT MAX(idx) FROM comment) - 4 OR c.idx BETWEEN 1+$val AND 8+$val;";

        $row = sql_select($dbcon, $sql, "no");

        $u_idx = array();
        $u_name = array();
        $u_belong = array();
        $u_img_root = array();
        $u_img_name = array();
        $c_idx = array();
        $c_time = array();
        $c_text = array();
        $c_like_num = array();
        $c_reply_num = array();
        $c_share_num = array();
        $c_save_num = array();
        $c_img_root = array();
        $c_img_name = array();

        while ($res = $row->fetch()) {
            array_push($u_idx, $res["user_idx"]);
            array_push($u_name, $res["user_name"]);
            array_push($u_belong, $res["user_belong"]);
            array_push($u_img_root, $res["user_img_root"]);
            array_push($u_img_name, $res["user_img_name"]);
            array_push($c_idx, $res["comment_idx"]);
            array_push($c_time, $res["comment_time"]);
            array_push($c_text, $res["comment_text"]);
            array_push($c_like_num, $res["comment_like_num"]);
            array_push($c_reply_num, $res["comment_reply_num"]);
            array_push($c_share_num, $res["comment_share_num"]);
            array_push($c_save_num, $res["comment_save_num"]);
            array_push($c_img_root, $res["comment_img_root"]);
            array_push($c_img_name, $res["comment_img_name"]);
        }

        echo (json_encode(array("user_idx" => $u_idx, "user_name" => $u_name, "user_belong" => $u_belong, "user_img_root" => $u_img_root, "user_img_name" => $u_img_name, "comment_idx" => $c_idx, "comment_time" => $c_time, "comment_text" => $c_text, "comment_like_num" => $c_like_num, "comment_reply_num" => $c_reply_num, "comment_share_num" => $c_share_num, "comment_save_num" => $c_save_num, "comment_img_root" => $c_img_root, "comment_img_name" => $c_img_name), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
    } else if ($_GET["comment"] == "2") {
        $sql = "SELECT u.idx AS user_idx, c.comment_idx, c.comment_time, c.comment_text, c.comment_like_num, (SELECT COUNT(*) FROM comment_reply AS cr WHERE c.comment_idx = cr.comment_idx) AS comment_reply_num, c.comment_share_num, (SELECT COUNT(*) FROM comment_save AS cs WHERE c.comment_idx = cs.comment_idx) AS comment_save_num, c.comment_view_num, ci.comment_img_root, ci.comment_img_name, u.user_name, u.user_belong, ui.user_img_root, ui.user_img_name FROM comment AS c INNER JOIN comment_img as ci ON c.comment_idx = ci.comment_idx INNER JOIN user AS u ON c.user_idx = u.idx INNER JOIN user_img as ui ON c.user_idx = ui.user_idx ORDER BY c.comment_view_num DESC LIMIT 12;";

        $row = sql_select($dbcon, $sql, "no");

        $u_idx = array();
        $u_name = array();
        $u_belong = array();
        $u_img_root = array();
        $u_img_name = array();
        $c_idx = array();
        $c_time = array();
        $c_text = array();
        $c_like_num = array();
        $c_reply_num = array();
        $c_share_num = array();
        $c_save_num = array();
        $c_view_num = array();
        $c_img_root = array();
        $c_img_name = array();

        $rest = array();
        $i = 0;
        while ($res = $row->fetch()) {
            array_push($u_idx, $res["user_idx"]);
            array_push($u_name, $res["user_name"]);
            array_push($u_belong, $res["user_belong"]);
            array_push($u_img_root, $res["user_img_root"]);
            array_push($u_img_name, $res["user_img_name"]);
            array_push($c_idx, $res["comment_idx"]);
            array_push($c_time, $res["comment_time"]);
            array_push($c_text, $res["comment_text"]);
            array_push($c_like_num, $res["comment_like_num"]);
            array_push($c_reply_num, $res["comment_reply_num"]);
            array_push($c_share_num, $res["comment_share_num"]);
            array_push($c_save_num, $res["comment_save_num"]);
            array_push($c_view_num, $res["comment_view_num"]);
            array_push($c_img_root, $res["comment_img_root"]);
            array_push($c_img_name, $res["comment_img_name"]);

            // $rest["array"]["user"][$i]["user_idx"] = $res["user_idx"];
            // $rest["array"]["user"][$i]["user_name"] = $res["user_name"];
            // $rest["array"]["user"][$i]["user_belong"] = $res["user_belong"];
            // $rest["array"]["user"][$i]["user_img_root"] = $res["user_img_root"];
            // $rest["array"]["user"][$i]["user_img_name"] = $res["user_img_name"];
            // $rest["array"]["comment"][$i]["comment_idx"] = $res["comment_idx"];
            // $rest["array"]["comment"][$i]["comment_time"] = $res["comment_time"];
            // $rest["array"]["comment"][$i]["comment_text"] = $res["comment_text"];
            // $rest["array"]["comment"][$i]["comment_like_num"] = $res["comment_like_num"];
            // $rest["array"]["comment"][$i]["comment_reply_num"] = $res["comment_reply_num"];
            // $rest["array"]["comment"][$i]["comment_share_num"] = $res["comment_share_num"];
            // $rest["array"]["comment"][$i]["comment_save_num"] = $res["comment_save_num"];
            // $rest["array"]["comment"][$i]["comment_img_root"] = $res["comment_img_root"];
            // $rest["array"]["comment"][$i]["comment_img_name"] = $res["comment_img_name"];
            // $i++;
        }

        // echo json_encode($rest, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

        echo (json_encode(array("user_idx" => $u_idx, "user_name" => $u_name, "user_belong" => $u_belong, "user_img_root" => $u_img_root, "user_img_name" => $u_img_name, "comment_idx" => $c_idx, "comment_time" => $c_time, "comment_text" => $c_text, "comment_like_num" => $c_like_num, "comment_reply_num" => $c_reply_num, "comment_share_num" => $c_share_num, "comment_save_num" => $c_save_num, "comment_view_num" => $c_view_num, "comment_img_root" => $c_img_root, "comment_img_name" => $c_img_name), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
    } else if ($_GET["comment"] == "3") {
        if (!empty($_GET["val"])) {
            $val = $_GET["val"];
        } else {
            $val = "0";
        }

        $sql = "SELECT u.idx AS user_idx, c.comment_idx, c.comment_date, c.comment_time, c.comment_text, c.comment_like_num, (SELECT COUNT(*) FROM comment_reply AS cr WHERE c.comment_idx = cr.comment_idx) AS comment_reply_num, c.comment_share_num, (SELECT COUNT(*) FROM comment_save AS cs WHERE c.comment_idx = cs.comment_idx) AS comment_save_num, c.comment_view_num, ci.comment_img_root, ci.comment_img_name, u.user_name, u.user_belong, ui.user_img_root, ui.user_img_name FROM comment AS c INNER JOIN comment_img AS ci ON c.comment_idx = ci.comment_idx INNER JOIN user AS u ON c.user_idx = u.idx INNER JOIN user_img AS ui ON c.user_idx = ui.user_idx WHERE c.comment_date = DATE_FORMAT(now(), '%Y-%m-%d') LIMIT 12;";

        $row = sql_select($dbcon, $sql, "no");

        $u_idx = array();
        $u_name = array();
        $u_belong = array();
        $u_img_root = array();
        $u_img_name = array();
        $c_idx = array();
        $c_date = array();
        $c_time = array();
        $c_text = array();
        $c_like_num = array();
        $c_reply_num = array();
        $c_share_num = array();
        $c_save_num = array();
        $c_img_root = array();
        $c_img_name = array();

        while ($res = $row->fetch()) {
            array_push($u_idx, $res["user_idx"]);
            array_push($u_name, $res["user_name"]);
            array_push($u_belong, $res["user_belong"]);
            array_push($u_img_root, $res["user_img_root"]);
            array_push($u_img_name, $res["user_img_name"]);
            array_push($c_idx, $res["comment_idx"]);
            array_push($c_date, $res["comment_date"]);
            array_push($c_time, $res["comment_time"]);
            array_push($c_text, $res["comment_text"]);
            array_push($c_like_num, $res["comment_like_num"]);
            array_push($c_reply_num, $res["comment_reply_num"]);
            array_push($c_share_num, $res["comment_share_num"]);
            array_push($c_save_num, $res["comment_save_num"]);
            array_push($c_img_root, $res["comment_img_root"]);
            array_push($c_img_name, $res["comment_img_name"]);
        }

        echo (json_encode(array("user_idx" => $u_idx, "user_name" => $u_name, "user_belong" => $u_belong, "user_img_root" => $u_img_root, "user_img_name" => $u_img_name, "comment_idx" => $c_idx, "comment_date" => $c_date, "comment_time" => $c_time, "comment_text" => $c_text, "comment_like_num" => $c_like_num, "comment_reply_num" => $c_reply_num, "comment_share_num" => $c_share_num, "comment_save_num" => $c_save_num, "comment_img_root" => $c_img_root, "comment_img_name" => $c_img_name), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
    } else if ($_GET["comment"] == "4") {
        if (!empty($_GET["val"])) {
            $val = $_GET["val"];
        } else {
            $val = "0";
        }

        $sql = "SELECT u.idx AS user_idx, c.comment_idx, c.comment_date, c.comment_time, c.comment_text, c.comment_like_num, (SELECT COUNT(*) FROM comment_reply AS cr WHERE c.comment_idx = cr.comment_idx) AS comment_reply_num, c.comment_share_num, (SELECT COUNT(*) FROM comment_save AS cs WHERE c.comment_idx = cs.comment_idx) AS comment_save_num, c.comment_view_num, ci.comment_img_root, ci.comment_img_name, u.user_name, u.user_belong, ui.user_img_root, ui.user_img_name FROM comment AS c INNER JOIN comment_img AS ci ON c.comment_idx = ci.comment_idx INNER JOIN user AS u ON c.user_idx = u.idx INNER JOIN user_img AS ui ON c.user_idx = ui.user_idx;";

        $row = sql_select($dbcon, $sql, "no");

        $u_idx = array();
        $u_name = array();
        $u_belong = array();
        $u_img_root = array();
        $u_img_name = array();
        $c_idx = array();
        $c_time = array();
        $c_text = array();
        $c_like_num = array();
        $c_reply_num = array();
        $c_share_num = array();
        $c_save_num = array();
        $c_view_num = array();
        $c_img_root = array();
        $c_img_name = array();

        while ($res = $row->fetch()) {
            array_push($u_idx, $res["user_idx"]);
            array_push($u_name, $res["user_name"]);
            array_push($u_belong, $res["user_belong"]);
            array_push($u_img_root, $res["user_img_root"]);
            array_push($u_img_name, $res["user_img_name"]);
            array_push($c_idx, $res["comment_idx"]);
            array_push($c_time, $res["comment_time"]);
            array_push($c_text, $res["comment_text"]);
            array_push($c_like_num, $res["comment_like_num"]);
            array_push($c_reply_num, $res["comment_reply_num"]);
            array_push($c_share_num, $res["comment_share_num"]);
            array_push($c_save_num, $res["comment_save_num"]);
            array_push($c_view_num, $res["comment_view_num"]);
            array_push($c_img_root, $res["comment_img_root"]);
            array_push($c_img_name, $res["comment_img_name"]);
        }

        echo (json_encode(array("user_idx" => $u_idx, "user_name" => $u_name, "user_belong" => $u_belong, "user_img_root" => $u_img_root, "user_img_name" => $u_img_name, "comment_idx" => $c_idx, "comment_time" => $c_time, "comment_text" => $c_text, "comment_like_num" => $c_like_num, "comment_reply_num" => $c_reply_num, "comment_share_num" => $c_share_num, "comment_save_num" => $c_save_num, "comment_view_num" => $c_view_num, "comment_img_root" => $c_img_root, "comment_img_name" => $c_img_name), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
    }
} else {
    header("HTTP/1.0 404 Not Found"); //url에 타이핑해서 진입시 404에러로 보안
}

