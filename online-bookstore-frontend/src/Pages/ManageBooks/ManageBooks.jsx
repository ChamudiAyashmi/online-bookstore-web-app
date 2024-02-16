import React, { useState } from "react";
import "./ManageBooks.css";
// import UploadBook from "../../Components/UploadBook/UploadBook";
// import UpdateBooks from "../../Components/updateBooks/UpdateBooks";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import ManageBookHeader from "../../Components/manageBookHeader/ManageBookHeader";
// import UpdateBooks from "../../Components/updateBooks/UpdateBooks";
import UploadBook from "../../Components/uploadBook/UploadBook";

const ManageBooks = () => {
    return(
      <div>
          <ManageBookHeader/>
          <div className="flex align-items-center justify-center">
          <UploadBook/>
          </div>
          
      </div>
      
    )
 
};

export default ManageBooks;
