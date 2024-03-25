<?php
require_once "./session.php";
$config = require "./config.php";
require_once "./Models/book.model.php";
require_once "./Models/cart.model.php";
require_once "./util.php";

$bookModel = new bookModel($config);

if (isset($_SESSION["user"])){
    echo json_encode(["books" => $bookModel->getBooks(),"user"=> $_SESSION["user"]]);
}else{
    echo json_encode(["books" => $bookModel->getBooks(),"user"=> null]);
}

if ($_SERVER["REQUEST_METHOD"] == "POST")
{
    $data = json_decode(file_get_contents("php://input"), true);
    $cartModel = new cartModel($config);
    $cartModel->nawCartEntry($data["user_id"],$data["book_id"],$data["amount"],$data["return_date"]);
    $bookModel->updateAvailableBook($data["available"],$data["book_id"]);
}
