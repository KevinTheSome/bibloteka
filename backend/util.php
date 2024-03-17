<?php

function fixBool(bool $bool)  //php bools are stupid and now its a string
{
    if ($bool == true){
        return "TRUE";
    }else{
        return "FALSE";
    }
}

function dd($value) //Dump and Die
{
    echo "<pre>";
    var_dump($value);
    echo "</pre>";
    die();
}

function d($value) //Dump
{
    echo "<pre>";
    var_dump($value);
    echo "</pre>";
}