import { getActiveUserSession } from '../utils/utils.js';

export default function home() {
	const container = document.createElement('div');

	const userWithActiveSession = getActiveUserSession();

	const title = document.createElement('h1');
	title.textContent = `Welcome to web-stubs, ${userWithActiveSession ? userWithActiveSession : 'guest'}!`;

	const action = document.createElement('a');
	action.classList.add('signInLink');
	action.textContent = userWithActiveSession ? 'Sign out' : 'Sign in';
	action.href = userWithActiveSession ? '?page=signout' : '?page=login';
	title.appendChild(action);

	container.appendChild(title);

	return container;
}
