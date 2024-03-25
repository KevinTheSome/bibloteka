<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include "./util.php";

$route = parse_url($_SERVER['REQUEST_URI'])["path"];

switch ($route) {
    case '':
    case '/':
        require "./Controllers/book.controllers.php";
        break;
    case '/books':
        require "./Controllers/book.controllers.php";
        break;
    case '/books/rent':
        require "./Controllers/book.controllers.php";
        break;
    case '/register':
        require "./Controllers/register.controllers.php";
        break;
    case '/login':
        require "./Controllers/login.controllers.php";
        break;
    case '/cart':
        require "./Controllers/cart.controllers.php";
        break;
    case '/cart/update':
        require "./Controllers/cart.controllers.php";
        break;
    case '/cart/remove':
        require "./Controllers/cart.controllers.php";
        break;
    case '/admin':
        require "./Controllers/admin.controllers.php";
        break;
    case '/admin/addbook':
        require "./Controllers/admin.controllers.php";
        break;
    case '/admin/removebook':
        require "./Controllers/admin.controllers.php";
        break;
    case '/admin/addauthor':
        require "./Controllers/admin.controllers.php";
        break;
    case '/admin/removeauthor':
        require "./Controllers/admin.controllers.php";
        break;
    case '/admin/addadmin':
        require "./Controllers/admin.controllers.php";
        break;
    case '/admin/removeadmin':
        require "./Controllers/admin.controllers.php";
        break;
        
    default:
        http_response_code(404);
        break;
}
