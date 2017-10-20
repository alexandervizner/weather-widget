import React, { Component } from "react";

import store from "store";
import { MdSettings, MdSave } from "react-icons/lib/md";

import { getCitiesIdsByNames } from "../utils/helpers";
import WeatherTable from "../components/WeatherTable";
import WeatherWidgetPreferences from "../components/WeatherWidgetPreferences";

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

  handleSaveSettings = () => {
    this.refs.main.classList.toggle("hover");

    /* Temporal stub for testing. This will store settings from UI */
    const settings = getCitiesIdsByNames("stub");
    store.set("appSettings", settings);
  };

  render() {
    return (
      <div className="flip-container" ref="main">
        <div className="flipper">
          <div className="front">
            <WeatherTable data={this.props.data} />
            <MdSettings onClick={this.handleClick} />
          </div>
          <div className="back">
            <WeatherWidgetPreferences data={this.props.data} />
            <MdSave onClick={this.handleSaveSettings} />
          </div>
        </div>
      </div>
    );
  }
}
