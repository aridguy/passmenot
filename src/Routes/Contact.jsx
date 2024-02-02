import React from "react";
import Navbar from "../Component/Navbar";
import Msg from "../Assets/msg.svg";
import emailjs from "emailjs-com";
// import Swal from "sweetalert2";
import Footer from "../Component/Footer";
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

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c36uasw",
        "template_uc2vqcq",
        e.target,
        "gCIZmp6fqkEzLSaqq"
      )
      .then(
        () => {
          // console.log(result.text);
          Swal.fire({
            title: "Good job!",
            text: "Message has been sent!",
            icon: "success",
          });
        },
        () => {
          Swal.fire({
            title: "ERROR!",
            text: "hmm! check your internet connection",
            icon: "error",
          });
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <Navbar />

      <h2 className="h1-responsive font-weight-bold text-center my-4">
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
              <form onSubmit={sendEmail}>
                <div>
                  <input
                    required
                    id="name"
                    type="text"
                    placeholder="your name"
                    name="name"
                  />
                </div>
                <div>
                  <input
                    required
                    type="email"
                    placeholder="email"
                    name="email"
                  />
                </div>
                <div>
                  <input
                    required
                    id="email"
                    type="text"
                    placeholder="message"
                    name="message"
                  />
                </div>
                <div>
                  <button className="sendBtn float-right mt-5">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
