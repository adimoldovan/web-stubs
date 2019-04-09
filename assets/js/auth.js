var users = ["dinosaur", "dingo", "camel", "zebra"];
var auth_cookie_name = "auth";
var local_storage_credentials_name = "credentials";

(function () {
	'use strict';
	window.addEventListener('load', function () {
		document.getElementById("login-panel-header").innerText = "Valid usernames: " + users + ". The password is the username + password word. E.g. '" + users[0] + "password'";
		document.getElementById("login_form").addEventListener("submit", function () {
			return isLoginValid();
		}, false);

		var rPassElement = document.getElementById('inputPassword');
		var rConfPassElement = document.getElementById('inputPassword2');

		document.getElementById("registration_form").addEventListener("submit", function () {
			rConfPassElement.setCustomValidity(rPassElement.value != rConfPassElement.value ? "Passwords do not match." : "");
			return register();
		}, false);
	}, false);
})();

function validCredentials(username) {
	return userExists(username) &&
		document.getElementById("input-login-password").value == username + "password";
}

function isLoginValid() {
	var form = document.getElementById('login_form');
	var username = document.getElementById("input-login-username").value;
	if (form.checkValidity() === true) {
		if (!validCredentials(username)) {
			event.preventDefault();
			event.stopPropagation();
			form.classList.add('was-validated');
			document.getElementById('login-error').innerText = 'Invalid username or password!';
			return false; 
		}
		form.classList.add('was-validated');
		setCookie(auth_cookie_name, username, 2);
		return true;
	}
	else {
		event.preventDefault();
		event.stopPropagation();
		form.classList.add('was-validated');
		return false;
	}
}

function userExists(user) {
	return users.indexOf(user) != -1;
}

function register() {
	var form = document.getElementById('registration_form');

	var username = document.getElementById("inputUsername").value;
	if (form.checkValidity() === true) {
		if (userExists(username)) {
			event.preventDefault();
			event.stopPropagation();
			form.classList.add('was-validated');
			document.getElementById("registration-error").innerText = "Username already exists!";
			return false;
		}
		form.classList.add('was-validated');
		setCookie(auth_cookie_name, username, 2);
		return true;
	}
	else {
		event.preventDefault();
		event.stopPropagation();
		form.classList.add('was-validated');
		return false;
	}
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

function setCookie(cname, cvalue, exminutes) {
	var d = new Date();
	d.setTime(d.getTime() + (exminutes * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}