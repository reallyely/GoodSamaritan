import React from 'react';

const Post = ({data}) => {
	return (
		<div>
			<p>
				{JSON.stringify(data)}
			</p>
		</div>
	)
}

Post.propTypes = {
	data: React.PropTypes.object.isRequired
};

export default Post;
