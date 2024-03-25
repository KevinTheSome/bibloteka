import { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import OneCart from './components/OneCart';

function Cart() {
  const [cart, setCart] = useState([])
  const [user, setUser] = useState({})
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

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

  if(getCookie("PHPSESSID") == ""){
    navigate("/login")
  }

  useEffect(() => {
    try {
      axios.get("http://localhost:8888/cart")
      .then(function (response){
        setCart(response.data.cart)
        setUser(response.data.user)
        console.log(response.data)
      })  
    } catch (error) {
      console.error(error)
    }
  },[])


  const CartJSX = cart.map((value, key) => {
    return <OneCart key={key} cart={value} user={user}/>;
  })

  return (
    <>
      <div className="App">
        <Navbar />
        <div className='grid'>
        {CartJSX}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Cart
