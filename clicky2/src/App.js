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
import Clock from "./components/Clock/Clock";

// var shuffledCards = []


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
    // console.log(event.id);


    if (this.state.clicked.indexOf(event.id) < 0) {

      this.setState({
        PlayerScore: this.state.PlayerScore + 1,
        HighScore: this.state.HighScore + 1,
        clicked: this.state.clicked.concat([event.id])
      })
      this.randomizer(glyphs)

      // console.log("clicked:", this.state.clicked)
      // console.log("score:", this.state.PlayerScore)
    } else {
      this.setState({
        PlayerScore: 0,
        HighScore: this.state.HighScore

      })
      this.randomizer(glyphs)
      //score stuff
    }
    //do this no matter what the guess

  } //end handlerClick fx

  newGame = (randomizer) => {
    console.log("new game fx");
    randomizer();
    this.setState({
      PlayerScore: 0,

    })

    if (HighScore > PlayerScore) {
      this.setState({
        HighScore: HighScore
      })
    } else {
      this.setState({
        HighScore: PlayerScore
      })
    }
  }



  render() {

    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Clicky, a game build with React.js. Click any image, but NO REPEATS!<br /> Click Start to begin.</h1>
        </header>

        <div id="GameBoard" className="col-md-10">

          {this.state.glyphs.map(glyph => (
            <Card
              id={glyph.id}
              key={glyph.id}
              name={glyph.name}
              image={glyph.image}
              handlerClick = {this.handlerClick.bind(null, glyph)}
            />
          ))}
        </div>

        <div className="col-md-2">
          <Clock />
          <Start
            // newGame={this.newGame()}
            handlerClick = {this.handlerClick}

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

// const TimerUp = () => {
//   alert: ("time's up!");
// }

export default App;
