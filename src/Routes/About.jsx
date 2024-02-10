import React from "react";
import Navbar from "../Component/Navbar";
import IconAbout from "../Assets/about_icon.svg";
import Footer from "../Component/Footer";


const About = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className="fs-1 fw-bolder mt-5">
              Learn About{" "}
              <span className="fs-1 fw-bolder brand text-uppercase">
                {" "}
                Passmenot
              </span>
            </p>
            <span className="fs-5 mt-5">
              Sage, Spirituality, Romance, Gists, Real Life Stories /
              Conversations & Vibez Health financial and spiritual problems of
              life to gain love favor protection prosperity goodluck and
              prophetic dreams & to learn the art or science of causing change
              to occur in conformity with will
            </span>
            <div className="mt-5">
              <a href="https://www.buymeacoffee.com/passmenot">
                <img
                  src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=passmenot&button_colour=f2b91c&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00"
                  alt="buy me coffee"
                />
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-center mt-5">
              <img
                className="text-center"
                width="80%"
                src={IconAbout}
                alt="about_icon"
              />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
