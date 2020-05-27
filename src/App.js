import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/cardList.component";
import { SearchBox } from "./components/searchbox/searchBox.component";

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

  handleChange = (e) => {
    this.setState({ searchBox: e.target.value });
  };

  render() {
    const { monsters, searchBox } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchBox.toLowerCase())
    );
    return (
      <div className="App">
        <h1> Monsters Rolodex App </h1>
        <SearchBox
          placeholder="searchmonsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
