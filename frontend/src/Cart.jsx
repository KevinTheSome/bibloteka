import { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Navbar from './components/Navbar'
import Book from './components/Book'
import Footer from './components/Footer'

function Cart() {
  const [data, setData] = useState([])
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
    return false;
  }

  async function feachbackend(){
    try {
      axios.get("http://localhost:8888/")
      .then(function (response){
        setData(response.data);
      })  
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    feachbackend()
  },[])

  return (
    <>
      <div className="App">
        <Navbar />
        {getCookie("PHPSESSID") != false
        ? <p>Hello you are loged in</p>
        : navigate("/login")
        }
        <Footer />
      </div>
    </>
  )
}

export default Cart
