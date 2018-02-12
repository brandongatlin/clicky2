import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Card from "./components/Card/Card";
import glyphs from "./glyphs";
import Start from "./components/Start/Start";
import PlayerScore from "./components/Score/PlayerScore";
import HighScore from "./components/HighScore/HighScore.js";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to Clicky. A game build with React. Click an images, but NO REPEATS! Click Start to begin.</h1>
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
          <Start />
          <HighScore />
          <PlayerScore />
        </div>

      </div>
    );
  }
}

export default App;
