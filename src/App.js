import React, { Component } from 'react';
import './App.css';
import Posts from './containers/Posts';
import Events from './containers/Events';
import Header from './components/Header';
import _ from 'lodash';

import banner from '../public/banner2.jpg'

import { Flex } from 'reflexbox';

const style = {
	backgroundImage: `url(${banner})`,
	backgroundPosition: 'flex-start',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'contain'
}

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			photo: [],
			loading: true
		}
	}

  render() {
    return (
      <Flex column align="center" className="App" style={style}>
				<Header/>
				<Flex className="container body" justify="center" align="center" m={2} column>
					<Events></Events>
					<Posts></Posts>
				</Flex>
      </Flex>
    );
  }
}

export default App;
