import {Flex, Box} from 'reflexbox';
import React from 'react';
import _ from 'lodash';


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
			fontSize: '3.0rem',
			height: '30rem',
			width: '150%',
			boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',

		},
		blurBackground: {
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			height: '100%',
			position: 'absolute'
		},
		noBlur: {
		}

	}
	return (
		<Flex column style={style.appHeader}>
			<h2 className="french small-caps">Good Samartain Free Clinic</h2>

			<subtitle className="french small-caps">
				demonstrating the love of Jesus Christ through medicine
			</subtitle>
			<Box>
				<button>I want to help</button>
			</Box>
		</Flex>
	)
}

// Header.propTypes = {
// 	photo: React.PropTypes.object
// };

export default Header;
