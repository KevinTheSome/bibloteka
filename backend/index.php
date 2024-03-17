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
    case '/login':
        require "./Controllers/user.controllers.php";
        break;
    case '/register':
        require "./Controllers/user.controllers.php";
        break;
    case '/cart':
        require "./Controllers/cart.controllers.php";
        break;
    case '/admin':
            require "./Controllers/admin.controllers.php";
            break;
        
    default:
        http_response_code(404);
        break;
}
