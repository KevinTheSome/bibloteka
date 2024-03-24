import { useState,useEffect } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar'
import Book from './components/Book'
import Footer from './components/Footer'

function Admin() {
  const [data, setData] = useState([])
  axios.defaults.withCredentials = true;

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

  useEffect(() => {
    feachbackend()
  },[])
  console.log(data);

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

export default Admin
