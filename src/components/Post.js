import React from 'react';
import { Flex, Box } from 'reflexbox';

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
			align="center"
			column
			style={{
				border: "thin solid #AAA",
				backgroundColor: "white"
			}}
		>
			<Box m={2} p={2}
				wrap
				justify="flex-start"
				style={{
					width:"100%",
					textAlign:'left',
				}}>
				{message}
			</Box>
		</Flex>
	)
}

Post.propTypes = {
	data: React.PropTypes.object.isRequired
};

export default Post;
