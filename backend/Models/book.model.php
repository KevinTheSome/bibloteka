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

    public function getBooks()
    {
        $quary = $this->db->dbconn->prepare("SELECT * FROM books");
        $quary->execute();
        return $quary->fetchAll();
    }

    public function addBook($title , $author_id , $releaseYear , $available){
        $quary = $this->db->dbconn->prepare("INSERT INTO books(title,author_id,releaseYear,available) VALUES(':title', :author_id , :releaseYear, :available)");
        $quary->execute([[':title' => $title , ':author_id' => $author_id , ':releaseYear' => $releaseYear , ':available' => $available]]);
        return $quary->fetchAll();
    }
}
