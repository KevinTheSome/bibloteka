import { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function Register() {
  const [username , setUsername] = useState("")
  const [password , setPassword] = useState("")
  const navigate = useNavigate();

  async function createAccount(){
    try {
      axios.post("http://localhost:8888/register", {
        username: username, password: password,
      })
      .then(function (response) {
        if (response.status === 200) {
          return navigate("/login");
        }
        return null;
      })
    } catch (error) {
      console.error(error)
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
              <input required type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
              Password:
              <input required type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
              <input type="button" value="Register" onClick={createAccount} />
          </form>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Register
