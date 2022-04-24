import React from "react";
import ReactDOM from "react-dom";

class LeftSection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="left_section-container">
        <div className="networks">
          <h1 className="name">Plux</h1>
          <div className="network--icons">
            <i className="twitter icon"></i>
            <a href="https://github.com/Oybek03">
              <i className="github icon"></i>
            </a>
            <i className="facebook icon"></i>
            <i className="linkedin icon"></i>
            <i className="youtube icon"></i>
            <a href="https://t.me/GuruPro7707" target={"_blank"}>
              <i className="telegram icon"></i>
            </a>
            <hr className="network-line" />
            <p className="follow">Follow Me</p>
          </div>
        </div>
        <div className="left_section-titles">
          <h1 className="title-header">I'm Plux Doe</h1>
          <div class="typing animate"></div>
          {/* <h2 className="second-title">I develop mobile apps</h2> */}
          <div className="description">
            <p className="comment">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              natus.
            </p>
          </div>
          <div className="buttons">
            <button className="portfolio-btn">My Portfolio</button>
            <button className="contact-btn">Contact Me</button>
          </div>
        </div>
      </div>
    );
  }
}
export default LeftSection;
