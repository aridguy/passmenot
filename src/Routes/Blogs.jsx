import React, { useState } from "react";
import Post1 from "../Assets/blogimages/post1.png";
import Post2 from "../Assets/blogimages/post2.jpeg";
import Post3 from "../Assets/blogimages/post3.png";
import Post4 from "../Assets/blogimages/post4.png";
import Footer from "../Component/Footer";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-2">
            <div className="bg-grey fixed">
              <p className="text-uppercase">recent posts</p>
              <p>
                <Link className="text-black" to="/articles">
                  Articles
                </Link>
              </p>
              <p>
                <Link className="text-black" to="/contact">
                  Contact
                </Link>
              </p>
              <p>
                <Link
                  className="text-black"
                  to="https://www.buymeacoffee.com/passmenot"
                >
                  Buy Me Coffee
                </Link>
              </p>
              <hr />
              <img className="mt-1" width="100%" src={Post1} alt="post1" />
              <img className="mt-1" width="100%" src={Post2} alt="post1" />
              <img className="mt-1" width="100%" src={Post3} alt="post1" />
              <img className="mt-1" width="100%" src={Post4} alt="post1" />
            </div>
          </div>
          {/* main blog section second column */}
          <div className="col-md-10">
            <section>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-8 text-uppercase">latest posts</div>
                  <div className="col-md-4">
                    <form>
                      <input
                        className="form-control"
                        type="search"
                        placeholder="search posts"
                      />
                    </form>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-md-6">
                    <p className="fs-2 fw-bold text-secondary">
                      5 REASONS WHY DARK <br /> MODE MATTERS
                    </p>
                    <p className="fs-5">
                      According to an American survey, children between the ages
                      of 8-12 and 13-18 spend a daily average of 4 hours, 44
                      minutes and 7 hours, 22 minutes respectively, staring at
                      screens.
                    </p>
                    <p>
                      <small className="text-black cursor">Share</small>
                    </p>
                    <button
                      type="button"
                      className="btn btn-lg btn-secondary btn-rounded "
                      data-mdb-ripple-init
                    >
                      Read More
                    </button>
                  </div>
                  <div className="col-md-6">
                    <img width="85%" src={Post1} alt="normal post " />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
      {showModal && (
        <div>
          <div className="modalBody text-white">
            <div className="container">
              <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                  <div className="modalBodyContents">
                    <div className="modalContent">
                      <div className="modalBackground"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;
