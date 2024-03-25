<?php

require_once "./DbConnect.class.php";

class userModel{
    private $db;
    private $config;

    public function __construct($config)
    {
        $this->config = $config;
        $this->db = new DbConnect($config);
    }

    public function getUsers()
    {
        $quary = $this->db->dbconn->prepare("SELECT * FROM users");
        $quary->execute();
        return $quary->fetchAll();
    }

    public function addUser(string $username,string $userpassword,int $isadmin){
        $quary = $this->db->dbconn->prepare("INSERT INTO users(username,userpassword,isadmin) VALUES(:username,:userpassword,:isadmin)");
        $quary->execute([':username' => $username , ':userpassword' => password_hash($userpassword,PASSWORD_DEFAULT) , ':isadmin' => $isadmin]);
        return $quary->fetchAll();
    }

    public function deleteUser($id){  //maybe will be unesued
        $quary = $this->db->dbconn->prepare("DELETE FROM users WHERE id = :id");
        $quary->execute([':id' => $id]);
        return $quary->fetchAll();
    }
}
