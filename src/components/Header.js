import {Flex, Box} from 'reflexbox';
import React from 'react';
import _ from 'lodash';

import GoodSamWhite from '../../public/GoodSamWhite.png';
// import CallToAction from './CallToAction';

const Header = ({location, phone, generalInfo}) => {
	let style = {
		appHeader: {
			overflow: 'hidden',
			padding: '20px',
			color: '#FAFAFA',
			textShadow: "#222 1px 0 5px",
		}
	}

	return (
		<Flex column
			justify="space-around"
			style={style.appHeader}
		>
			<Box>
				<img src={GoodSamWhite} style={{maxWidth:"100%"}} alt="Good Samaritan Free Clinic logo"/>
			</Box>
			
			<subtitle className="header1"
				style={{
					fontSize: '2.0rem',
					fontStyle: 'italic',
				}}
			>
				Urgent, Chronic, and Spiritual care
			</subtitle>
			<form className="donate--banner" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
				<input type="hidden" name="cmd" value="_s-xclick"/>
				<input type="hidden" name="hosted_button_id" value="CQCNKLHGDLXYS"/>
				<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
				<img alt="" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
			</form>
			<subtitle className="header1" style={{ fontSize: "1.5rem", paddingTop: "2rem" }}>Hours of Operation</subtitle>
			<subtitle style={{margintop: '1.5rem'}} className="header1"><strong>No Appointment necessary</strong></subtitle>
			<div
				style={{
					marginTop: '1.5rem',
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-around'

				}}
			>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					<subtitle className="header1">{location.street}, {location.city}, {location.state}</subtitle>
					<subtitle className="header1">{phone}</subtitle>
					<br/>
					<subtitle className="header1">Wednesdays at 5:00pm</subtitle>
					<subtitle className="header1">1st Tuesday at 5:00pm</subtitle>
					<subtitle className="header1">3rd Tuesday at 5:00pm (Women's health and Pediatrics)</subtitle>
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column'
					}}
				>
					<subtitle className="header1">Back Creek Valley Full Gospel Church</subtitle>
					<subtitle className="header1">(304) 702-1584</subtitle>
					<br/>
					<subtitle className="header1">2nd Monday at at 5:30pm</subtitle>
				</div>
				
			</div>

		</Flex>
	)
}

export default Header;
