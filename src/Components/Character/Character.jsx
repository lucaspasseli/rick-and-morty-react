import React from "react";
import "./style.css";

class Character extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, picture, status, race, lastLocation, origin } = this.props;
    return (
      <div className="Card">
        <img className="Card__Picture" src={picture}></img>
        <div className="Card__Name">{this.props.children}</div>
        <div className="Card__Actually">
          <span>{status} - </span>
          <span>{race}</span>
        </div>
        <div className="Card__Description">
          <h4 className="Card__Title">Originated from</h4>
          <p>{origin}</p>
        </div>
        <div className="Card__Description">
          <h4 className="Card__Title">Last know location:</h4>
          <p>{lastLocation}</p>
        </div>
      </div>
    );
  }
}

export default Character;
