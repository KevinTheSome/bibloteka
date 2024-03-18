import { useState,useEffect } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function Login() {
  const [data, setData] = useState([])
  const [username , setUsername] = useState("")
  const [password , setPassword] = useState("")

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
        <div className='grid justify-center content-center'>
          <h1 className='text-3xl font-bold'>Login</h1>
          <form className='grid border-4 border-black-800 '>
            <label>
              Username:
              <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
              Password:
              <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
              <input type="button" value="Login" />
          </form>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Login
