import {getEvents} from '../api/getFacebookPosts';
import anEvent from '../components/Event'

import React from 'react';

class Events extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			events: [],
			loading: true
		}
	}
	componentWillMount() {
		this.events = getEvents()
			.then(res => {
				console.log(res);
				this.setState({
					events: res.data.data,
					loading: false
				});
				return res;
			})
			.catch(err => {return err})
	}

	render() {
		if (this.state.loading === false) {
			return (
				<div>
					<Event data={this.state.events.data.data[0]}/>
				</div>
			);
		} else {
			return null;
		}
	}

}

export default Events;
