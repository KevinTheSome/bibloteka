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

    if(isset($data["username"]) and isset($data["password"]))
    {
        $userModel = new userModel($config);

        if($userModel->checkIfUserExists($data["username"]))
        {
            echo json_encode(["error" => "User already exists"]);

        }else{
            $userModel->addUser($data["username"], $data["password"], 0);
        }
        
    }else{
        echo json_encode(["error" => "Not all fields are set"]);
    }

}else{
    http_response_code(404);
}