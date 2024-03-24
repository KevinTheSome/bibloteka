<?php
session_set_cookie_params(86400); //set session to expire in 24 hours
if(!isset($_SESSION)) {
    session_start();
 }

header("Access-Control-Allow-Origin: http://localhost:5173");
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With, Origin, Content-Type, X-CSRF-Token, Accept');

$config = require "./config.php";
require_once "./Models/admin.model.php";
require_once "./util.php";

$userModel = new adminModel($config);
echo json_encode($_SESSION["user"]);