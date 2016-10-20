import {Flex, Box} from 'reflexbox';
import React from 'react';
import _ from 'lodash';

import CallToAction from './CallToAction';

const Header = ({photo}) => {

	let style = {
		appHeader: {
			backgroundImage: `
				linear-gradient(0deg, rgba(050, 050, 050, 0.7), rgba(80, 80, 80, 1)),
				url(${photo})
			`,
			backgroundPosition: 'center',
			padding: '20px',
			color: 'white',
			height: '30rem',
			width: '100%',
			boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',

		},
		blurBackground: {
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			height: '100%',
			position: 'absolute'
		}
	}
	return (
		<Flex column
			justify="space-around"
			style={style.appHeader}>
			<h2
				className="french small-caps"
				style={{
					fontSize: '3.5rem',
					marginBottom: '-50px'
				}}>
				Good Samartain Free Clinic
			</h2>
			<subtitle
				className="french"
				style={{
					fontSize: '2.0rem',
					fontStyle: 'italic',
				}}>
				Demonstrate the love of Jesus Christ through medicine
			</subtitle>
			<CallToAction />
		</Flex>
	)
}

// Header.propTypes = {
// 	photo: React.PropTypes.object
// };

export default Header;
