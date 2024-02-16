import React from "react";
import aboutImage from "../../assets/aboutImage.jpeg";
import aboutContentImage from "../../assets/aboutContentImage.png";
import "./About.css";
import CustomerReviews from "../../Components/customerReviews/CustomerReviews";

const About = () => {
  return (
    <div className="relative flex flex-col align-items-center justify-center w-full">
      <div className="imageDiv">
        <img className="aboutImage" src={aboutImage} alt="" />
        <div className="imageOverlay ">
          <h1 className=" text-white">The Best Library</h1>
          <h1 className=" text-white">That Every Book Lover Must Visit</h1>
        </div>
      </div>
      <div className="my-12">
        <h2 className="text-4xl text-center font-serif font-bold">About Us</h2>
      </div>
      <div className="flex align-items-center justify-center w-full px-14  mb-5">
        <div className="w-1/2 ">
          <p className="font-serif text-justify">
            Welcome to BookNest where the love for literature meets the joy of
            discovery. Founded with a passion for connecting readers with their
            next favorite book, our bookstore is a haven for book lovers of all
            ages. With a carefully curated selection spanning genres from
            classic literature to contemporary fiction, non-fiction, and
            children's books, we strive to offer something for every reader's
            taste and interest. Beyond our shelves, we aim to foster a community
            of book enthusiasts through author events, book clubs, and engaging
            workshops. Whether you're seeking a thrilling adventure, a
            thought-provoking narrative, or simply a cozy corner to immerse
            yourself in the written word, BookNest is here to ignite your
            imagination and celebrate the magic of storytelling. Join us on our
            literary journey, and let's explore the world of books together.
          </p>
        </div>
        <div>
          <img src={aboutContentImage} alt="" />
        </div>
      </div>
      <div>
        <CustomerReviews />
      </div>
    </div>
  );
};

export default About;
