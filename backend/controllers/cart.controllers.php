<?php
$config = require "./config.php";
require_once "./Models/cart.model.php";
require_once "./util.php";

$bookModel = new bookModel($config);
echo json_encode($bookModel->getBooks());