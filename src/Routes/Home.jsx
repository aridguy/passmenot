import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import Landing from "../Component/Landing";
import Blogs from "./Blogs";
import Note from "../Component/Notifications/Note";


const Home = () => {
  const [showModals, setShowModals] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      // Display the pop-up after 10 seconds
      setShowModals(true)
    }, 10000); // 10 seconds delay

    // Clean up function to clear the timer
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures the effect runs only once

  // the function below closes the modal box
 

  const closeTheModal = () =>{
    setShowModals(false)
  }
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

      {/* this modal is displayed after ten seconds of opening the application  */}
      {
        showModals &&
        <div>
        <div onClick={closeTheModal} className="modalBody text-white">
          <div className="container">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <div className="modalBodyContents">
                  <div className="modalContent">
                    <div className="modalBackground p-4">
                      <span className="text-white">
                        This platform will show you how you can deal with
                        situations of life with the aid of Gods errands
                        personalities to help solve the varied problems that
                        God, in his infinite wisdom has chosen to bestow upon
                        his beloved children during the courses of their very
                        mortal lives, all you as an individual have to do is
                        diligently follow the easy to understand instructions
                        given on this platform. The information will be
                        available to the public both in English and yoruba
                        language
                      </span>
                      <span className="fs-2 text-white fw-bolder modalCloser">X</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3"></div>
            </div>
          </div>
        </div>
      </div>
      }
    </div>
  );
};

export default Home;
