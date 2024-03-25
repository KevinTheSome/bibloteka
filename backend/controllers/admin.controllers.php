<?php
require_once "./session.php";
$config = require "./config.php";
require_once "./Models/admin.model.php";
require_once "./util.php";

$adminModel = new adminModel($config);



if ($_SERVER["REQUEST_METHOD"] == "POST")
{
    $data = json_decode(file_get_contents("php://input"), true);

    if(parse_url($_SERVER['REQUEST_URI'])["path"] == "/admin/addbook")
    {
        if(isset($data["title"]) && isset($data["author_id"]) && isset($data["releaseYear"]) && isset($data["available"]))
        {
            $adminModel->addBook($data["title"],$data["author_id"],$data["releaseYear"],$data["available"]);
        }else{
            echo "Error Not evrything is set";
        }
    }

    if(parse_url($_SERVER['REQUEST_URI'])["path"] == "/admin/addauthor")
    {
        if(isset($data["author"]))
        {
            $adminModel->addAuthor($data["author"]);
        }else{
            echo "Error Not evrything is set";
        }
    }
}else{
    echo json_encode($adminModel->getAuthors());
}