import React, { Component } from "react";

import "./About.css";

class About extends Component {
  state = {
    about: "test test test test test",
  };

  render() {
    return (
      <div className="about-parent">
        <div className="top-row">
          <div className="circle">Circle</div>
          <div className="square">Square</div>
        </div>
        <div className="bottom-row">
          <div className="square">Square</div>
        </div>
      </div>
    );
  }
}

export default About;
