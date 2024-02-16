import React from "react";
import "./BookCards.css";
import { Link } from "react-router-dom";

const BookCards = ({ headerText, books }) => {

  return (
    <div className="my-16 px-2 lg:px-24">
      <h2 className="text-4xl text-center font-bold text-black my-5 font-serif">
        {headerText}
      </h2>

      {/* cards */}
      <div className="cards my-6">
        {books.map((book) => (
          <div className="card font-serif" key={book._id}>
            <div>
              <img src={book.image_url} alt="" />
              <p className="bookTitle font-bold">{book.title}</p>
              <p className="bookAuthor">{book.author}</p>
              <Link to={`/book-details/${book._id}`}>
                <button className="btn-viewMore font-bold">
                  VIEW MORE
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCards;
