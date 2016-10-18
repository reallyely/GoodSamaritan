import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './containers/Posts';
import Events from './containers/Events';
import Header from './components/Header';

import {Flex, Box} from 'reflexbox';

class App extends Component {
  render() {
    return (
      <Flex column align="center" className="App">
				<Header />
				<Flex className="container french body" justify="center" align="center" m={6} column>
					<Events></Events>
					<Posts></Posts>
				</Flex>
      </Flex>
    );
  }
}

export default App;
