import React from "react";
import ReactDOM from "react-dom";

class ContactMe extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="contact-container">
        <div className="contact-title">
          <h1 className="contact-me">Contact Me</h1>
          <br />
          <hr />
        </div>
        <div className="box-container">
          <div className="contact-left-section">
            <h2 className="get">Get in touch</h2>
            <h3 className="email">
              Email: <span>oybekjonxayrullayevich@gmail.com</span>
            </h3>
            <h3 className="phone">
              Phone: <span>(+998) 93 009 1995</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              veniam nobis, odit sunt, eaque ratione nemo dolore, illum
              voluptatum hic quam error libero eos animi totam consectetur
              incidunt doloremque nihil?
            </p>
          </div>
          <div className="contact-right-section">
            <form>
              <div className="email-name">
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
              </div>
              <div className="message">
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div className="button-send">
                <button type="send">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default ContactMe;
