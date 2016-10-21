import React from 'react';
import {Flex, Box} from 'reflexbox';
import TransitionGroup from 'react-addons-transition-group'
import anime from 'animejs';
import {findDOMNode} from 'react-dom';
import TweenMax from 'gsap';
import FontAwesome from 'react-fontawesome';

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
	},
	expanded: {
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
			expanded: !this.state.expanded,
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
							? <Expanded key={1} p={2}
									onClose={this.handleClick}
									style={style.expanded}
								/>
							: this.state.complete ?
								null
							: <Collapsed key={2}
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
	constructor(props) {
		super(props)
		this.state = {
			complete: false
		}
	}
	componentWillEnter (callback) {
    const el = findDOMNode(this);
    TweenMax.fromTo(el, 0.3, {opacity: 0}, {opacity: 1, onComplete: callback});
  }

	componentWillLeave (callback) {
    const el = findDOMNode(this);
    TweenMax.fromTo(el, 0.0, {opacity: 1}, {opacity: 0, onComplete: callback});
  }
	handleClick() {
		this.setState({
			complete: true,
		})
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

class Expanded extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			hover: false
		}
	}

	handleMouseIn() {
		this.setState({hover:true})
	}

	handleMouseOut() {
		this.setState({hover:false})
	}

	componentWillEnter (callback) {
		const el = findDOMNode(this);
		TweenMax.fromTo(el, 0.3, {opacity: 0}, {opacity: 1, onComplete: callback});
	}

	componentWillLeave (callback) {
		const el = findDOMNode(this);
		TweenMax.fromTo(el, 0.0, {opacity: 1}, {opacity: 0, onComplete: callback});
	}
	render() {
		return (
			<Box column {...this.props}>
				<Flex row
					justify="space-between">
					<h4>I'm interested in...</h4>
					<FontAwesome
						inverse={true}
						size="1x"
						name="fa-times"
						onClick={this.props.onClose}
						onMouseEnter={this.handleMouseIn}
						onMouseLeave={this.handleMouseOut}
						style={{cursor:'pointer'}}
					>{"\uf00d"}</FontAwesome>
				</Flex>
				<Flex column>
					<input type="text" placeholder="email" />
					<Flex row>
						{['dancing', 'cleaning', 'child care'].map(
							ele =>
								<span>
									<input onClick={this.handleClick} key={ele} type="checkbox" />
									{ele}
								</span>
							)}
					</Flex>
					<button type="button" >Send</button>
				</Flex>
			</Box>);

	}
}

export default CallToAction;
