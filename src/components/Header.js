import {Flex, Box} from 'reflexbox';
import React from 'react';

const Header = ({data}) => (
	<Flex column className="App-header french small-caps">
		<h2>Good Samartain Free Clinic</h2>
		<subtitle>demonstrating the love of Jesus Christ through medicine</subtitle>
		<Box>
			<button>I want to help</button>
		</Box>
	</Flex>
);

Header.propTypes = {
	data: React.PropTypes.object
};

export default Header;
