<?php
require_once "./session.php";
$config = require "./config.php";
require_once "./Models/cart.model.php";
require_once "./util.php";

$cartModel = new cartModel($config);
$data = json_decode(file_get_contents("php://input"), true);

echo json_encode($cartModel->userCart($_SESSION["user"]["id"]));