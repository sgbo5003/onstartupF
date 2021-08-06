<?php
define("ALLOW", true);
include "../../../dbconfig.php";
error_reporting(E_ALL);
ini_set("display_errors", 1);

if (!empty($_POST["inquiry_email"]) || !empty($_POST["inquiry_select"]) || !empty($_POST["inquiry_text"])) {
    $inquiry_email = $_POST["inquiry_email"];
    $inquiry_select = $_POST["inquiry_select"];
    $inquiry_text = $_POST["inquiry_text"];

    $sql = "INSERT INTO question (question_email_address, question_kind, question_text)";
    $sql .= "VALUES('$inquiry_email', '$inquiry_select', '$inquiry_text');";

    if (sql_select($dbcon, $sql, "no")) {
        // header('Location: http://15.164.227.114');
        echo (json_encode(array("complete" => 1, "content" => "문의 완료"), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
    } else {
        echo (json_encode(array("error" => 1, "content" => "값 오류"), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
    }
} else {
    echo (json_encode(array("error" => 2, "content" => "값 오류"), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
}
?>