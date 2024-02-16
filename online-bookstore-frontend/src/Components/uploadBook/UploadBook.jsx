import React from "react";
import "./UploadBook.css";

const UploadBook = () => {
  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const title = form.bookTitle.value;
    const author = form.bookAuthor.value;
    const description = form.bookDescription.value;
    const price = form.bookPrice.value;
    const stock = form.bookStock.value;
    const image_url = form.bookImageUrl.value;

    const book = {
      title,
      author,
      description,
      price,
      stock,
      image_url,
    };
    console.log(book);

    //Save data to database

    fetch("http://localhost:3000/upload-book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Book saved successfully !");
        form.reset();
      });
  };
  return (
    <div className="flex flex-col w-1/2">
      <div className="update">
        <h1 className="text-3xl font-serif">Upload Your Book</h1>
      </div>
      <form className="" onSubmit={handleBookSubmit}>
        <div className="input-divs flex gap-8 my-3">
          <div className="flex flex-col w-1/2">
            <label
              className="font-serif"
              htmlFor="bookTitle"
              value="Book Title"
            >
              Book Title
            </label>
            <input
              id="bookTitle"
              name="bookTitle"
              className="h-9 rounded-sm outline-none"
              type="text"
              placeholder="Book Name"
              required
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label className="font-serif" htmlFor="bookAuthor" value="Book Author">
              Book Autour
            </label>
            <input
              id="bookAuthor"
              name="bookAuthor"
              className="h-9 rounded-sm outline-none"
              type="text"
              placeholder="Book Author"
              required
            />
          </div>
        </div>
        <div className="input-divs flex my-3">
          <div className="flex flex-col w-full">
            <label className="font-serif" htmlFor="bookDescription" value="Book Description">
              Book Description
            </label>
            <textarea
              className="outline-none"
              name="bookDescription"
              id="bookDescription"
              cols="30"
              rows="5"
              placeholder="Write your book description"
              required
            ></textarea>
          </div>
        </div>
        <div className="input-divs flex gap-8 my-3">
          <div className="flex flex-col w-1/2">
            <label className="font-serif" htmlFor="bookPrice" value="Price">
              Price
            </label>
            <input
              id="bookPrice"
              name="bookPrice"
              className="h-9 rounded-sm outline-none"
              type="number"
              placeholder="Price"
              required
              step="any"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label className="font-serif" htmlFor="bookStock" value="Stock">
              Stock
            </label>
            <input
              id="bookStock"
              name="bookStock"
              className="h-9 rounded-sm outline-none"
              type="number"
              placeholder="Stock"
              required
            />
          </div>
        </div>
        <div className="input-divs flex my-3">
          <div className="flex flex-col w-full">
            <label className="font-serif" htmlFor="bookImageUrl" value="Book Image Url">
              Book Image Url
            </label>
            <input
              id="bookImageUrl"
              name="bookImageUrl"
              className="h-9 rounded-sm outline-none"
              type="text"
              placeholder="Book image url"
              required
            />
          </div>
        </div>
        <div className="my-4">
          <button
            type="submit"
            className="btn-uploadBook w-full h-9 rounded-sm font-semibold"
          >
            UPLOAD BOOK
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadBook;
