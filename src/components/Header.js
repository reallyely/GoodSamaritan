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
			width: '100%',
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
			<subtitle className="header1">{location.street}, {location.city}, {location.state}</subtitle>
			<subtitle className="header1">{phone}</subtitle>
			<subtitle className="header1" style={{fontSize: "1.5rem", paddingTop:"2rem"}}>Hours of Operation</subtitle>
			<subtitle className="header1">Wednesdays and 1st Thursdays at 5:00pm</subtitle>
			<subtitle className="header1">2nd Monday at Back Creek Valley Full Gospel Church at 5:30pm</subtitle>
			<subtitle className="header1">4th Monday at Immanuel House at 6:30pm</subtitle>
			<subtitle className="header1"><strong>No Appointment necessary</strong></subtitle>
		</Flex>
	)
}

export default Header;
