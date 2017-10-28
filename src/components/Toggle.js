import React, { Component } from "react";
import PropTypes from "prop-types";

import { scaleNames } from '../constants'

import "./Toggle.css";

export default class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggled: false,
      tempUnit: scaleNames.C
    };
  }

  hadleClick = () => {
    this.setState(prevState => ({
      isToggled: !prevState.isToggled,
      tempUnit: this.state.isToggled ? scaleNames.C : scaleNames.F
    }));
    this.props.handleUnitChange(this.state.tempUnit)
  };

  render() {
    return (
      <div className="toggle">
        <label className="switch">
          <input type="checkbox" onClick={this.hadleClick}/>
          <span className="slider round" />
          <span className="tempUnit">{this.state.isToggled ? scaleNames.C : scaleNames.F}</span>
        </label>
      </div>
    );
  }
}

Toggle.propTypes = {
  isToggled: PropTypes.bool,
  tempUnit: PropTypes.string
};
