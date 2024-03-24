import { useState,useEffect } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar'
import Book from './components/Book'
import Footer from './components/Footer'
import { useNavigate } from "react-router-dom";

function Admin() {
  const [data, setData] = useState([])
  axios.defaults.withCredentials = true;
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

  async function feachbackend(){
    try {
      axios.get("http://localhost:8888/admin")
      .then(function (response){
        setData(response.data);
      })  
    } catch (error) {
      console.error(error)
    }
  }

  function rentBook(){
    if(getCookie("PHPSESSID") != ""){
      useEffect(() => {
        feachbackend()
      },[])
    }else{
      navigate("/login")
    }
  }

  rentBook();
  console.log(data);

  return (
    <>
      <div className="App">
        <Navbar />
        <div className='grid '>
          <form>
            <label>
              Title:
              <input type="text" className="w-1/12 border-2 border-gray-700" placeholder="Title" />
            </label>
            <label>
              Author id:
              <input type="text" className="w-1/12 border-2 border-gray-700" placeholder="Title" />
            </label>
            <label>
              Releasd:
              <input type="number" className="w-1/12 border-2 border-gray-700" placeholder="Title" />
            </label>
            <label>
              Available:
              <input type="number" className="w-1/12 border-2 border-gray-700" placeholder="Title" />
            </label>
            <button onClick={null} >Add Book</button>
          </form>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Admin
