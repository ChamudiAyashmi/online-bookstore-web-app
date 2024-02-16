import React from 'react'
import Navbar from './Components/navbar/Navbar'
import Footer from './Components/footer/footer'
import { Outlet } from "react-router-dom";


const MyApp = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>

  )
}

export default MyApp
