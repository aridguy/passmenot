import React from "react";
import Post1 from "../Assets/blogimages/post1.png";
import Post2 from "../Assets/blogimages/post2.jpeg";
import Post3 from "../Assets/blogimages/post3.png";
import Post4 from "../Assets/blogimages/post4.png";
import Footer from "../Component/Footer";

const Blogs = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-2">
            <div className="bg-grey fixed">
              <p className="text-uppercase">recent posts</p>
              <p>Articles</p>
              <p>Buy me a Coffee</p>
              <p>Contact</p>
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
                <div className="row mt-2">
                  <div className="col-md-6">
                    <img width="85%" src={Post1} alt="normal post " />
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
    </div>
  );
};

export default Blogs;
