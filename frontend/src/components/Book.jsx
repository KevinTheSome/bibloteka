import { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Book(props) {
  const navigate = useNavigate();

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function rentBook(){
    if(getCookie("PHPSESSID") != "" && props.book.available == 1){
      console.log("You got the book") //todo
    }else{
      navigate("/login")
    }
  } 

  return (
    <> 
        <div className='grid border-gray-800 border-4 m-4 w-4/12 '>
            <p>Title: {props.book.title}</p>
            <p>Author: {props.book.author}</p>
            <p>Releasd: {props.book.releaseYear}</p>
            <p>Available:{props.book.available}</p>
            <button onClick={rentBook} className='bg-slate-500 text-white'>Rent</button>
        </div>
    </> 
  )
}

export default Book
