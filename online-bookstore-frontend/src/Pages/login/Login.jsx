import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const { login, loginWithGoogle } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/home";

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      await login(email, password);
      console.log("Login successfully");
      alert("Login successfully")
      navigate(from, { replace: true });
    } catch (error) {
      alert("Email or Password incorrect")
      console.error("Login:", error);
      setError(error.message);
    }
  };

  const handleRegister = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        // alert("Sign Up successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  return (
    <div className="main min-h-screen bg-gray-100  flex flex-col ">
      <div className="signUp bg-white w-1/3 flex">
        <div className="w-full">
          <img
            className=""
            src="https://images.unsplash.com/photo-1568667256549-094345857637?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8ODJ8fHxlbnwwfHx8fHw%3D"
            alt=""
          />
        </div>
        <form onSubmit={handleLogin} className="w-full p-7">
          <h1 className="text-black text-center text-3xl font-serif mb-5 mt-3">
            Login
          </h1>
          <table className="w-full ">
            <tbody>
              <tr className="h-16">
                <td>
                  <label className="font-serif" htmlFor="">
                    Email Address :
                  </label>
                </td>
                <td>
                  <input
                    id="email"
                    name="email"
                    className=" "
                    type="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label className="font-serif" htmlFor="">
                    Password :
                  </label>
                </td>
                <td>
                  <input
                    id="password"
                    name="password"
                    className=""
                    type="password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
    
          <p className="font-serif mt-4">
            Don't have an account ?{" "}
            <a className="text-blue-600" href="/">
              Sign Up
            </a>
          </p>
          <button className="btn-signUp font-serif bg-black text-white mt-5 ">
            Login
          </button>

          <hr className="mt-5" />
          <p className="text-center mt-5 font-serif">or</p>
          <div className="flex w-full gap-3 mt-3 align-items-center justify-center">
            <button onClick={handleRegister} className="font-serif">
              <img
                className="w-8  h-8"
                src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png"
                alt=""
              />
            </button>
            <p className="font-serif mt-1">Login with Google</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
