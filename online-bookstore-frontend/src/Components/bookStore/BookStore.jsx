import React, { useEffect, useState } from 'react'
import BookCards from '../bookCards/BookCards';

const BookStore = () => {
    const [books, setBooks] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:3000/all-books").then(res => res.json()).then(data => setBooks(data))
    },[])
  return (
    <div>
      <BookCards books={books} headerText="New Arrivals"/>
    </div>
  )
}

export default BookStore