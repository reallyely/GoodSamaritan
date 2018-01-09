import React, { Component } from 'react';
import _ from 'lodash';
import { Flex } from 'reflexbox';

import './App.css';
import { getInfo } from './api/getFacebook'
import Posts from './containers/Posts';
import Events from './containers/Events';
import Header from './components/Header';

import banner from '../public/banner2.jpg'


const style = {
	backgroundImage: `url(${banner})`,
	backgroundPosition: 'flex-start',
	backgroundRepeat: 'no-repeat',
	backgroundSize: '100%',
	width: '100%'
}

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			photo: [],
			loading: true,
			location: {},
			phone: ''
		}
	}

	componentWillMount() {
		getInfo().then(({data: {location, phone}}) => this.setState({location, phone}))
	}

  render() {
    return (
      <Flex column align="center" className="App" style={style}>
				<Header location={this.state.location} phone={this.state.phone} />
				<Flex className="container body" justify="center" align="center" m={2} column>
					<Events></Events>
					<Posts></Posts>
				</Flex>
      </Flex>
    );
  }
}

export default App;
