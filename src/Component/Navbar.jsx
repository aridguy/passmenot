import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/logo.png"
const Navbar = () => {
  // initial state for every fuctions called

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light shadow-1 bg-white">
        <div className="container">
          <a className="navbar-brand me-2" href="/">
            <img
              src={Logo}
              height="40"
              alt="MDB Logo"
              loading="lazy"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarButtonsExample">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="fs-3 nav-link text-black" href="/">
                  PASSMENOT'S BLOG
                </a>
              </li>
            </ul>
            <div className="d-flex align-items-center gap-5">
              <p className="fs-6 cursor menu">
                <Link className="text-black" to="/about">
                  About
                </Link>
              </p>
              <p>
                <Link className="text-black" to="/articles">
                  Articles
                </Link>
              </p>
              <p className="fs-6 cursor menu">
                <Link className="text-black" to="/contact">
                  Contact
                </Link>
              </p>
              <p className="fs-6 cursor menu">
              
                <img
                  hidden
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                  className="rounded-circle hidden"
                  height="22"
                  alt="Portrait of a Woman"
                  loading="lazy"
                />
              </p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
