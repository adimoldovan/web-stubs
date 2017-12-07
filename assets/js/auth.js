var users = ["dinosaur", "dingo", "camel", "zebra"];
var auth_cookie_name = "auth";
var local_storage_credentials_name = "credentials";

function loginWith(username) {
	if (userExists(username) && document.getElementById("input-login-password").value == username + "password") {
		setCookie(auth_cookie_name, username, 2);
		redirectToWelcomePage();
	} else {
		document.getElementById("login-error").innerHTML = "Incorrect username or password";
	}
}

function login() {
	$('#login_form').validator().on('submit', function (e) {
		if (!e.isDefaultPrevented()) {
			e.preventDefault();
			loginWith(document.getElementById("input-login-username").value);
		}
	})
}

function userExists(user) {
	return users.indexOf(user) != -1;
}

function logout() {
	deleteCookie(auth_cookie_name);
	window.location.href = "auth.html";
}

function redirectToWelcomePage() {
	window.location.href = "welcome.html";
}

function register() {
	$('#registration_form').validator().on('submit', function (e) {
		if (!e.isDefaultPrevented()) {
			e.preventDefault();
			var username = document.getElementById("inputUsername").value;
			if (userExists(username)) {
				document.getElementById("registration-error").innerText = "Username already exists";
			}
			else {
				setCookie(auth_cookie_name, username, 2);
				redirectToWelcomePage();
			}
		}
	})
}

function addCredentialsToLocalStorage(uname, pass) {
	var credentials = [];
	var credentials = JSON.parse(localStorage.getItem(local_storage_credentials_name));

	if (credentials == null) {
		var credentials = '{"Credentials":[]}';
		credentials = JSON.parse(credentials);
	}

	credentials['Credentials'].push('{u:"' + uname + '", "p:"' + pass + '"}');
	localStorage.setItem(local_storage_credentials_name, JSON.stringify(credentials));
}

function authOnLoad() {
	document.getElementById("login-panel-header").innerText = "Valid usernames: " + users + ". The password is the username + password word. E.g. '" + users[0] + "password'";
}

function welcomeOnLoad() {
	var auth_cookie = getCookie(auth_cookie_name);
	if (auth_cookie != "") {
		document.getElementById("user").innerText = auth_cookie;
		document.getElementById("content").innerHTML = "<button type=\"button\" class=\"btn btn-primary\" id=\"logout-submit\" onclick=\"logout()\"><i class=\"fa fa-sign-out\"></i>Logout</button>";
	}
	else {
		document.getElementById("user").innerText = "guest";
		document.getElementById("content").innerHTML = "<p>Please log in or register an account <a href=auth.html>here</a></p>";
	}
}

function setCookie(cname, cvalue, exminutes) {
	var d = new Date();
	d.setTime(d.getTime() + (exminutes * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function deleteCookie(cname) {
	document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}