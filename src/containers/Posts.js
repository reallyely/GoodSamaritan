import React from 'react';
import {getPosts} from '../api/getFacebook';
import Post from '../components/Post';
import { Flex, Box } from 'reflexbox';

class Posts extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			posts: [],
			loading: true
		}

	}
	// get facebook posts
	componentDidMount() {
		this.posts = getPosts()
			.then(res => {
				this.setState({
					posts: res.data.data,
					loading: false
				});
				return res
			})
			.catch(err => {return err})

	}
	render() {
		if (this.state.loading === false) {
			return (
				<Flex
					mr={6}
					ml={6}
				>
					<Box
						className="postWrapper">
						{
							this.state.posts.map((post, i) => {
								return (<div key={i}><Post key={i} data={post} /></div>)
							})
						}
					</Box>
				</Flex>
			);
		} else {
			return null
		}
	}

}

export default Posts;
