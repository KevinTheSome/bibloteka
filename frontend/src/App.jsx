import { useState,useEffect } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar'
import Book from './components/Book'
import Footer from './components/Footer'

function App() {
  const [data, setData] = useState([])

  async function feachbackend(){
    try {
      axios.get("http://localhost:8888/")
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

  const books = data.map((value, key) => {
    return <Book key={key} book={value}/>;
  })

  return (
    <>
      <div className="App">
        <Navbar />
        <div className='grid '>
          {books}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
