import React from 'react';
import {Flex, Box} from 'reflexbox';
import moment from 'moment';

const AnEvent = ({data}) => {
	let {
		name,
		description,
		start_time,
		place,
		// cover,
		// attending_count,
		ticket_uri
	} = data

	return (
		<Flex m={2} p={2} column
			style={{
				border:"medium double #AAA",
				backgroundColor:"white"
			}}
		>
			<Flex className="header1"
				mb={2} pb={2}
				justify="space-between"
				wrap
				style={{
					fontSize: "2rem",
					borderBottom: "thin solid #AAA",
				}}
			>
				{/* {JSON.stringify(BoxPM(<Box> Test </Box>))} */}
				<Flex
					column
					p={1}
					style={{
						flex: "1"
					}}
				>
					<Box style={{fontSize:"2rem"}}>
						{moment(start_time).format('DD MMM YY').toUpperCase()}
					</Box>
					<Box style={{fontSize:"2rem"}}>
						{moment(start_time).format('hh:mmA')}
					</Box>
				</Flex>
				<Flex
					column
					justify="center"
					p={1}
					style={{
						flex: "1"
					}}>
					<div>
						{ticket_uri
							? <a href={ticket_uri}>{name}</a>
							: <span>{name}</span>
						}
					</div>
				</Flex>
				{place
					? <Flex
						p={1}
						column
						justify='center'
						style={{
							flex: "1"
						}}
					>
						{place ? place.name : null}
					</Flex>
					: null
				}
			</Flex>
			<Box className="para1"
				style={{
					textAlign: "left"
				}}
			>
				{description}
			</Box>
		</Flex>
	)
};


export default AnEvent;
