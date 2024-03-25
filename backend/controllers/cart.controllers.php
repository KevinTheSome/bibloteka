<?php
require_once "./session.php";
$config = require "./config.php";
require_once "./Models/cart.model.php";
require_once "./util.php";

$cartModel = new cartModel($config);
$data = json_decode(file_get_contents("php://input"), true);

if ($_SERVER["REQUEST_METHOD"] == "POST")
{
    if(parse_url($_SERVER['REQUEST_URI'])["path"] == "/cart/update")
    {
        if(isset($data["date"]) && isset($data["id"])){
            $cartModel->updateDateCartEntry($data["date"],$data["id"]);
        }else{
            echo "Error Not evrything is set";
        }
    }

    if(parse_url($_SERVER['REQUEST_URI'])["path"] == "/cart/remove")
    {
        if(isset($data["id"])){
            $cartModel->deleteCartEntry($data["id"]);
        }else{
            echo "Error Not evrything is set";
        }
    }

}else{
    if(isset($_SESSION["user"])){
        echo json_encode(["user" => $_SESSION["user"],"cart" => $cartModel->userCart($_SESSION["user"]["id"])]);
    }else{
        echo "you are not loged in yet";
    }
}
