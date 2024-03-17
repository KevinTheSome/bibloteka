<?php

require_once "./DbConnect.class.php";

class cartModel{
    private $db;
    private $config;

    public function __construct($config)
    {
        $this->config = $config;
        $this->db = new DbConnect($config);
    }

    public function userCart($user_id)
    {
        $quary = $this->db->dbconn->prepare("SELECT * FROM cart WHERE user_id = :user_id");
        $quary->execute([':user_id'=> $user_id]);
        return $quary->fetchAll();
    }

    public function nawCartEntry($user_id , $book_id , $amount , $return_date)
    {
        $quary = $this->db->dbconn->prepare("INSERT INTO cart(user_id,book_id,amount,return_date) VALUES(:user_id,:book_id,:amount,:return_date)");
        $quary->execute([':user_id'=> $user_id , ':book_id' => $book_id , ':amount' => $amount , ':return_date' => $return_date]);
        return $quary->fetchAll();
    }
}
