import users from '../data/users.json';
import { createSession, getDefaultContainer, goHome } from '../utils/utils.js';

export default function signup() {
	const container = getDefaultContainer('Sign up');

	const loginLink = document.createElement('p');
	loginLink.innerHTML = `<Col>Already have an account? Sign in <a href='?page=login'>here</a></Col>`;
	container.appendChild(loginLink);

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

	const formGroupConfirmPass = document.createElement('div');
	formGroupConfirmPass.classList.add('form-group');
	form.appendChild(formGroupConfirmPass);

	const inputConfirmPass = document.createElement('input');
	inputConfirmPass.id = 'confirm-pass';
	inputConfirmPass.type = 'password';
	inputConfirmPass.placeholder = 'Confirm your password';
	formGroupConfirmPass.appendChild(inputConfirmPass);

	const submitButton = document.createElement('button');
	submitButton.classList.add('btn', 'btn-primary');
	submitButton.textContent = 'Sign up';
	form.appendChild(submitButton);

	function handleSubmit(event) {
		event.preventDefault();
		const values = {
			user: inputUser.value,
			pass: inputPass.value,
			confirmPass: inputConfirmPass.value
		};

		if (!values.user || !values.pass || !values.confirmPass) {
			errorMessage = 'Please fill in all fields!';
			errorElement.textContent = errorMessage;
			errorElement.style.display = 'block';
			return;
		}

		if (values.pass !== values.confirmPass) {
			errorMessage = 'Passwords do not match!';
			errorElement.textContent = errorMessage;
			errorElement.style.display = 'block';
			return;
		}
		if (users.some((u) => u.username === values.user)) {
			errorMessage = 'Username already exists!';
			errorElement.textContent = errorMessage;
			errorElement.style.display = 'block';
			return;
		}
		users.push({ username: values.user, password: values.pass });
		createSession(values.user);
		goHome();
	}

	return container;
}
