import React from "react";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ManageBookHeader = () => {
  return (
    <div className="position-absolute top-0 right-0 flex flex-col items-end">
      <div className="flex p-3 gap-4">
        <Link to="/manage-books">
          <button className="btn-upload bg-black text-white p-3 rounded-lg">
            <FaArrowUpFromBracket />
          </button>
        </Link>

        <Link to="/view-books">
          <button className="bg-black text-white p-3 rounded-lg">
            <FaBars />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ManageBookHeader;
