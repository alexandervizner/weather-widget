import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Toggle.css";

export default class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggled: false
    };
  }

  hadleClick = event => {
    this.setState(prevState => ({
      isToggled: !prevState.isToggled
    }));
  };

  render() {
    return (
      <div className="toggle">
        <label className="switch">
          <input type="checkbox" onClick={this.hadleClick} />
          <span className="slider round" />
          <span className="tempUnit">{this.state.isToggled ? "C°" : "F°"}</span>
        </label>
      </div>
    );
  }
}

Toggle.propTypes = {
  isToggled: PropTypes.bool
};
