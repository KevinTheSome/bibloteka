import { useState,useEffect } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar'
import Book from './components/Book'
import Footer from './components/Footer'

function UserControl() {
  const [books, setbooks] = useState([])
  const [user, setuser] = useState([])
  axios.defaults.withCredentials = true;

  async function feachbackend(){
    try {
      axios.get("http://localhost:8888/")
      .then(function (response){
        setbooks(response.data["books"]);
        setuser(response.data["user"]);
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
        <div className='grid '>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default UserControl
