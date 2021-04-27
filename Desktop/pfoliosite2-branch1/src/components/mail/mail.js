import "./mail.css";
import emailjs from "emailjs-com";
import swal from "@sweetalert/with-react";
import check from "./fb-likes.gif";

function mail() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_KYeLN1ok",
        e.target,
        "user_BFbqsy2KIxiAGQL36TMLj"
      )
      .then(
        result => {
          console.log(result.text);
          swal(
            <div className="swal__container">
              <div className="swal__wrapper">
                <img className="alert__img" src={check} alt="checker" />
                <div className="alert__text">
                  <h1>Sent!</h1>
                  <p>I will get back to you asap!</p>
                </div>
              </div>
            </div>
          );
        },
        error => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className="App">
      <div className="container">
        <form className="contact-form" onSubmit={sendEmail} action="">
          <div className="col-8 form-group mx-auto">
            <input
              required
              placeholder="Name"
              name="name"
              className="form-control"
              type="text"
            />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <input
              required
              placeholder="Email"
              name="email"
              className="form-control"
              type="email"
            />
          </div>
          <div className="col-8 form-group  pt-2 mx-auto">
            <input
              required
              placeholder="Subject"
              name="subject"
              className="form-control"
              type="text"
            />
          </div>
          <div className="col-8 form-group  pt-2 mx-auto">
            <textarea
              required
              placeholder="Your message"
              cols="30"
              rows="8"
              name="message"
              className="form-control"
            />
          </div>
          <div className="col-8 form-group  pt-3 mx-auto">
            <input
              placeholder="Name"
              className="form-control"
              type="submit"
              value="Send Message"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default mail;
