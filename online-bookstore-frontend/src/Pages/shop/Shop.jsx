import { useEffect, useState } from "react";
import "./Shop.css";

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="my-16 px-2 lg:px-24">
      <h2 className="text-4xl font-semibold text-center font-serif">
        All Books
      </h2>
      {/* cards */}
      <div className="cards my-6">
        {books.map((book) => (
          <div className="card" key={book._id}>
            <div>
              <img src={book.image_url} alt="" />
              <p className="bookTitle font-bold font-serif">{book.title}</p>
              <p className="bookAuthor font-bold font-serif">$ {book.price}</p>
              <button className="btn-buyNow bg-black font-bold font-serif">
                SHOP NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
