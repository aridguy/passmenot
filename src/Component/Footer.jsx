import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="bg-body-tertiary text-center">
        <div class="container p-4 pb-0">
          <section class="mb-4">
            <a
              data-mdb-ripple-init
              class="btn  btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-facebook-f"></i>
            </a>

            <a
              data-mdb-ripple-init
              class="btn btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-twitter"></i>
            </a>

            <a
              data-mdb-ripple-init
              class="btn btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-tiktok"></i>
            </a>

            <a
              data-mdb-ripple-init
              class="btn btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-instagram"></i>
            </a>

            <a
              data-mdb-ripple-init
              class="btn btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>

            <a
              data-mdb-ripple-init
              class="btn btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-github"></i>
            </a>
          </section>
        </div>

        <div class="text-center p-3">
          All Rights Reserved. made with{" "}
          <i class="text-danger fas fa-heart"></i> {" "}
          <a class="text-body" href="https://twitter.com/passmenot43">
            https://twitter.com/passmenot43
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
