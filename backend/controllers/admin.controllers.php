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

    if(parse_url($_SERVER['REQUEST_URI'])["path"] == "/admin/removebook")
    {
        if(isset($data["book_id"]))
        {
            $adminModel->removeBook($data["book_id"]);
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

    if(parse_url($_SERVER['REQUEST_URI'])["path"] == "/admin/removeauthor")
    {
        if(isset($data["author_id"]))
        {
            $adminModel->removeAuther($data["author_id"]);
        }else{
            echo "Error Not evrything is set";
        }
    }

    if(parse_url($_SERVER['REQUEST_URI'])["path"] == "/admin/addadmin")
    {
        if(isset($data["username"]))
        {
            $adminModel->addAdmin($data["username"]);
        }else{
            echo "Error Not evrything is set";
        }
    }

    if(parse_url($_SERVER['REQUEST_URI'])["path"] == "/admin/removeadmin")
    {
        if(isset($data["username"]))
        {
            $adminModel->removeAdmin($data["username"]);
        }else{
            echo "Error Not evrything is set";
        }
    }

}else{
    echo json_encode(["user"=>$_SESSION["user"],"authors"=>$adminModel->getAuthors(),"books"=>$adminModel->getBooks()]);
}