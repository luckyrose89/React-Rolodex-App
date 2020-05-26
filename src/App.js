import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/cardList.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchBox: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <input
          type="search"
          placeholder="search monsters"
          onChange={(e) => this.setState({ searchBox: e.target.value })}
        />
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
