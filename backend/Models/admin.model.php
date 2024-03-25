<?php

require_once "./DbConnect.class.php";

class adminModel{
    private $db;
    private $config;

    public function __construct($config)
    {
        $this->config = $config;
        $this->db = new DbConnect($config);
    }

    public function addAdmin(string $username){
        $quary = $this->db->dbconn->prepare("UPDATE users SET isadmin = 1 WHERE username = :username");
        $quary->execute([':username' => $username]);
        return $quary->fetchAll();
    }

    public function removeAdmin(string $username)
    {
        $quary = $this->db->dbconn->prepare("UPDATE users SET isadmin = 0 WHERE username = :username");
        $quary->execute([':username' => $username]);
        return $quary->fetchAll();
    }

    public function addAuthor(string $author)
    {
        $quary = $this->db->dbconn->prepare("INSERT INTO author(author) VALUES(:author)");
        $quary->execute([':author' => $author]);
        return $quary->fetchAll();
    }

    public function addBook(string $title ,int $author_id ,int $releaseYear ,int $available)
    {
        $quary = $this->db->dbconn->prepare("INSERT INTO books(title,author_id,releaseYear,available) VALUES(:title, :author_id , :releaseYear, :available)");
        $quary->execute([':title' => $title , ':author_id' => $author_id , ':releaseYear' => $releaseYear , ':available' => $available]);
        return $quary->fetchAll();
    }

    public function delAuthor($id)
    {
        $quary = $this->db->dbconn->prepare("DELETE FROM author WHERE id = :id");
        $quary->execute([':id' => $id]);
        return $quary->fetchAll();
    }

    public function delBook($id){
        $quary = $this->db->dbconn->prepare("DELETE FROM book WHERE id = :id");
        $quary->execute([':id' => $id]);
        return $quary->fetchAll();
    }

    public function getAuthors(){
        $quary = $this->db->dbconn->prepare("SELECT * FROM author");
        $quary->execute();
        return $quary->fetchAll();
    }
}
