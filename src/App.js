import "./App.css";
import React from "react";
import CharacterList from "./Components/CharacterList/CharacterList";

class App extends React.Component {
  state = {
    characterList: [],
  };

  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          characterList: data.results,
        });
        return data;
      });
  }

  render() {
    const { characterList } = this.state;
    return (
      <div>
        <CharacterList list={characterList} />
      </div>
    );
  }
}

export default App;
