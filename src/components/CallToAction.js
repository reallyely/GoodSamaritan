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
		fontFamily: 'Overpass, serif',

	},
	button: {
		background:"#F0544F",
		borderRadius: '5px',
		color: "#FDFDFD",

	},
	expanded: {
		background:"#F0544F",
		borderRadius: '5px',
		color: "#FDFDFD"
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
		this.setState({expanded: !this.state.expanded})
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
				<TransitionGroup style={{minHeight: "100px"}}>
					{this.state.expanded
						? <Expanded key={1} p={2}
								onClose={this.handleClick}
								style={style.expanded}
							/>
						: this.state.complete
							? null
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
			<Box {...this.props}>
				<span style={{
					fontWeight: "800",
					textShadow: "1px 1px 2px rgba(255,255,255,0.5)",
					backgroundClip: "text",
				}}>
					I <span style={{fontSize: '0.85em'}}>WANT TO HELP</span>
				</span>
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
		return (<Box column {...this.props}>
			<Flex row
				justify="space-between"
			>
				<p className="header1" style={{margin: '0px'}}>I'm interested in...</p>
				<FontAwesome
					inverse={true}
					name="times"
					onClick={this.props.onClose}
					onMouseEnter={this.handleMouseIn}
					onMouseLeave={this.handleMouseOut}
					style={{cursor:'pointer'}}
				/>
			</Flex>
			<Flex column>
				<input className="para1" type="text" placeholder="email" style={{border:"0px", padding:"1px"}}/>
				<Flex m={1} row>
					{['Counseling', 'Nursing', 'Clerical', 'Management'].map(ele =>
							<span className="para1" style={{fontSize: "0.5em"}}>
								<input onClick={this.handleClick} key={ele} type="checkbox" />
								{ele}
							</span>
						)}
				</Flex>
				<button style={{border:"none", backgroundColor: "#D81E5B", width: "100px"}} type="button" >Send</button>
			</Flex>
		</Box>
		);
	}
}


export default CallToAction;
