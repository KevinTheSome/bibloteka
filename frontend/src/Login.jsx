import { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function Login() {
  const [username , setUsername] = useState("")
  const [error , setError] = useState("")
  const [password , setPassword] = useState("")
  const navigate = useNavigate();

  async function check(){
    if (username == "" || password == ""){
      setError("Emtpy filds not allowed!")
    }else{
      await loginAccount()
    }
  }

  async function loginAccount(){
    try {
      axios.post("http://localhost:8888/login", {
        username: username, password: password,
      },{
        withCredentials: true,
      })
      .then(function (response) {
        setError(response.data.error)

        if (response.data.error == "" || response.data.error == null) {
          navigate("/")
        }
        
      })
    } catch (error) { 
      console.error(error)
    }

  }

  return (
    <>
      <div className="App">
        <Navbar />
        <div className='grid h-screen justify-center content-center'>
          <h1 className='text-3xl font-bold'>Login</h1>
          <form className='grid border-4 border-black-800 '>
            <label>
              Username:
              <input required type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
              Password:
              <input required type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
              <input type="button" value="Login" onClick={check} className='cursor-pointer bg-blue-700 text-white'/>
          </form>
          <p className='text-red-500'>{error}</p>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Login
