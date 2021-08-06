<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);

function comment_api($url, $parameter, $return)
{
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url . $parameter);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    $status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    if ($status_code == 200) {
        $res = $response;
    }

    if ($return == 1) {
        print_r($res);
    } else {
        return $res;
    }
}

comment_api("15.164.227.114/get_info.php", "?comment=4" , 1);
?>