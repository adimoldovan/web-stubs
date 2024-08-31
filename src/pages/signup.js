import './forms.css';
import users from '../data/users.json';
import { createSession, goHome } from '../utils/utils.js';

export default function signup() {
	const container = document.createElement('div');

	const title = document.createElement('h1');
	title.textContent = 'Sign up';
	container.appendChild(title);

	const loginLink = document.createElement('p');
	loginLink.innerHTML = `<Col>Already have an account? Sign in <a href='?page=login'>here</a></Col>`;
	container.appendChild(loginLink);

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

	const formGroupConfirmPass = document.createElement('div');
	formGroupConfirmPass.classList.add('form-group');
	form.appendChild(formGroupConfirmPass);

	const labelConfirmPass = document.createElement('label');
	labelConfirmPass.setAttribute('for', 'confirm-pass');
	labelConfirmPass.textContent = 'Confirm Password';
	formGroupConfirmPass.appendChild(labelConfirmPass);

	const inputGroupConfirmPass = document.createElement('div');
	inputGroupConfirmPass.classList.add('input-group');
	formGroupConfirmPass.appendChild(inputGroupConfirmPass);

	const inputGroupTextConfirmPass = document.createElement('div');
	inputGroupTextConfirmPass.classList.add('input-group-text');
	inputGroupTextConfirmPass.innerHTML = '<i class="icon-key"></i>';
	inputGroupConfirmPass.appendChild(inputGroupTextConfirmPass);

	const inputConfirmPass = document.createElement('input');
	inputConfirmPass.id = 'confirm-pass';
	inputConfirmPass.type = 'password';
	inputGroupConfirmPass.appendChild(inputConfirmPass);

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
