import axios from 'axios'
import { useState,useEffect } from 'react'

function OneCart(props) {
  const [newDate , setNewDate] = useState(props.cart.return_date)

  async function extendRent(){
    try {
      axios.post("http://localhost:8888/cart/update", {
        date: newDate,
        id: props.cart.id
      })
      .then(function (response) {
        console.log(response.data)
      })
    } catch (error) {
      console.error(error)
    }
  }

  async function returnBook(){
    try {
      axios.post("http://localhost:8888/cart/remove", {
        id: props.cart.id
      })
      .then(function (response) {
        console.log(response.data)
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
            <input type="button" value="Extend rent" onClick={extendRent} className='cursor-pointer bg-blue-500 text-white' />
            <input type="button" value="Return" onClick={returnBook} className='cursor-pointer bg-blue-700 text-white' />
        </div>
    </>
  )
}

export default OneCart
