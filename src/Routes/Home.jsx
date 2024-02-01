import React from "react";
import Navbar from "../Component/Navbar";
import Landing from "../Component/Landing";
import Blogs from "./Blogs";
import Footer from "../Component/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Landing />
      </div>
      <Blogs />
      <Footer />
    </div>
  );
};

export default Home;
