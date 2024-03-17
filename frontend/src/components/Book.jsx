import { useState,useEffect } from 'react'

function Book(props) {

  return (
    <> 
        <div className='grid'>
            <p>Title: {props.book.title}</p>
            <p>author_id: {props.book.author_id}</p>
            <p>Releasd: {props.book.releaseYear}</p>
            <p>Available:{props.book.available}</p>
        </div>
    </> 
  )
}

export default Book
