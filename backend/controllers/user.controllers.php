<?php
$config = require "./config.php";
require_once "./Models/user.model.php";
require_once "./util.php";

$userModel = new userModel($config);
var_dump($userModel->getUsers());