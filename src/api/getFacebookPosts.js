import axios from 'axios';

const fb = 'https://graph.facebook.com/v2.7/245518842150454'
const accessToken = 'access_token=1090962680953288|s5T7-lrv6xwk7ED54LAi1Ud_Lgc'


function getPosts() {
	return axios.get(`${fb}/feed?${accessToken}`)
}

function getEvents() {
	return axios.get(`${fb}/events?${accessToken}`)
}

export {getPosts, getEvents}
