import "./App.css";
import React from "react";
import CharacterList from "./Components/CharacterList/CharacterList";

class App extends React.Component {
  state = {
    characterList: [],
    nextUrl: "https://rickandmortyapi.com/api/character/?page=1",
    count: 0,
  };

  getCharacter(Url) {
    fetch(Url)
      .then((response) => response.json())
      .then((data) => {
        const { characterList, count } = this.state;
        this.setState({
          characterList: [...characterList, ...data.results],
          nextUrl: data.info.next,
          count: count + data.results.length,
        });
      });
  }

  componentDidMount() {
    const { nextUrl } = this.state;
    this.getCharacter(nextUrl);
  }

  componentDidUpdate() {
    const { nextUrl } = this.state;
    nextUrl && this.getCharacter(nextUrl);
  }
  render() {
    const { characterList, count } = this.state;
    return (
      <div className="Container">
        <div>
          <h1>All Rick and Morty Characters</h1>
          <h3>
            Total number of Chacarcters: <span className="Count">{count}</span>
          </h3>
        </div>
        <CharacterList list={characterList} />
      </div>
    );
  }
}

export default App;
