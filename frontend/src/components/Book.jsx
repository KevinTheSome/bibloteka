import { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Book(props) {
  const [bookAvelabel, setBookAvelabel] = useState(props.book.available)
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

  function getNextWeek(){
    const date = new Date()
    date.setDate(new Date().getDate() + 7)

    const year = date.getFullYear();
    const month = `0${date.getMonth() + 1}`.slice(-2);
    const day = `0${date.getDate()}`.slice(-2);
    return `${year}-${month}-${day}`;
  }

  function rentBook(){
    if(getCookie("PHPSESSID") != "" && props.book.available > 0){
      try {
        axios.post("http://localhost:8888/books/rent", {
          user_id: props.user.id,
          book_id: props.book.id,
          amount: 1,
          return_date: getNextWeek(),
          available: bookAvelabel,
          book_id: props.book.id
        })
        .then(function (response) {
          if (response.status === 200) {
            return navigate("/");
          }
          return null;
        })
        setBookAvelabel(bookAvelabel-1)
      } catch (error) {
        console.error(error)
      }

    }else{
      navigate("/login")
    }
  } 

  return (
    <> 
        <div className='grid border-gray-800 border-4 m-4 w-4/12 max-h-40'>
            <h1 className='text-2xl'>{props.book.title}</h1>
            <h2 className='text-1xl'>{props.book.author}</h2>
            <p>First published: {props.book.releaseYear}</p>
            <p>Available:{bookAvelabel}</p>
            <button onClick={rentBook} className='bg-indigo-700 hover:bg-indigo-500 text-white'>Rent</button>
        </div>
    </> 
  )
}

export default Book
