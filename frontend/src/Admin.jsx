import { useState,useEffect } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar'
import Book from './components/Book'
import Footer from './components/Footer'
import { useNavigate } from "react-router-dom";

function Admin() {
  const [data, setData] = useState([])
  const [title, setTitle] = useState("Title")
  const [author, setAuthor] = useState(1)
  const [release, setRelease] = useState(2024)
  const [available, setAvailable] = useState(1)
  const [newauthor, setnewAuthor] = useState("Author")
  const [authors, setAuthors] = useState([]) //Authors form the backend

  axios.defaults.withCredentials = true;
  const navigate = useNavigate();
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  async function addBook() {
    console.log("title: " + title)
    console.log("author_id: " + author)
    console.log("released: " + release)
    console.log("available: " + available)
    try {
      axios.post("http://localhost:8888/admin/addbook", {
        title: title,
        author_id: author,
        releaseYear: release,
        available: available
      })
      .then(function (response) {
        console.log(response.data)
      })
    } catch (error) {
      console.error(error)
    }
  }

  async function addAuthor() {
    try {
      axios.post("http://localhost:8888/admin/addauthor", {
        author: newauthor,
      })
      .then(function (response) {
        console.log(response.data)
      })
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    try {
      axios.get("http://localhost:8888/admin")
      .then(function (response){
        setAuthors(response.data)
      })
    } catch (error) {
      console.error(error)
    }
  },[])

  return (
    <>
      <div className="App">
        <Navbar />
        <div className='grid '>

          <form className='grid border-4 border-black-800'>
            <label>
              Title:
              <input type="text" className="w-1/12 border-2 border-gray-700" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </label>
            <label>
              Author id:
              <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                {authors.map((author) => <option key={author.id} value={author.id} >{author.author}</option>)}
              </select>
            </label>
            <label>
              Releasd:
              <input type="number" className="w-1/12 border-2 border-gray-700" placeholder="Releasd Year" value={release} onChange={(e) => setRelease(e.target.value)}/>
            </label>
            <label>
              Available:
              <input type="number" className="w-1/12 border-2 border-gray-700" placeholder="Available" value={available} onChange={(e) => setAvailable(e.target.value)}/>
            </label>
            <input type="button" value="Add Book" onClick={addBook}/>
          </form>

          <form className='grid border-4 border-black-800'>
            <label>
              Author:
              <input type="text" className="w-1/12 border-2 border-gray-700" placeholder="Title" value={newauthor} onChange={(e) => setnewAuthor(e.target.value)}/>
            </label>
            <input type="button" value="Add Author" onClick={addAuthor}/>
          </form>

        </div>
        <Footer />
      </div>
    </>
  )
}

export default Admin
