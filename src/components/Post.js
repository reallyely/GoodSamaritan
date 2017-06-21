import React from 'react';
import { Flex, Box } from 'reflexbox';
import moment from 'moment';

const Post = ({data}) => {
	let {
		message,
		status_type,
		updated_time,
		object_id,
		full_picture,
		link,
		from
	} = data

	return (
		<Flex
			m={2}
			p={2}
			justify="flex-start"
			column
			style={{
				backgroundColor: "#E4E7D1",
				boxShadow: "0px 5px 5px rgba(15, 15, 15, 0.25)",
			}}
		>
			<Flex
				m={0}
				p={1}
				row
				justify="flex-end">
				<h3 style={{margin: 0, padding: 0}} className="header1">{moment(updated_time).format('dddd, DD MMMM YYYY')}</h3>
			</Flex>
			{full_picture
					? <Box>
							<a href={link}><img src={full_picture} style={{maxWidth: '400px'}}/></a>
						</Box>
					: null
			}
			{message
					? <Box m={2} p={2}
						className="para1"
						wrap
						justify="flex-start"
						style={{
							width:"100%",
							textAlign:'left',
						}}>
							{message.split("\n").map((item) => (
							<span>
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

Post.propTypes = {
	data: React.PropTypes.object.isRequired
};

export default Post;
