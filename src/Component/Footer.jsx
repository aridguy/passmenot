import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-body-tertiary text-center">
        <div className="container p-4 pb-0">
          <section className="mb-4">
            <a
              data-mdb-ripple-init
              className="btn  btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              data-mdb-ripple-init
              className="btn btn-floating m-1"
              href="https://twitter.com/passmenot43"
              role="button"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a
              data-mdb-ripple-init
              className="btn btn-floating m-1"
              href="https://www.tiktok.com/@passmenot43"
              role="button"
            >
              <i className="fab fa-tiktok"></i>
            </a>

            <a
              data-mdb-ripple-init
              className="btn btn-floating m-1"
              href="https://www.instagram.com/passmenot21/"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              data-mdb-ripple-init
              className="btn btn-floating m-1"
              href="https://www.linkedin.com/in/passmenot-undefined-b628512b1/"
              role="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </section>
        </div>

        <div className="text-center p-3">
          All Rights Reserved. made with{" "}
          <i className="text-danger fas fa-heart"></i>{" "}
          <a className="text-body" href="https://twitter.com/passmenot43">
            https://twitter.com/passmenot43
          </a>
        </div>
        <small>designed by <a href="https://aridguy.github.io/">codetechs</a></small>
      </footer>
    </div>
  );
};

export default Footer;
