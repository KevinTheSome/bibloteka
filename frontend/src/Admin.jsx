import { useState,useEffect } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar'
import Book from './components/Book'
import Footer from './components/Footer'
import { useNavigate } from "react-router-dom";

function Admin() {
  const [user, setUser] = useState({})
  const [data, setData] = useState([])
  const [title, setTitle] = useState("Title")
  const [author, setAuthor] = useState(1)
  const [release, setRelease] = useState(2024)
  const [available, setAvailable] = useState(1)
  const [newauthor, setnewAuthor] = useState("")
  const [authors, setAuthors] = useState([]) //Authors form the backend
  const [book_id, setBook_id] = useState(0)
  const [books, setBooks] = useState([]) //Books form the backend
  const [author_id , setAuthor_id] = useState(0)
  const [addAdminUsername , setAddAdminUsername] = useState("")
  const [removeAdminUsername , setRemoveAdminUsername] = useState("")

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

  useEffect(() => {
    if(getCookie("PHPSESSID") == "") {
      navigate("/")
    }
  },[])

  async function addBook() {
    try {
      axios.post("http://localhost:8888/admin/addbook", {
        title: title,
        author_id: author,
        releaseYear: release,
        available: available
      })
      .then(function (response) {
        console.log(response.data)
        navigate("/admin")
      })
    } catch (error) {
      console.error(error)
    }
  }

  async function removeBook() {
    console.log(book_id)
    try {
      axios.post("http://localhost:8888/admin/removebook", {
        book_id: book_id,
      })
      .then(function (response) {
        console.log(response.data)
        navigate("/admin")
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
        navigate("/admin")
      })
    } catch (error) {
      console.error(error)
    }
  }

  async function removeAuthor() {
    try {
      axios.post("http://localhost:8888/admin/removeauthor", {
        author_id: author_id,
      })
      .then(function (response) {
        console.log(response.data)
        navigate("/admin")
      })
    } catch (error) {
      console.error(error)
    }
  }

  async function addAdmin() {
    try {
      axios.post("http://localhost:8888/admin/addadmin", {
        username: addAdminUsername,
      })
      .then(function (response) {
        console.log(response.data)
        navigate("/admin")
      })
    } catch (error) {
      console.error(error)
    }
  }

  async function removeAdmin() {
    try {
      axios.post("http://localhost:8888/admin/removeadmin", {
        username: removeAdminUsername,
      })
      .then(function (response) {
        console.log(response.data)
        navigate("/admin")
      })
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {

    async function getData(){
      try {
        await axios.get("http://localhost:8888/admin")
        .then(function (response){
          setUser(response.data.user)
          setAuthors(response.data.authors)
          setBooks(response.data.books)
        })
      } catch (error) {
        console.error(error)
      }
    }

    getData()

  },[])

  if(user.isadmin == 0) {
    navigate("/")
  }

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
              Book id:
                <select value={book_id} onChange={(e) => setBook_id(e.target.value)}>
                  {books.map((book) => <option key={book.id + .1} value={book.id} >{book.title}</option>)}
               </select>
              </label>
            <input type="button" value="Remove Book" onClick={removeBook}/>
          </form>

          <form className='grid border-4 border-black-800'>
            <label>
              Author:
              <input type="text" className="w-1/12 border-2 border-gray-700" placeholder="Author" value={newauthor} onChange={(e) => setnewAuthor(e.target.value)}/>
            </label>
            <input type="button" value="Add Author" onClick={addAuthor}/>
          </form>

          <form className='grid border-4 border-black-800'>
            <label>
              Author id:
                <select value={author_id} onChange={(e) => setAuthor_id(e.target.value)}>
                  {authors.map((author) => <option key={author.id} value={author.id} >{author.author}</option>)}
                </select>
              </label>
            <input type="button" value="Remove Author" onClick={removeAuthor}/>
          </form>

          <form className='grid border-4 border-black-800'>
            <label>
              Username:
              <input type="text" className="w-1/12 border-2 border-gray-700" placeholder="Username" value={addAdminUsername} onChange={(e) => setAddAdminUsername(e.target.value)}/>
            </label>
            <input type="button" value="Add Admin" onClick={addAdmin}/>
          </form>

          <form className='grid border-4 border-black-800'>
            <label>
              Username:
              <input type="text" className="w-1/12 border-2 border-gray-700" placeholder="Username" value={removeAdminUsername} onChange={(e) => setRemoveAdminUsername(e.target.value)}/>
            </label>
            <input type="button" value="Remove Admin" onClick={removeAdmin}/>
          </form>

        </div>
        <Footer />
      </div>
    </>
  )
}

export default Admin
