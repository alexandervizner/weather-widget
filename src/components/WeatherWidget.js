import React, { Component } from "react";

import WeatherTable from "./WeatherTable";
import WeatherWidgetPreferences from "./WeatherWidgetPreferences"

import "./WeatherWidget.css";

export default class WeatherWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: null
    };
  }

  handleClick = () => {
    this.refs.main.classList.toggle("hover");
  };

  render() {
    return (
      <div className="flip-container" ref="main">
        <div className="flipper">
          <div className="front">
            <WeatherTable data={this.props.data} toggleHover={this.handleClick} />
          </div>
          <div className="back">
            <WeatherWidgetPreferences data={this.props.data} toggleHover={this.handleClick} />
          </div>
        </div>
      </div>
    );
  }
}
