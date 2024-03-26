<?php
require_once "./session.php";

$config = require "./config.php";
require_once "./Models/login.model.php";
require_once "./util.php";

if ($_SERVER["REQUEST_METHOD"] == "POST")
{
    $data = json_decode(file_get_contents("php://input"), true);

    if(isset($data["username"]) and isset($data["password"]))
    {
        $userModel = new loginModel($config);
        $user = $userModel->loginUser($data["username"],$data["password"]);
        if($user != false){
                $_SESSION["user"] = $user;
                echo json_encode(["user" => $_SESSION["user"]]);
        }else{
            echo json_encode(["error" => "Invalid username or password"]);
        }
    }else{
        echo json_encode(["error" => "Not all fields are set"]);
    }

}