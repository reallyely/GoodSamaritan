import React from 'react';
import {getPosts} from '../api/getFacebookPosts';
import Post from '../components/Post';

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
				<div>
					<div className="post-card">
						{
							this.state.posts.map((post, i) => {
								return (<div key={i}><Post key={i} data={post} /></div>)
							})
						}
					</div>
				</div>
			);
		} else {
			return null
		}
	}

}

export default Posts;
