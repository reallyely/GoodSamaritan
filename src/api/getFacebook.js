import axios from 'axios';

const fb = 'https://graph.facebook.com/v2.7/245518842150454'
const accessToken = 'access_token=1090962680953288|s5T7-lrv6xwk7ED54LAi1Ud_Lgc'


function getPosts() {
	let fields = [
		'message',
		'status_type',
		'updated_time',
		'object_id',
		'link',
		'from',
		'picture',
	];

	return axios.get(`${fb}/feed?fields=${fields.join(',')}&${accessToken}`)
}

function getEvents() {
	return axios.get(`${fb}/events?${accessToken}`)
}

function getPhotos() {
	return axios.get(`${fb}/photos/uploaded?${accessToken}`)
}

export {getPosts, getEvents, getPhotos}
