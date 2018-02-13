import React, {Component} from "react";

const BestStyle = {
  border: '2px solid black'
};

class PlayerScore extends React.Component {
  constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    render() {
      return (
      <div style={BestStyle}>
        <h2>Current Score</h2>
        <h3 id="PlayerScore">{this.props.PlayerScore}</h3>
      </div>
    )
    }
  }

//handle functioning



export default PlayerScore;
