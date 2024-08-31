export function setCookie(cookieName, cookieValue, lifeInMinutes) {
	const d = new Date();
	d.setTime(d.getTime() + lifeInMinutes * 60 * 1000);
	const expires = 'expires=' + d.toUTCString();
	document.cookie = cookieName + '=' + cookieValue + ';' + expires + ';path=/';
}

export function getCookie(cookieName) {
	const cookies = document.cookie.split(';');
	console.log(cookies);
	return cookies.filter((cookie) => cookie.split('=')[0].trim() === cookieName)[0];
}

export function getValueFromCookie(cookie) {
	return cookie ? cookie.split('=')[1].trim() : undefined;
}

export function getActiveUserSession() {
	const userCookie = getCookie('auth');
	return getValueFromCookie(userCookie);
}

export function goHome() {
	window.location.pathname = '/';
	window.location.search = '';
}

export function createSession(username) {
	setCookie('auth', username, 200);
	goHome();
}

export function logout() {
	setCookie('auth', '', -1);
	goHome();
}

export function getBaseUrl() {
  const url = new URL(window.location.href);
  return `${url.protocol}//${url.host}`;
}

export function getDefaultContainer(heading) {
	const container = document.createElement('div');
	container.classList.add('container');
	const title = document.createElement('h1');
	title.textContent = heading;
	container.appendChild(title);
	return container;
}

export class omCookie {}
