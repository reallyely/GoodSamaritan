import React from 'react';
import { Flex, Box } from 'reflexbox';

const Post = ({data}) => {
	let {
		message,
		status_type,
		updated_time,
		object_id,
		picture,
		link,
		from,
	} = data

	return (
		<Flex
			m={2}
			style={{backgroundColor:"white"}}
		>
			<Box
				justify="flex-start"
				col={3}
			>
				<a href={link}>
					<img src={picture} style={{display:'inline',float:'left'}}/>
				</a>
			</Box>
			<Box m={1} p={1} wrap justify="flex-start">
				{message}
			</Box>
		</Flex>
	)
}

Post.propTypes = {
	data: React.PropTypes.object.isRequired
};

export default Post;
