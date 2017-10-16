import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Toggle.css";

export default class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: !!(props.checked || props.defaultChecked),
      hasFocus: false
    };
  }

  hadleClick = event => {
      this.setState({
        hasFocus: true,
        
      })
  };

  render() {
    const { ...inputProps } = this.props;
    return (
      <div>
        <label className="switch">
          <input type="checkbox" onClick={this.hadleClick} />
          <span className="slider round" />
        </label>
      </div>
    );
  }
}

Toggle.propTypes = {
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  name: PropTypes.string
};
