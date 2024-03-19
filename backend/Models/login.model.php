<?php

require_once "./DbConnect.class.php";

class loginModel{
    private $db;
    private $config;

    public function __construct($config)
    {
        $this->config = $config;
        $this->db = new DbConnect($config);
    }

    public function loginUser(string $username ,string $password)
    {
        $quary = $this->db->dbconn->prepare("SELECT * FROM users WHERE username = :username");
        $quary->execute([':username' => $username]);
        $user = $quary->fetch();
        if($user && password_verify($password , $user['userpassword'])){
            return $user;
        }
        return false;
    }
}
