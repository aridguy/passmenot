import React, { useState } from "react";
import Navbar from "../Component/Navbar";
import Msg from "../Assets/msg.svg";
import Swal from "sweetalert2";

const Contact = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  // // const [state, handleSubmit] = useForm("xqkvjawa");
  // // if (state.succeeded) {
    
  //   Swal.fire(
  //     "Message sent successfully",
  //     "we will get back to you as soon as posible",
  //     "success"
  //   // );
  // }


  return (
    <div>
      <Navbar />

      <h2 class="h1-responsive font-weight-bold text-center my-4">
        Contact us
      </h2>
      <p className="text-center w-responsive mx-auto mb-5">
        Do you have any questions? Please do not hesitate to contact us <br />
        directly. Our team will come back to you within a matter of hours to
        help you.
      </p>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex gap-2">
              <h1 className="intouch">
                Want to <br /> Get in <br />
                touch?
              </h1>
              <img src={Msg} alt="message-icon" />
            </div>
            <span>
              I am not open to a new role at the moment, <br /> Please,reach out
              if you will like to view any of <br /> these projects.
            </span>
          </div>
          <div className="col-md-6">
            <div className="">
              <form>
              
                <div>
                  <input id="name" type="text" placeholder="your name"  />
                </div>
                <div >
                  <input type="email" placeholder="email"  />
                </div>
                <div>
                  <input id="email" type="text" placeholder="message"  />
                </div>
                <div>
                  <button class="sendBtn float-right mt-5">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
