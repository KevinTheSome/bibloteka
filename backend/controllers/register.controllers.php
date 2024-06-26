<?php

/*
thx: https://stackoverflow.com/questions/57901808/cors-preflight-request-doesnt-pass-access-control-check-it-does-not-have-http
idk why it works tbh
*/

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
header('Content-Type: application/json');
$method = $_SERVER['REQUEST_METHOD'];
if ($method == "OPTIONS") {
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
header("HTTP/1.1 200 OK");
die();
}

$config = require "./config.php";
require_once "./Models/user.model.php";
require_once "./util.php";

if ($_SERVER["REQUEST_METHOD"] == "POST")
{
    $data = json_decode(file_get_contents("php://input"), true);
    $userModel = new userModel($config);
    $errors = [];
    
    if(!isset($data["username"]) and !isset($data["password"]) and !isset($data["email"]))
    {
        $errors[] = "Not all fields are set";
        echo json_encode(["error" => "Not all fields are set"]);
    }

    if(filter_var($email, FILTER_VALIDATE_EMAIL)) 
    {
        $errors[] = "Email is not valid";
        echo json_encode(["error" => "Email is not valid"]);
    }

    if($userModel->checkIfUserExists($data["username"]))
    {
        $errors[] = "User already exists";
        echo json_encode(["error" => "User already exists"]);
    }
    
    if($errors == []){
        $userModel->addUser($data["username"], $data["password"], $data["email"], 0);
    }

}else{
    http_response_code(404);
}