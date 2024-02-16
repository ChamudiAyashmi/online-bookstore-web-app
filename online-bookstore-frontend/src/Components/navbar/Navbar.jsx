import "./Navbar.css";
import bookLogo from "../../assets/bookLogo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../../context/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogout = ()=> {
      logOut().then(() => {
        alert("Sign out Successfully");
        navigate(from, { replace: true });
      }).catch((error) => {

      })
  }

  return (
    <div className="navbar px-8 py-3">
      <div className="nav-logo">
        <img src={bookLogo} alt="" />
        <p>BookNest</p>
      </div>
      <ul className="nav-menu">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/manage-books">Manage Books</Link>
        </li>
      </ul>
      <div className="flex mt-2 gap-4">
        <p className="font-serif">{user ? user.email : ""}</p>

          <button onClick={handleLogout} className="btn-logout bg-black text-white font-serif font-bold">
            LOG OUT
          </button>
       
      </div>
    </div>
  );
};

export default Navbar;
