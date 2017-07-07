import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './containers/Posts';
import Events from './containers/Events';
import Header from './components/Header';
import { getPhotos } from './api/getFacebook';
import _ from 'lodash';

import banner from '../public/banner2.png'

import {Flex, Box} from 'reflexbox';

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
	componentWillMount() {
		this.events = getPhotos()
			.then(res => {
				let photo = _.sample(res.data.data).images
				photo = photo[0].source
				this.setState({
					photo: photo,
					loading: false
				});

				return res;
			})
			.catch(err => {return err})
	}

  render() {
    return (
      <Flex column align="center" className="App" style={style}>
				<Header photo={this.state.photo}/>
				<Flex className="container body" justify="center" align="center" m={2} column>
					<Events></Events>
					<Posts></Posts>
				</Flex>
      </Flex>
    );
  }
}

export default App;
