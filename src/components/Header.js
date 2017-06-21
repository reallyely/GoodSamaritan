import {Flex} from 'reflexbox';
import React from 'react';
import _ from 'lodash';
import banner from '../../public/banner.jpg'

import CallToAction from './CallToAction';

const Header = ({photo}) => {
	console.log(banner);
	let style = {
		appHeader: {
			backgroundImage: banner,
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			padding: '20px',
			color: '#331832',
			width: '100%',
			// boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
		}
	}
	return (
		<Flex column
				justify="space-around"
				style={style.appHeader}
			>
			<h2
				className="header1"
				style={{
					fontSize: '3.5rem',
					marginBottom: '-50px'
				}}>
				Good Samaritain Free Clinic
			</h2>
			<subtitle
				className="header1"
				style={{
					fontSize: '2.0rem',
					fontStyle: 'italic',
				}}>
				Demonstrate the love of Christ through medicine
			</subtitle>
			<CallToAction />
		</Flex>
	)
}

export default Header;
