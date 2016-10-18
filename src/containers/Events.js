import { getEvents } from '../api/getFacebook';
import AnEvent from '../components/AnEvent'

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
					<AnEvent data={this.state.events[0]}/>
				</div>
			);
		} else {
			return null;
		}
	}

}

export default Events;
