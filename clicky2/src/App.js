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
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to Clicky, a game build with React.js. Click any image, but NO REPEATS!<br /> Click Start to begin.</h1>
        </header>

        <div id="GameBoard" className="col-md-10">



          {glyphs.map(glyph => (
            <Card
              id={glyph.id}
              key={glyph.id}
              name={glyph.name}
              image={glyph.image}
            />
          ))}
        </div>

        <div className="col-md-2">
          <Clock />
          <Start />
          <HighScore />
          <PlayerScore />
        </div>

      </div>
    );
  }
}

export default App;

// var shuffledCards = []
// var randomCard = glyphs[Math.floor(Math.random() * glyphs.length)]
// shuffledCards.push(randoCard)
