import React, { useEffect, useState } from 'react'
import ManageBookHeader from '../../Components/manageBookHeader/ManageBookHeader'
import { FaDeleteLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const ViewBook = () => {
    const [allBooks, setAllBooks] = useState([]);
    useEffect(() => {
      fetch("http://localhost:3000/all-books").then((res) =>
        res.json().then((data) => setAllBooks(data))
      );
    }, []);
  
    const handleDelete = (id) => {
      console.log(id);
      fetch(`http://localhost:3000/book/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          alert("Book deleted Successfully!");
          
        });
    };
  return (
    <div>
      <ManageBookHeader/>
      <div className="w-full px-16">
      <div>
        <h1 className="text-3xl font-serif">View & Delete</h1>
      </div>
      <table className="w-full my-6 font-serif">
        <thead className="bg-gray-50 ">
          <tr>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Book Title
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Book Author
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Book Price
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Book Stock
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Book Image
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Update Book
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-center">
              Delete Book
            </th>
          </tr>
        </thead>
        {allBooks.map((book) => {
          return (
            <tbody key={book._id}>
              <tr className="border-b border-gray-200">
                <td className="p-3 text-sm">{book.title}</td>
                <td className="p-3 text-sm">{book.author}</td>
                <td className="p-3 text-sm">{book.price}</td>
                <td className="p-3 text-sm">{book.stock}</td>
                <td className="p-3 text-sm">
                  <img className="w-8" src={book.image_url} alt="" />
                </td>
                <td className="">
                    <Link to={`/edit-books/${book._id}`}>
                    <button className="btn bg-blue-600 p-1 text-sm rounded-sm ">
                    UPDATE
                  </button>
                    </Link>
                  
                </td>
                <td className=" text-center">
                  <button
                    onClick={() => handleDelete(book._id)}
                    className="btn bg-red-500 p-2 text-lg text-white rounded-sm "
                  >
                    <FaDeleteLeft />
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
    </div>
  )
}

export default ViewBook
