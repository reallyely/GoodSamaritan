import {getPosts} from './getFacebookPosts.js';

it('gets a positive response from graphql', () => {
	expect(getPosts()).toBeTruthy();
})
