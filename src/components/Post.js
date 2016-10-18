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
			align="center"
			style={{backgroundColor:"white"}}
			column
		>
			<Box
				col={3}>
				<a href={link}>
					<img src={picture} />
				</a>
			</Box>
			<Box m={2} p={2}
				wrap
				justify="flex-start"
				style={{width:"100%", textAlign:'left', borderBottom: "thin solid #6e6e6e"}}>
				{message}
			</Box>
		</Flex>
	)
}

Post.propTypes = {
	data: React.PropTypes.object.isRequired
};

export default Post;
