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

    public function userCart(int $user_id)
    {
        $quary = $this->db->dbconn->prepare("SELECT cart.id, cart.user_id, cart.book_id, cart.amount, cart.return_date, books.title , books.releaseYear, books.available FROM cart JOIN books ON cart.book_id = books.id WHERE cart.user_id = :user_id");
        $quary->execute([':user_id'=> $user_id]);
        return $quary->fetchAll();
    }

    public function nawCartEntry(int $user_id ,int $book_id ,int $amount , string $return_date)
    {
        $quary = $this->db->dbconn->prepare("INSERT INTO cart(user_id,book_id,amount,return_date) VALUES(:user_id,:book_id,:amount,:return_date)");
        $quary->execute([':user_id'=> $user_id , ':book_id' => $book_id , ':amount' => $amount , ':return_date' => $return_date]);
        return $quary->fetchAll();
    }

    public function updateDateCartEntry(string $return_date ,int $id)
    {
        $quary = $this->db->dbconn->prepare("UPDATE cart SET return_date = :return_date WHERE id = :id");
        $quary->execute([':return_date' => $return_date,':id' => $id]);
        return $quary->fetchAll();
    }

    public function deleteCartEntry(int $id)
    {
        $quary = $this->db->dbconn->prepare("DELETE FROM cart WHERE id = :id");
        $quary->execute([':id' => $id]);
        return $quary->fetchAll();
    }
}
