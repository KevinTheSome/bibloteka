import { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function Register() {
  const [error , setError] = useState("")
  const [username , setUsername] = useState("")
  const [password , setPassword] = useState("")
  const [email , setEmail] = useState("")
  const navigate = useNavigate();

  async function check(){
    if (username == "" || password == "" || email == ""){
      setError("Emtpy filds not allowed!")
    }else{
      if(username == "")
      {
        setError("Emtpy username not allowed!")
      }
      else if (password == "")
      {
        setError("Emtpy password not allowed!")
      } 
      else if (email == "")
      {
        setError("Emtpy email not allowed!")
      }else {
        await createAccount()
      }
    }
  }

  async function createAccount(){

    try {
      await axios.post("http://localhost:8888/register", {
        username: username, password: password, email: email,
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
        <div className="min-h-screen flex items-center justify-center w-full">
          <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
            <h1 className="text-2xl font-bold text-center mb-4">Hello newcomer!</h1>
            <form>
              <div className="mb-4">
                <label for="email" className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                <input type="email" id="email" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Your username" required minLength="3" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="mb-4">
                <label for="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" id="email" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Your@email.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="mb-4">
                <label for="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input type="password" id="password" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" required value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="flex items-center justify-between mb-4">
                <a href='/login' className="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Already have a account</a>
              </div>
              <p className='text-red-500'>{error}</p>
              <input type="button" value="Register" onClick={check} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"/>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Register
