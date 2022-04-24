import React from "react";
import ReactDOM from "react-dom";
import Menu from "../menu/Menu";
class RightSection extends React.Component {
  constructor(props) {
    super(props);
  }
  EventHandleTheme() {
    let body = document.querySelector("body").classList.toggle("body");
  }
  EventHandleMenu() {
    document.querySelector(".menu-container").classList.toggle("tushish");
    document.querySelector(".menu-yoqatish").classList.toggle("menu-yoqatish");
  }
  render() {
    return (
      <div id="home" className="rigth_section-container">
        <div
          className="nav-burgers"
          style={{ color: "black", position: "fixed" }}
        >
          <i
            className="circle outline icon"
            onClick={this.EventHandleTheme}
          ></i>
          <i className="list icon" onClick={this.EventHandleMenu}></i>
        </div>
        <div className="picture">
          <img
            src="https://images.pexels.com/photos/5826542/pexels-photo-5826542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
    );
  }
}
export default RightSection;
