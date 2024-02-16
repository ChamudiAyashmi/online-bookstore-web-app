import React from "react";
import "./Footer.css";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";

const footer = () => {
  return (
    <div className="footer">
      <div className="footer-details">
        <div className="logo">
          <h2 className="text-gray-200 font-bold text-2xl">BookNest</h2>
        </div>
        <div>
          <ul>
            <li className="text-gray-200 cursor-pointer font-serif text-sm p-1">
              SERVICES
            </li>
            <li className="text-gray-200 cursor-pointer font-serif text-sm p-1">
              THEME TWEAK
            </li>
            <li className="text-gray-200 cursor-pointer font-serif text-sm p-1">
              WEEBLY THEMES
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="text-gray-200 cursor-pointer font-serif text-sm p-1">
              SHOWCASE
            </li>
            <li className="text-gray-200 cursor-pointer font-serif text-sm p-1">
              WIDGETKIT
            </li>
            <li className="text-gray-200 cursor-pointer font-serif text-sm p-1">
              SUPPORT
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="text-gray-200 cursor-pointer font-serif text-sm p-1">
              ABOUT US
            </li>
            <li className="text-gray-200 cursor-pointer font-serif text-sm p-1">
              CONTACt US
            </li>
            <li className="text-gray-200 cursor-pointer font-serif text-sm p-1">
              AFFILIATES
            </li>
            <li className="text-gray-200 cursor-pointer font-serif text-sm p-1">
              RESOURCES
            </li>
          </ul>
        </div>
      </div>
      <div className="input my-10">
        <input
          className="font-serif"
          type="email"
          placeholder="Enter your email address"
        />
        <button className="btn-send font-bold font-serif text-sm">SEND</button>
      </div>
      <div className="socila-icons">
        <i>
          <FaSquareFacebook />
        </i>
        <i>
          <FaSquareInstagram />
        </i>
        <i>
          <FaSquareWhatsapp />
        </i>
      </div>
    </div>
  );
};

export default footer;
