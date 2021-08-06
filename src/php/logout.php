<?php
define("ALLOW", true);
include "../../../dbconfig.php";
session_start();
error_reporting(E_ALL);
ini_set("display_errors", 1);

session_destroy();
header('Location: http://15.164.227.114');