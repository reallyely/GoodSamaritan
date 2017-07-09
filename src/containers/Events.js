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
		getEvents()
			.then(res => {
				let events = res.data.events.data
				let event = Array.isArray(events) ? events[0] : events

				if (!new Date(event.start_time) < new Date()) {
					event = undefined
				}

				this.setState({
					event,
					loading: false
				});
				return res;
			})
			.catch(console.log)
	}

	render() {
		if (this.state.loading === false) {
			return (
				<div>
					{this.state.event
						? <AnEvent data={this.state.event}/>
						: null
					}
				</div>
			);
		} else {
			return null;
		}
	}

}

export default Events;
