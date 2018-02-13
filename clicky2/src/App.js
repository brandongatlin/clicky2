import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Card from "./components/Card/Card";
import glyphs from "./glyphs";
import Start from "./components/Start/Start";
import PlayerScore from "./components/Score/PlayerScore";
import HighScore from "./components/HighScore/HighScore.js";
import Clock from "./components/Clock/Clock";


class App extends Component {
constructor(props) {
        super(props);
        this.state = { clicked: [], glyphs: glyphs, PlayerScore: 0, HighScore: 0 };
    }

    handlerClick = (event) => {
      console.log(event.id);
      
      if (this.state.clicked.indexOf(event.id) < 0) {
        this.setState({PlayerScore: this.state.PlayerScore + 1, clicked: this.state.clicked.concat([event.id])})
        console.log("clicked:", this.state.clicked)
        console.log("score:", this.state.PlayerScore)
        //other stuff, like score inc.
      }else {
         //shuffle cards again
         //score stuff
      }
    }

    randomizer = () => {
      //
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
          <Start />
          <HighScore />
          <
          PlayerScore 
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

// var shuffledCards = []
// var randomCard = glyphs[Math.floor(Math.random() * glyphs.length)]
// shuffledCards.push(randoCard)
