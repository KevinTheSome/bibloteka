<?php

require_once "./DbConnect.class.php";

class bookModel{
    private $db;
    private $config;

    public function __construct($config)
    {
        $this->config = $config;
        $this->db = new DbConnect($config);
    }

    public function addAuthor($author)
    {
        $quary = $this->db->dbconn->prepare("INSERT INTO author(author) VALUES(':author')");
        $quary->execute([[':author' => $author]]);
        return $quary->fetchAll();
    }

    public function addBook($title , $author_id , $releaseYear , $available){
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
}
