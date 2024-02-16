import React from "react";
import { useLoaderData } from "react-router-dom";
import "./BooksDetails.css";

const BookDetails = () => {
  const { _id, title, author, image_url, description, price, stock } =
    useLoaderData();
  return (
    <div className="bookDetails">
      <h1 className="text-4xl font-semibold font-serif">About the book</h1>
      <div className="details my-4">
        <div className="right">
          <img src={image_url} alt="" />
          <button className="btn-readBook font-semibold">READ BOOK</button>
        </div>
        <div className="left">
          <h1 className="text-2xl font-semibold font-serif">{title}</h1>
          <h2 className="text-1xl font-serif my-2">By {author}</h2>
          <h2 className="text-2xl font-serif">${price}</h2>
          <p className=" my-2 font-serif ">{description}</p>
          <p className="font-serif">Available Stock : {stock}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
