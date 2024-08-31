import './forms.css';
import users from '../data/users.json';
import { createSession, getActiveUserSession, goHome } from '../utils/utils.js';

function validCredentials(values) {
	const user = users.filter((u) => u.username === values.user)[0];
	return user && user.password === values.pass;
}

export default function login() {
	const userWithActiveSession = getActiveUserSession();
	if (userWithActiveSession) {
		goHome();
	}

	const container = document.createElement('div');

	const title = document.createElement('h1');
	title.textContent = 'Sign in';
	container.appendChild(title);

	const description = document.createElement('p');
	description.classList.add('page-description');
	description.textContent = `Valid credentials: ${users.map((user) => `[${user.username}/${user.password}]`).join(' ')}`;
	container.appendChild(description);

	const registerLink = document.createElement('p');
	registerLink.innerHTML = `<Col>No account yet? Register one <a href='?page=signup'>here</a></Col>`;
	container.appendChild(registerLink);

	const row = document.createElement('div');
	row.classList.add('row');
	container.appendChild(row);

	const col = document.createElement('div');
	col.classList.add('col', 'lg-4');
	row.appendChild(col);

	const formContainer = document.createElement('div');
	formContainer.classList.add('form-container');
	col.appendChild(formContainer);

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

	const labelUser = document.createElement('label');
	labelUser.setAttribute('for', 'user');
	labelUser.textContent = 'Username';
	formGroupUser.appendChild(labelUser);

	const inputGroupUser = document.createElement('div');
	inputGroupUser.classList.add('input-group');
	formGroupUser.appendChild(inputGroupUser);

	const inputGroupTextUser = document.createElement('div');
	inputGroupTextUser.classList.add('input-group-text');
	inputGroupTextUser.innerHTML = '<i class="icon-person"></i>';
	inputGroupUser.appendChild(inputGroupTextUser);

	const inputUser = document.createElement('input');
	inputUser.id = 'user';
	inputGroupUser.appendChild(inputUser);

	const formGroupPass = document.createElement('div');
	formGroupPass.classList.add('form-group');
	form.appendChild(formGroupPass);

	const labelPass = document.createElement('label');
	labelPass.setAttribute('for', 'pass');
	labelPass.textContent = 'Password';
	formGroupPass.appendChild(labelPass);

	const inputGroupPass = document.createElement('div');
	inputGroupPass.classList.add('input-group');
	formGroupPass.appendChild(inputGroupPass);

	const inputGroupTextPass = document.createElement('div');
	inputGroupTextPass.classList.add('input-group-text');
	inputGroupTextPass.innerHTML = '<i class="icon-key"></i>';
	inputGroupPass.appendChild(inputGroupTextPass);

	const inputPass = document.createElement('input');
	inputPass.id = 'pass';
	inputPass.type = 'password';
	inputGroupPass.appendChild(inputPass);

	const formGroupRemember = document.createElement('div');
	formGroupRemember.classList.add('form-group');
	form.appendChild(formGroupRemember);

	const inputRemember = document.createElement('input');
	inputRemember.id = 'remember';
	inputRemember.type = 'checkbox';
	inputRemember.label = 'Remember me';
	formGroupRemember.appendChild(inputRemember);

	const submitButton = document.createElement('button');
	submitButton.classList.add('btn', 'btn-primary');
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
