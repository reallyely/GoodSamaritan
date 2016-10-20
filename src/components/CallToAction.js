import React from 'react';
import {Flex, Box} from 'reflexbox';
import TransitionGroup from 'react-addons-transition-group'
import anime from 'animejs';
import {findDOMNode} from 'react-dom';
import TweenMax from 'gsap';

import './CallToAction.css'

const style = {
	bg: {
		fontSize: '2rem',
		fontFamily: 'IM Fell French Canon SC, serif',
	},
	button: {
		backgroundImage: `
			linear-gradient(0deg, rgb(201, 46, 46),
			rgb(249, 57, 57))
		`,
		borderRadius: '5px',
		border: 'outset 2px white'
	}
}

class CallToAction extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			hover: false,
			expanded: false,
		}
		this.handleMouseIn = this.handleMouseIn.bind(this)
		this.handleMouseOut = this.handleMouseOut.bind(this)
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {
		this.setState({
			expanded: true,
		})
	}


	handleMouseIn() {
		this.setState({hover:true})
	}
	handleMouseOut() {
		this.setState({hover:false})
	}

	render() {
		return (
			<Flex m={2}
				justify="center"
				style={style.bg}
			>
				<TransitionGroup>
					{
						this.state.expanded
							? <div> IM HERE! </div>
							: <Collapsed
									p={2}
									 onMouseEnter={this.handleMouseIn}
									 onMouseLeave={this.handleMouseOut}
									 onClick={this.handleClick}
									 style={style.button}
									 justify="flex-start"
									 className={this.state.hover ? 'hover' : 'hoverOut'}
								 />
					}
				</TransitionGroup>
			</Flex>
		)
	}
}

class Collapsed extends React.Component {
	componentWillEnter (callback) {
		console.log('hit componentWillEnter');
    const el = findDOMNode(this);
    TweenMax.fromTo(el, 0.3, {y: 100, opacity: 0}, {y: 0, opacity: 1, onComplete: callback});
  }

	componentWillLeave (callback) {
		console.log('hit componentWillLEave');
    const el = findDOMNode(this);
    TweenMax.fromTo(el, 0.3, {y: 0, opacity: 1}, {y: -100, opacity: 0, onComplete: callback});
  }

	render() {
		return (
			<Box
				{...this.props}
				>
					I want to help
			</Box>
		)
	}
}

let expanded = (...props) => {
	return null;
}

export default CallToAction;
