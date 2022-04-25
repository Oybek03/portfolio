import React from "react";
import ReactDOM from "react-dom";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="about-container" id="about">
        <div className="box">
          <div className="about-title">
            <p>About me</p>
            <hr />
          </div>
          <div className="about-left-section">
            <h3>abit about my self</h3>
            <h2>Work Timline</h2>
          </div>
        </div>
        <div className="about-right-secton">
          <p className="about-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero <br />
            expedita voluptatibus, aperiam ipsam nihil ab minima in placeat aut{" "}
            <br />
            voluptatem.
          </p>
          <div className="table">
            <div className="line-one">
              <p> Developer</p>
              <p> Language</p>
              <p> Experience</p>
            </div>
            <div className="line-two">
              <p> FullStact</p>
              <p> JavaScript</p>
              <p> 1 years</p>
            </div>
            <div className="line-three">
              <p> Frontend</p>
              <p> HTML & CSS</p>
              <p> 6 month</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
