import React, { Component } from "react";

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
      <table>
        <tbody>{list}</tbody>
      </table>
    );
  }
}

const WeatherRow = ({ city, temp }) => (
  <tr>
    <td>{city}</td>
    <td>{temp}°C</td>
  </tr>
);
