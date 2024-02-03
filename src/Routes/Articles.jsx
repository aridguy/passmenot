import React from "react";
import Blogs from "./Blogs";
import { Link } from "react-router-dom";

const Articles = () => {
  return (
    <div>
      <div className="LandingArticles bg-warning p-4">
        <div className="container ">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <p className="fw-bolder fs-1 text-white cursor brand">
                PASSMENOT's BLOG
              </p>
              <span className="titless">
                Keep Up With ZaddySuSu💜 Sage🪔 Old Man In A Boy👴 Afro
                Spiritual Being 🧘‍♂️ <br />
                Jah’s Own🐣 Deep Thinker🤔 Healer🌿Chronic Melomaniac 🎧
              </span>
              <div className="d-flex gap-3">
                <p>
                  <Link className="cursor text-white" to="/">
                    Home
                  </Link>
                </p>
                <p className="cursor">
                  <Link className="cursor text-white" to="/about">
                    About
                  </Link>
                </p>
                <p className="cursor">
                  <Link className="cursor text-white" to="/articles">
                    Articles
                  </Link>
                </p>
                <p className="cursor">
                  <Link className="cursor text-white" to="/contact">
                    Contact
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </div>
      {
        <Blogs />
      }
    </div>
  );
};

export default Articles;
