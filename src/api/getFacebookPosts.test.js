import {getPosts} from './getFacebook.js';

it('gets a positive response from graphql', () => {
	expect(getPosts()).toBeTruthy();
	expect(getEvents()).toBeTruthy();
})
