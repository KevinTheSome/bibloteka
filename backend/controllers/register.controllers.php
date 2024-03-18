<?php
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
