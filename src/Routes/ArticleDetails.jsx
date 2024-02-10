import React from "react";
import Navbar from "../Component/Navbar";
// import { Link } from "react-router-dom";
// import { createClient } from "contentful";
import { useLocation } from "react-router-dom";
import Footer from "../Component/Footer";


const ArticleDetails = () => {
  // const navigate = useNavigate();
const location = useLocation();
  
  // const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <Navbar />
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div>
              <img
                className="img-responsive"
                width="100%"
                src={location.state.fields.blogImage.fields.file.url}
                alt=""
              />
            </div>
            <p className="fs-2 fw-bold text-secondary text-center">
            {location.state.fields.blogTitles}
            </p>
            <p className="fs-5 text-center">
            {location.state.fields.fullContents}
            </p>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ArticleDetails;
