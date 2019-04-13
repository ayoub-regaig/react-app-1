import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './ala.css';

class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">

          <div>
            <h1>Welcome Ayoub to React !!!</h1>
          </div>
          <img src={'https://cdn-images-1.medium.com/max/1600/1*FVtCyRdJ6KOr4YswTtwMeA.jpeg'} />
          <img src={logo} className="App-logo" alt="logo" />
          <br/>
          <p className="brha" >azertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazertyazerty</p>
          <hr/>
          <p className="superman">quertyquertyquertyquertyquertyquertyquertyquertyquertyquertyquertyquertyquertyquertyquertyquertyquertyquertyquertyquertyquertyquertyquertyquertyquertyquertyquertyquertyquertyquertyquertyquertyquertyquertyquertyquertyquertyquertyquertyquertyquertyquertyquertyquertyquertyquertyquertyquertyquertyquertyquertyquertyquertyquertyquertyquertyquertyquerty</p>
          <hr/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
