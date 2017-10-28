import React, { Component } from "react";

import store from "store";
import { MdSave } from "react-icons/lib/md";

import Toggle from "./Toggle";
import SearchPanel from "./SearchPanel";
import { scaleNames, APP_STORE_NAME } from "../constants";
import { getCitiesIdsByNames, getCitiesNamesByIds } from "../utils/helpers";

import "./WeatherWidgetPreferences.css";

export default class WeatherWidgetPreferences extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempUnit: scaleNames.C,
      cities: []
    };
  }

  componentWillMount() {
    let settings = store.get(APP_STORE_NAME)
    console.log(settings)
    
  }

  handleSaveSettings = () => {
    this.props.toggleHover();

    /* Temporal stub for testing. This will store settings from UI */
    const settings = {
      cities: getCitiesIdsByNames("stub"),
      tempUnit: this.state.tempUnit
    };
    store.set(APP_STORE_NAME, settings);
  };

  handleToggle(unit) {
    store.set(APP_STORE_NAME, {tempUnit: unit})
  }

  render() {
    return (
      <div className="settings">
        <Toggle
          unit={this.state.tempUnite}
          handleUnitChange={this.handleToggle}
        />
        <SearchPanel cities={this.props.data} />
        <MdSave onClick={this.handleSaveSettings} />
      </div>
    );
  }
}
