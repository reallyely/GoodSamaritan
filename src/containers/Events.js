import { getEvents } from '../api/getFacebook'
import AnEvent from '../components/AnEvent'
import { sortBy, compose, prop, head } from 'ramda'

import React from 'react';

const toDate = dateString => new Date(dateString)
const byStartDate = compose(toDate, prop('start_time'))
const startAsc = sortBy(byStartDate)

class Events extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			event: {},
			loading: true
		}
	}
	componentWillMount() {
		getEvents(2)
			.then(res => {
				let events = startAsc(res.data.data)
				let event = head(events)

				this.setState({
					event,
					loading: false
				});
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
