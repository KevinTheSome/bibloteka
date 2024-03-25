import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom";

function OneCart(props) {
  const [newDate , setNewDate] = useState(props.cart.return_date)
  const navigate = useNavigate();

  async function extendRent(){
    try {
      axios.post("http://localhost:8888/cart/update", {
        date: newDate,
        id: props.cart.id
      })
      .then(function (response) {
        if (response.status === 200) {
          return navigate("/");
        }
      })
    } catch (error) {
      console.error(error)
    }
  }

  async function returnBook(){
    console.log("id: "  + props.cart.id)
    try {
      axios.post("http://localhost:8888/cart/remove", {
        id: props.cart.id,
        available: props.cart.available,
        book_id: props.cart.book_id
      })
      .then(function (response) {
        if (response.status === 200) {
          return navigate("/");
        }
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <> 
        <div className='grid border-gray-800 border-4 m-4 w-4/12 '>
            <p>Title: {props.cart.title}</p>
            <p>Released Year: {props.cart.releaseYear}</p>
            <p>Return date: {props.cart.return_date}</p>
            <input type="date" value={newDate} onChange={(e) => setNewDate(e.target.value)} />
            <input type="button" value="Extend rent" onClick={extendRent} className='cursor-pointer bg-blue-500 text-white' />
            <input type="button" value="Return" onClick={returnBook} className='cursor-pointer bg-blue-700 text-white' />
        </div>
    </>
  )
}

export default OneCart
