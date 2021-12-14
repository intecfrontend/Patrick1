import "./contact.scss";
import { useState } from "react";

const Contact = () => {
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const failMessage = () => {
        let formMess = document.querySelector(".form-message");
        formMess.innerHTML = "Message was NOT sent, fill in missing fields";
        formMess.style.opacity = "1";
        formMess.style.background = "rgb(253, 87, 87)";
        formMess.style.color = "rgb(0, 0, 0)";
        console.log("formMess " + formMess.innerHTML);
    };
      
    const isName = () => {
        let nameplace = document.getElementById("not-name");
        if (name.match(/^[aA-zZ\s]+$/)) {
            nameplace.style.display = "none";
            return true;
        } else {
            nameplace.style.display = "block";
            nameplace.style.animation = "dongle 1s";
            setTimeout(() => {
              nameplace.style.animation = "none";
            }, 1000);
            return false;
        }
    };
      
    const isMess = () => {
        let nameplace = document.getElementById("not-mess");
        if (message) {
            console.log("mmmeesss" + message);
            nameplace.style.display = "none";
            return true;
        } else {
            nameplace.style.display = "block";
            nameplace.style.animation = "dongle 1s";
            setTimeout(() => {
              nameplace.style.animation = "none";
            }, 1000);
            return false;
        }
    };

    const isMail = () => {
        let mail = document.getElementById("not-mail");
        let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      
        if (email.match(regex)) {
            mail.style.display = "none";
            return true;
        } else {
            mail.style.display = "block";
            mail.style.animation = "dongle 1s";
            setTimeout(() => {
              mail.style.animation = "none";
            }, 1000);
            return false;
        }
    };
      
    const isPhone = () => {
        console.log("pppp" + "phone");
        let nameplace = document.getElementById("not-phone");
      
        if (phone.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)) {
            nameplace.style.display = "none";
            return true;
        } else {
            nameplace.style.display = "block";
            nameplace.style.animation = "dongle 1s";
            setTimeout(() => {
              nameplace.style.animation = "none";
            }, 1000);
            return false;
        }
    };
      
    const successMessage = () => {
        let formMess = document.querySelector(".form-message");
        formMess.innerHTML = "Message sent";
        console.log("formMess " + formMess.innerHTML);
    };
    
    const handleSubmit = e => {
        e.preventDefault();
        if (isName() && isMail() && isPhone() && isMess()) {
            sendFeedback("template_8pv6gwx", {
              name,
              company,
              phone,
              email,
              message
            });
            {
              document.querySelector(".inputter").style.background = "none";
            }
        } else {
            failMessage("Thank you for filling in correctly");
            // alert("your email was NOT sent");
      
            // if (name !== true) {
            //   console.log("nnnnn " + name);
            //   document.querySelector("#name").placeholder = "what is your name?";
            //   document.querySelector("#name").style.borderBottom =
            //     "rgb(253, 87, 87) solid 3px";
            //   document.querySelector("#name").style.paddingLeft = "5px";
            // }
            // if (message !== true) {
            //   console.log("mmmm " + message);
            //   document.querySelector("#message").placeholder = "message ?";
            //   document.querySelector("#message").style.borderBottom =
            //     "rgb(253, 87, 87) solid 3px";
            //   document.querySelector("#message").style.paddingLeft = "5px";
            // }
          }
    };
      
    const sendFeedback = (templateId, variables) => {
          window.emailjs
            .send("service_ndz9bjv", templateId, variables)
            .then(res => {
              console.log("success !");
              successMessage();
              setName("");
              setCompany("");
              setPhone("");
              setEmail("");
              setMessage("");
            })
            .then(res => {
              // document.querySelector(".form-message").innerHTML = "Thank You!";
              document.querySelector(".form-message").style.background = "lime";
              document.querySelector(".form-message").style.color = "black";
              setTimeout(() => {
                document.querySelector(".form-message").innerHTML = "";
                document.querySelector(".form-message").style.background = "none";
              }, 4000);
            })
            .catch(err => {
              failMessage("Syntax error");
            });
    };
    
      
        return (
            <div className="contact">
                <div className="container">
                    <h3>contact</h3>
                    <h2>Get in touch</h2>
                    <div className="box">
                        <div className="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d314.9231064386317!2d4.346215207164211!3d50.842557260430205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c4796e5e47f9%3A0xd292d6d6352b95ee!2sINTEC%20BRUSSEL!5e0!3m2!1snl!2sbe!4v1630330934307!5m2!1snl!2sbe"
                            class="google-maps"></iframe>
                        </div>
                        <form class="contact-form">
                            <input type="text" class="field" placeholder="Your Name"/>
                            <input type="text" class="field" placeholder="Your Email"/>
                            <input type="text" class="field" placeholder="Phone"/>
                            <textarea placeholder="Message" class="field"/>
                            <button class="btn" action="mailto:neal.vdv@hotmail.com">Send</button>
                        </form>
                        
                    </div>
                
                </div>
            </div>
            
          
        );
      };
    

export default Contact;