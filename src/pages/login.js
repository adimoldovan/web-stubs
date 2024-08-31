import users from '../data/users.json';
import { createSession, getActiveUserSession, getDefaultContainer, goHome } from '../utils/utils.js';

function validCredentials(values) {
	const user = users.filter((u) => u.username === values.user)[0];
	return user && user.password === values.pass;
}

export default function login() {
	const userWithActiveSession = getActiveUserSession();
	if (userWithActiveSession) {
		goHome();
	}

	const container = getDefaultContainer('Sign in');

	const description = document.createElement('p');
	description.classList.add('page-description');
	description.textContent = `Valid credentials: ${users.map((user) => `[${user.username}/${user.password}]`).join(' ')}`;
	container.appendChild(description);

	const registerLink = document.createElement('p');
	registerLink.innerHTML = `<Col>No account yet? Register one <a href='?page=signup'>here</a></Col>`;
	container.appendChild(registerLink);

	const formContainer = document.createElement('div');
	formContainer.classList.add('form-container');
	container.appendChild(formContainer);

	const form = document.createElement('form');
	form.addEventListener('submit', handleSubmit);
	formContainer.appendChild(form);

	let errorMessage = '';

	const errorElement = document.createElement('p');
	errorElement.classList.add('error-message');
	form.appendChild(errorElement);

	const formGroupUser = document.createElement('div');
	formGroupUser.classList.add('form-group');
	form.appendChild(formGroupUser);

	const inputUser = document.createElement('input');
	inputUser.id = 'user';
	inputUser.placeholder = 'Enter your username';
	formGroupUser.appendChild(inputUser);

	const formGroupPass = document.createElement('div');
	formGroupPass.classList.add('form-group');
	form.appendChild(formGroupPass);

	const inputPass = document.createElement('input');
	inputPass.id = 'pass';
	inputPass.type = 'password';
	inputPass.placeholder = 'Enter your password';
	formGroupPass.appendChild(inputPass);

	const submitButton = document.createElement('button');
	submitButton.textContent = 'Sign in';
	form.appendChild(submitButton);

	function handleSubmit(event) {
		event.preventDefault();
		const values = {
			user: inputUser.value,
			pass: inputPass.value
		};
		if (validCredentials(values)) {
			createSession(values.user);
			goHome();
		} else {
			form.reset();
			errorMessage = 'Invalid username or password!';
			errorElement.textContent = errorMessage;
			errorElement.style.display = 'block';
		}
	}

	return container;
}
