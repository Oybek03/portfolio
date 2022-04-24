import React from "react";
import ReactDOM from "react-dom";

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="menu-container" >
        <div className="menu-section">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Menu;
