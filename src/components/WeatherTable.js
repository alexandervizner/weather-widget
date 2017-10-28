import React, { Component } from "react";

import { MdSettings } from "react-icons/lib/md";

import "./WeatherTable.css";

export default class WeatherTable extends Component {
  render() {
    var list = [];

    if (this.props.data) {
      list = this.props.data.map(i => (
        <WeatherRow
          city={i.name}
          temp={parseFloat(i.main.temp).toFixed(1)}
          key={i.id}
        />
      ));
    }

    return (
      <div className="tempInfo">
        <table>
          <tbody>{list}</tbody>
        </table>
        <MdSettings onClick={this.props.toggleHover} />
      </div>
    );
  }
}

const WeatherRow = ({ city, temp }) => (
  <tr>
    <td>{city}</td>
    <td>{temp}°C</td>
  </tr>
);
