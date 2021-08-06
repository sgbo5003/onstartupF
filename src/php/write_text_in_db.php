<?php
define("ALLOW", true);
include "../../../dbconfig.php";
date_default_timezone_set('Asia/Seoul');
error_reporting(E_ALL);
ini_set("display_errors", 1);

$day = date("Y-m-d");
$time = date("H:i");
$comment_text = $_POST["comment1"];
$comment_url = $_POST["comment2"];
$comment_select = $_POST["comment_select"];

$sql = "SELECT MAX(idx) FROM comment_img;";
$row = sql_select($dbcon, $sql, "arr")[0] + 1;

if ($_FILES["comment_file"]["error"] != "4") {
    $file_name = $_FILES["comment_file"]["name"];
    $file_type = $_FILES["comment_file"]["type"];
    $file_tmp = $_FILES["comment_file"]["tmp_name"];
    $error = $_FILES["comment_file"]["error"];
    $file_size = $_FILES["comment_file"]["size"];

    $file_target_root = "/var/www/html/web/src/images/img_comment/";
    $file_target = $file_target_root . $file_name;
    move_uploaded_file($file_tmp, $file_target);

    $file_target_root = "./src/images/img_comment/";

    $sql = "INSERT INTO comment_img (idx, comment_idx, comment_img_root, comment_img_name)";
    $sql .= "VALUES($row, $row, '$file_target_root', '$file_name');";
} else {
    $sql = "INSERT INTO comment_img (idx, comment_idx)";
    $sql .= "VALUES($row, $row);";
}

if (sql_select($dbcon, $sql, "no")) {
    $sql = "INSERT INTO comment (idx, comment_idx, user_idx, comment_date, comment_time, comment_text, comment_url, comment_kind)";
    $sql .= "VALUES($row, $row, $row, '$day', '$time', '$comment_text', '$comment_url', '$comment_select');";

    if (sql_select($dbcon, $sql, "no")) {
        // header('Location: http://15.164.227.114');
        echo (json_encode(array("complete" => 1, "content" => "글 쓰기 완료"), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
    } else {
        echo (json_encode(array("error" => 1, "content" => "값 오류"), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
    }
} else {
    echo (json_encode(array("error" => 2, "content" => "값 오류"), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
}
