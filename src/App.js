import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './containers/Posts';
import Events from './containers/Events';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Good Samartain Free Clinic</h2>
          <subtitle>demonstrating the love of Jesus Christ through medicine</subtitle>
          <button>I want to help</button>
        </div>
				<div style={
					{margin:"30px",
					padding:"30px",
					backgroundColor:"#EEE"
					}
				}>
					<Events></Events>
					<Posts></Posts>
				</div>
      </div>
    );
  }
}

export default App;
