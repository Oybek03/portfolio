import React from "react";
import ReactDOM from "react-dom";
import LeftSection from "./Components/homePage/LeftSection";
import RightSection from "./Components/homePage/RightSection";
import Menu from "./Components/menu/Menu";
import Portfolio from "./Components/portfolio/Portfolio";
import About from "./Components/About/About";
import ContactMe from "./Components/Contact/ContactMe";
import MenuSimile from "./Components/menu/MenuSimile";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div style={{ display: "flex" }}>
          <LeftSection />
          <RightSection />
          <MenuSimile />
        </div>
        {/* <Menu /> */}
        <Portfolio />
        <About />
        <ContactMe />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
