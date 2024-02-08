import React from "react";
import Navbar from "../Component/Navbar";
import Landing from "../Component/Landing";
import Blogs from "./Blogs";
import Note from "../Component/Notifications/Note";
// import Footer from "../Component/Footer";
// import Socials from "../Component/Socials";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
           <div className="bg-warning text-white">
           <Note />
           </div>
          </div>
        </div>
      </div>
      <div className="container">
        <Landing />
      </div>
      <Blogs />
    </div>
  );
};

export default Home;
