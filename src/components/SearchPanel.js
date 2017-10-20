import React, { Component } from "react";

import "./SearchPanel.css";

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  handleClick = () => {
    this.refs.main.classList.toggle("hover");
  };

  render() {
    return (
      <div className="searchPanel">
        <form>
          <label>City name or ZIP:</label>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <CitiesList cities={this.props.cities} />
        </form>
      </div>
    );
  }
}

function CitiesList(props) {
  var items = [];
  if (props.cities) {
    items = props.cities.map(x => <li key={x.id}>{x.name}</li>);
  }

  return <ul>{items}</ul>;
}

export default SearchPanel;
