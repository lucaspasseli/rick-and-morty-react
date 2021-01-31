import React from "react";
import Character from "../Character/Character";
import "./style.css";

class ComponentTeste extends React.Component {
  render() {
    return (
      <div className="Container">
        {this.props.list.map((val) => (
          <Character
            picture={val.image}
            status={val.status}
            race={val.species}
            origin={val.origin.name}
            lastLocation={val.location.name}
            key={val.id}
          >
            {val.name}
          </Character>
        ))}
      </div>
    );
  }
}

export default ComponentTeste;
