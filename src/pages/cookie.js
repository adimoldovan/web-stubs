import { getCookie, getDefaultContainer, getValueFromCookie } from '../utils/utils';
import './cookie.css';

const cookieName = 'gibberish';
let cookieValue = getCookieValue();

function randomString() {
	let text = '';
	const possible = 'abcdefghijklmnopqrstuvwxyz 0123456789';

	for (let i = 0; i < 8; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
	return text;
}

function setCookie(value, expirationDays) {
	let d = new Date();
	d.setTime(d.getTime() + expirationDays * 24 * 60 * 60 * 1000);
	let v = `${cookieName}=${value};expires=${d.toUTCString()}`;
	console.log('Setting cookie ' + v);
	document.cookie = v;

	document.getElementById('cookie-value').textContent = getCookieValue();
}

function getCookieValue() {
	const cookieValue = getValueFromCookie(getCookie(cookieName));
	return cookieValue ? cookieValue : '';
}

export default function main() {
	const container = getDefaultContainer('The gibberish talking cookie');

	const setButton = document.createElement('button');
	setButton.classList.add('success');
	setButton.id = 'set-cookie';
	setButton.textContent = 'Set the cookie';
	setButton.addEventListener('click', () => setCookie(randomString(), 1));
	container.appendChild(setButton);

	const deleteButton = document.createElement('button');
	deleteButton.classList.add('danger');
	deleteButton.id = 'delete-cookie';
	deleteButton.textContent = 'Remove the cookie';
	deleteButton.addEventListener('click', () => setCookie('', -1));
	container.appendChild(deleteButton);

	const cookieValueDiv = document.createElement('div');
	container.appendChild(cookieValueDiv);

	const cookieValueSpan = document.createElement('div');
	cookieValueSpan.id = 'cookie-value';
	cookieValueSpan.textContent = cookieValue ? cookieValue : '';
	cookieValueDiv.appendChild(cookieValueSpan);

	return container;
}
