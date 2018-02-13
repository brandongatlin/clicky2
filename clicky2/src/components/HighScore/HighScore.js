import React, {Component} from "react";

const ScoreStyle = {
  border: '2px solid black'
};

class HighScore extends React.Component {
  constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    render() {
      return (
      <div style={ScoreStyle}>
        <h2>Best</h2>
        <h3 id="Best">{this.props.HighScore}</h3>
      </div>
    )
  }
}

//handle functioning

export default HighScore;
