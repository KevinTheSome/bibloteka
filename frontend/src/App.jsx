import { useState,useEffect } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar'
import Book from './components/Book'
import Footer from './components/Footer'

function App() {
  const [data, setData] = useState([])
  const [books, setBooks] = useState([])
  const [user, setUser] = useState([])

  axios.defaults.withCredentials = true;

  useEffect(() => {
    try {
      axios.get("http://localhost:8888/")
      .then(function (response){
        setData(response.data);
        setBooks(response.data.books);
        setUser(response.data.user);
      })  
    } catch (error) {
      console.error(error)
    }
  },[])

  const booksJSX = books.map((value, key) => {
    return <Book key={key} book={value} user={user}/>;
  })

  return (
    <>
      <div className="App">
        <Navbar />
        <div className='grid h-screen'>
          {booksJSX}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
