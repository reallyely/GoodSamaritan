import React from 'react';

const anEvent = ({data}) => (
	<div>
		{JSON.stringify(data)}
	</div>
);

anEvent.propTypes = {
	data: React.PropTypes.object.isRequired
};

export default anEvent;
