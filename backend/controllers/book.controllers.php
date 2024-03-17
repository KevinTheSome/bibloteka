<?php
$config = require "./config.php";
require_once "./Models/book.model.php";
require_once "./util.php";

$bookModel = new bookModel($config);
echo json_encode($bookModel->getBooks());