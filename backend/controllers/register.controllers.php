<?php
session_start();
header("Access-Control-Allow-Origin: http://localhost:5173");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: X-Requested-With, Origin, Content-Type, X-CSRF-Token, Accept');

$config = require "./config.php";
require_once "./Models/user.model.php";
require_once "./util.php";

if ($_SERVER["REQUEST_METHOD"] == "POST")
{
    $data = json_decode(file_get_contents("php://input"), true);
    $userModel = new userModel($config);
    $userModel->addUser($data["username"], $data["password"], 0);
    echo "OK";
}else{
    http_response_code(404);
}