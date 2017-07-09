import axios from 'axios';

const fb = 'https://graph.facebook.com/v2.8'
const pageID = '245518842150454'
const accessToken = 'access_token=1090962680953288|493fd3b7d2a22a8fdbc1915190748104'


function getPosts() {
	let fields = [
		'message',
		'status_type',
		'updated_time',
		'object_id',
		'link',
		'from',
		'full_picture',
		'name',
		'description'
	];

	return axios.get(`${fb}/${pageID}/feed?
		fields=${fields.join(',')}
		&limit=5
		&${accessToken}`
		.replace('\n','')
	);
}

function getEvents() {
	let fields = [
		'name',
		'description',
		'start_time',
		'place',
		'cover',
		'attending_count',
		'ticket_uri',
	];

	return axios.get(`${fb}/${pageID}?fields=events.limit(1){${fields.join(',')}}&${accessToken}`)
}

// function getPhotos() {
// 	return axios.get(`${fb}/729489963753337/photos?type=uploaded&fields=images{source}&${accessToken}`)
// }

export {getPosts, getEvents}
