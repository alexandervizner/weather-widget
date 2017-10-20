import React, { Component } from "react";

import Toggle from "./Toggle";
import SearchPanel from "./SearchPanel";

import "./WeatherWidgetPreferences.css";

export default class WeatherWidgetPreferences extends Component {

  render() {
    return (
      <div className="settings">
        <Toggle />
        <SearchPanel cities={this.props.data} />
      </div>
    );
  }
}
