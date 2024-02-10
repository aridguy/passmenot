import React, { useEffect, useState } from "react";

import Footer from "../Component/Footer";
import { Link, useNavigate } from "react-router-dom";
import { createClient } from "contentful";
// import { useLocation } from "react-router-dom";

const Blogs = () => {
  const navigate = useNavigate();
  // const location = useLocation();
  const [posts, setPosts] = useState([]);
  const client = createClient({
    space: "zmg7ydrs3juv",
    accessToken: "AZ0Is6DQZ10McZWNUd9_RNgOOfm730KHPERpk8Gaa5k",
  });

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        await client.getEntries().then((entries) => {
          console.log(entries);
          // setPosts(entries.items);
          setPosts(entries);
        });
      } catch (error) {
        console.log("error");
      }
    };
    getAllEntries();
  }, [client]);
  const [searchTerm, setSearchTerm] = useState("");

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

              {posts?.items?.slice(0, 2).map((post) => (
                <img
                  key={post.sys.id}
                  className="mt-1"
                  width="100%"
                  src={post?.fields?.blogImage?.fields?.file?.url}
                  alt="post1"
                />
              ))}
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
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </form>
                  </div>
                </div>

                {posts?.items?.slice(0, 4).map((post) => (
                  <div className="row mt-5" key={post.sys.id}>
                    <div className="col-md-6">
                      <p className="fs-2 fw-bold text-secondary">
                        {post?.fields?.blogTitles}
                      </p>

                      <p className="fs-5">{post?.fields?.shortContents}</p>
                      <p>
                        <small className="text-black cursor">
                          wriiten by:{" "}
                          <b>
                            <i>Kehinde</i>
                          </b>
                        </small>
                      </p>

                      <button
                        onClick={() =>
                          navigate(`/ArticleDetails/${post.sys.id}`, {
                            state: { ...post },
                          })
                        }
                        className="btn btn-lg btn-secondary btn-rounded "
                        data-mdb-ripple-init
                      >
                        Read More
                      </button>
                    </div>
                    <div className="col-md-6">
                      <img
                        width="85%"
                        src={post?.fields?.blogImage?.fields?.file?.url}
                        alt="as"
                      />
                    </div>
                  </div>
                ))}
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
