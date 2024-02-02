import React from "react";
import Navbar from "../Component/Navbar";
import Landing from "../Component/Landing";
import Blogs from "./Blogs";
// import Footer from "../Component/Footer";
import Socials from "../Component/Socials";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Socials />
      <div className="container">
        <Landing />
      </div>
      <Blogs />
      
    </div>
  );
};

export default Home;
