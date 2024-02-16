import React from "react";
import "./Banner.css";
import bookImage from "../../assets/bookImage.png";

const Banner = () => {
  return (
    <div className="banner px-4 lg:px-24 flex items-center">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        <div>
          <h1 className="text-6xl font-bold ">Explore Your</h1>
          <h1 className="py-8 text-6xl font-bold">Own Book</h1>
          <button className="btn-getStarted font-bold">GET STRATED</button>
        </div>
        <div className="flex gap-10 ">
          <div>
            <img
              className="img1 w-48"
              src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1655928079l/60784546.jpg"
              alt=""
            />
            <p className="text-center font-bold">Divine Rivals</p>
            <p className="text-center"> Rebecca Ross</p>
          </div>
          <div>
            <p className="text-center font-bold">A Study in Drowning</p>
            <p className="text-center">Ava Reid</p>
            <img
              className="img2 w-48"
              src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1675782203i/75302266.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="img1 w-48"
              src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1666441294i/17699859.jpg"
              alt=""
            />
            <p className="text-center font-bold">Chain of Thorns</p>
            <p className="text-center">Cassandra Clare</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
