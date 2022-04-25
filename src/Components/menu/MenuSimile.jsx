import React from "react";
import ReactDOM from "react-dom";

class MenuSimile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="menu-container-simile ">
        <div className="menu-section-simile">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default MenuSimile;
