import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/footer/footer";
import SignUp from "./Pages/signUp/SignUp";
// import Login from "./Pages/LoginSignUp/Login";

function App() {
  return (
    <>
      {/* <Navbar />
      <Outlet />
      <Footer /> */}
      <SignUp/>
    </>
  );
}

export default App;
