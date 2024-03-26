import { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function Register() {
  const [error , setError] = useState("")
  const [username , setUsername] = useState("")
  const [password , setPassword] = useState("")
  const navigate = useNavigate();

  async function check(){
    if (username == "" || password == ""){
      setError("Emtpy filds not allowed!")
    }else{
      if(username == "")
      {
        setError("Emtpy username not allowed!")
      }
      else if (password == "")
      {
        setError("Emtpy password not allowed!")
      } else {
        await createAccount()
      }
    }
  }

  async function createAccount(){

    try {
      await axios.post("http://localhost:8888/register", {
        username: username, password: password,
      })
      .then(function (response) {
        setError("")
        setError(response.data.error)
      })
    } catch (error) {
      console.error(error)
    }

    if (error.length == 0) {
      return navigate("/login");
    }

  }

  return (
    <>
      <div className="App">
        <Navbar />
        <div className='grid justify-center content-center'>
          <h1 className='text-3xl font-bold'>Register</h1>
          <form className='grid border-4 border-black-800 '>
            <label>
              Username:
              <input required type="text" name="username" minLength="3" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
              Password:
              <input required type="password" minLength="3" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
              <input type="button" value="Register" onClick={check} className='cursor-pointer bg-blue-700 text-white'/>
          </form>
          <p className='text-red-500'>{error}</p>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Register
