import React from 'react';
import {Flex, Box} from 'reflexbox';
import moment from 'moment';

const AnEvent = ({data}) => {
	let {
		name,
		description,
		start_time,
		place: {name:loc},
		cover,
		attending_count,
		ticket_uri
	} = data

	return (
		<Flex m={2} p={2} column
			style={{
				border:"medium double #AAA",
				backgroundColor:"white"
			}}>
			<Flex mb={2} pb={2} align="stretch" justify="space-around"
				style={{
					fontFamily: "Anonymous Pro, monospace",
					fontSize: "2rem",
					borderBottom: "thin solid #AAA",
				}}>
				<Box pr={3} column
					style={{
						borderRight:"thin solid #AAA",
				}}>
					<Box style={{fontSize:"2rem"}}>
						{moment(start_time).format('DD MMM').toUpperCase()}
					</Box>
					<Box m={-1} style={{fontSize:"2rem"}}>
						{moment(start_time).format('hhmmA')}
					</Box>
				</Box>
				<Box pr={3} align="flex-start"
					style={{
						borderRight:"thin solid #AAA",
					}}>
					<a href={ticket_uri}>{name}</a>
				</Box>
				<Box>
					{loc}
				</Box>
			</Flex>
			<Box style={{
				textAlign: "left",
			}}>
				{description}
			</Box>
		</Flex>
	)
};


export default AnEvent;
