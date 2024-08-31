import { getCookie, getValueFromCookie } from '../utils/utils';
import './cookie.css';

let cookieValue;
const cookieName = 'gibberish';

function randomString() {
	let text = '';
	const possible = 'abcdefghijklmnopqrstuvwxyz 0123456789';

	for (let i = 0; i < 8; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
	return text;
}

function setCookie(value, expirationDays) {
	let d = new Date();
	d.setTime(d.getTime() + expirationDays * 24 * 60 * 60 * 1000);
	let expires = 'expires=' + d.toUTCString();
	let v = cookieName + '=' + value + '; ' + expires;
	console.log('Setting cookie ' + v);
	document.cookie = v;

	cookieValue = getCookieValue();
}

function getCookieValue() {
	const cookieValue = getValueFromCookie(getCookie(cookieName));
	return cookieValue ? cookieValue : '';
}

function update(shouldDelete) {
	if (shouldDelete) {
		setCookie('', -1);
	} else {
		setCookie(randomString(), 5);
	}
}

export default function alerts() {
	const container = document.createElement('div');

	const title = document.createElement('h1');
	title.textContent = 'The gibberish talking cookie';
	container.appendChild(title);

	const row = document.createElement('div');
	row.classList.add('row');
	container.appendChild(row);

	const col = document.createElement('div');
	col.classList.add('col', 'text-center');
	row.appendChild(col);

	const buttonGroupDiv = document.createElement('div');
	col.appendChild(buttonGroupDiv);

	const buttonGroup = document.createElement('div');
	buttonGroup.classList.add('btn-group');
	buttonGroupDiv.appendChild(buttonGroup);

	const setButton = document.createElement('button');
	setButton.classList.add('btn', 'btn-success');
	setButton.id = 'set-cookie';
	setButton.textContent = cookieValue ? 'Update' : 'Set' + ' the cookie';
	setButton.addEventListener('click', () => update(false));
	buttonGroup.appendChild(setButton);

	const deleteButton = document.createElement('button');
	deleteButton.classList.add('btn', 'btn-danger');
	deleteButton.id = 'delete-cookie';
	deleteButton.textContent = 'Remove the cookie';
	deleteButton.addEventListener('click', () => update(true));
	buttonGroup.appendChild(deleteButton);

	const cookieValueDiv = document.createElement('div');
	col.appendChild(cookieValueDiv);

	const cookieValueSpan = document.createElement('span');
	cookieValueSpan.id = 'cookie-value';
	cookieValueSpan.textContent = cookieValue ? cookieValue : '';
	cookieValueDiv.appendChild(cookieValueSpan);

	return container;
}
