import React from 'react';
import {Flex, Box} from 'reflexbox';
import moment from 'moment';

const AnEvent = ({data}) => {
	let {name, description, start_time, end_time, place: {name:loc}} = data
	console.log(loc);
	return (
		<Flex m={2} column>
			<Flex className="french smallcaps" justify="space-around">
				<Box>
					{name}
				</Box>
				<Box>
					{moment(start_time).format('dddd, MMMM, DD')}
					({moment(end_time).fromNow()})
				</Box>
				<Box>
					{loc}
				</Box>
			</Flex>
			<Box style={{textAlign: "left"}}>
				{description}
			</Box>
		</Flex>
	)
};


export default AnEvent;
