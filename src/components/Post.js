import React from 'react';
import { Flex, Box } from 'reflexbox';
import moment from 'moment';

const Post = ({data}) => {
	let {
		message,
		// status_type,
		updated_time,
		// object_id,
		full_picture,
		link,
		// from,
		name,
		description
	} = data

	return (

		<Flex
			mt={2}
			mb={2}
			p={2}
			justify="flex-start"
			column
			style={{
				backgroundColor: "rgb(253, 253, 253)",
				boxShadow: "0px 5px 5px rgba(15, 15, 15, 0.25)",
			}}
		>
			<Flex
				m={1}
				p={1}
				justify="flex-end">
				<h3 style={{margin: 0, padding: 0}} className="header1">{moment(updated_time).format('dddd, DD MMMM YYYY')}</h3>
			</Flex>
			{full_picture
					? <Flex column>
							<a href={link}><img src={full_picture} style={{maxWidth: '100%'}} alt={description}/></a>
							<Box className="para1" align="flex-start" style={{fontSize: ".75rem"}}>
								{name ? `From ${name}` : null}
								{description ? `: ${description}` : null}
							</Box>
						</Flex>
					: null
			}
			{message
					? <Box m={1} p={1}
						className="para1"
						wrap
						justify="flex-start"
						style={{
							width:"100%",
							textAlign:'left',
						}}>
							{message.split("\n").map((item, key) => (
							<span key={key}>
								{item}
								<br/>
							</span>
							))}
						</Box>
					: null
				}

		</Flex>
	)
}

export default Post;
