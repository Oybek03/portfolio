import React from "react";
import ReactDOM from "react-dom";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1 className="portfolio-title">Portfolio</h1>
        <div className="images" id="portfolio">
          <img
            src="https://images.pexels.com/photos/5496467/pexels-photo-5496467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/5077064/pexels-photo-5077064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />{" "}
          <img
            src="https://images.pexels.com/photos/276259/pexels-photo-276259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />{" "}
          <img
            src="https://images.pexels.com/photos/5380603/pexels-photo-5380603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <img
            src="https://media.istockphoto.com/photos/building-website-picture-id667264282?s=612x612"
            alt=""
          />{" "}
          <img
            src="https://images.pexels.com/photos/5380678/pexels-photo-5380678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
    );
  }
}
export default Portfolio;
