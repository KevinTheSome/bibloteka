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
require_once "./Models/login.model.php";
require_once "./util.php";

if ($_SERVER["REQUEST_METHOD"] == "POST")
{
    $data = json_decode(file_get_contents("php://input"), true);
    $userModel = new loginModel($config);
    $user = $userModel->loginUser($data["username"],$data["password"]);
    if($user != false){
            $_SESSION["user"] = $user;
            echo json_encode(["user" => $_SESSION["user"]]);
    }else{
        json_encode(["error" => "Invalid username or password"]);
    }
}