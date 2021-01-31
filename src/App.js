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
        const pagination = (URL) => {
          fetch(URL)
            .then((response) => response.json())
            .then((data) => {
              const maxNumberOfPages = data.info.pages;
              const numberOfPage = data.info.next
                .split("")
                .filter((val) => val.match("^[0-9]+$"))
                .join("");
              if (numberOfPage < maxNumberOfPages) {
                const nextURL = `https://rickandmortyapi.com/api/character/?page=${numberOfPage}`;
                fetch(nextURL)
                  .then((response) => response.json())
                  .then((data) => {
                    this.setState({
                      characterList: [
                        ...this.state.characterList,
                        data.results,
                      ].flat(),
                    });
                  });
                pagination(nextURL);
              }
            });
        };
        pagination("https://rickandmortyapi.com/api/character/");
      });
  }

  render() {
    const { characterList } = this.state;
    return (
      <div className="Container">
        <h1>All Rick and Morty Characters</h1>
        <CharacterList list={characterList} />
      </div>
    );
  }
}

export default App;
