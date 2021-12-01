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
