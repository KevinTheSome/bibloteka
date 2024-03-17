import { useState,useEffect } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar'

function Login() {
  const [data, setData] = useState([])

  async function feachbackend(){
    try {
      axios.get("http://localhost:8888/login")
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
        <h1 className='text-3xl font-bold'>Hello From the Login</h1>
      </div>
    </>
  )
}

export default Login
