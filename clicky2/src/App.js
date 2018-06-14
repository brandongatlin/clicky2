import React, {
  Component
} from 'react';

import logo from './logo.svg';
import './App.css';
import Card from "./components/Card/Card";
import glyphs from "./glyphs";
import Start from "./components/Start/Start";
import PlayerScore from "./components/Score/PlayerScore";
import HighScore from "./components/HighScore/HighScore.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: [],
      glyphs: glyphs,
      PlayerScore: 0,
      HighScore: 0
    };
  }

  randomizer = data => {
    let i = data.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = data[i];
      data[i] = data[j];
      data[j] = temp;
      i--;
    }
    return data;
  }; //end randomizer

  handlerClick = (event) => {
    if (this.state.clicked.indexOf(event.id) >= 0) {

    this.setState({
      PlayerScore: 0,
      clicked: [],
    })
    this.randomizer(glyphs)
    //score stuff
  } else {

if (this.state.PlayerScore >= this.state.HighScore){

  this.setState({
    PlayerScore: this.state.PlayerScore + 1,
    HighScore: this.state.PlayerScore + 1,
    clicked: this.state.clicked.concat([event.id])
  })
  this.randomizer(glyphs)
} else {

  this.setState({
    PlayerScore: this.state.PlayerScore + 1,
    clicked: this.state.clicked.concat([event.id])
  })
  this.randomizer(glyphs)
}

    }

  } //end handlerClick fx

  newGame = (randomizer) => {
    this.randomizer(glyphs);
    this.setState({
      PlayerScore: 0,
    })

    if (this.state.HighScore > this.state.PlayerScore) {
      this.setState({
        HighScore: this.state.HighScore
      })
    } else {
      this.setState({
        HighScore: this.state.PlayerScore
      })
    }
  }

  render() {

    return (

      <div className="App" id="App">
        <header id="App-header">

          <h1 className="App-title">What is the secret of the Sphinx? <br /> Choose a glyph, but select a new glyph each time, or you will be <em>cursed!</em></h1>
        </header>

        <div id="GameBoard">

          {this.state.glyphs.map(glyph => (
            <Card
              className="card"
              id={glyph.id}
              key={glyph.id}
              name={glyph.name}
              image={glyph.image}
              handlerClick = {this.handlerClick.bind(null, glyph)}
            />
          ))}
        </div>

        <div id="info">
          <Start
            newGame={this.newGame}
           />
          <HighScore
          HighScore = {this.state.HighScore}
          />
          <PlayerScore
          PlayerScore = {this.state.PlayerScore}
          />
        </div>

      </div>
    );
  }
}

export default App;
