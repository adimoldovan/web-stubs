import { getActiveUserSession } from '../utils/utils.js';

export default function home() {
	const container = document.createElement('div');

	const userWithActiveSession = getActiveUserSession();

	const title = document.createElement('h1');
	title.textContent = `Welcome to web-stubs, ${userWithActiveSession ? userWithActiveSession : 'guest'}!`;

	if (userWithActiveSession) {
		const signOut = document.createElement('a');
		signOut.textContent = 'Sign out';
		signOut.href = '?page=signout';
		title.appendChild(signOut);
	}

	container.appendChild(title);

	return container;
}
