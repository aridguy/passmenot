import React from "react";
import Navbar from "../Component/Navbar";
import Landing from "../Component/Landing";
import Blogs from "./Blogs";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Landing />
      </div>
      <Blogs />
    </div>
  );
};

export default Home;
