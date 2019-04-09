var auth_cookie_name = "auth";

(function () {
    'use strict';
    window.addEventListener('load', function () {
        var auth_cookie = getCookieValue(auth_cookie_name);
        if (auth_cookie != "") {
            document.getElementById("user").innerText = auth_cookie;
            document.getElementById("content").innerHTML = "<button type=\"button\" class=\"btn btn-primary\" id=\"logout-submit\" onclick=\"logout()\"><i class=\"fa fa-sign-out\"></i>Logout</button>";
        }
        else {
            document.getElementById("user").innerText = "guest";
            document.getElementById("content").innerHTML = "<p>Please log in or register an account <a href=auth.html>here</a></p>";
        }
    }, false);
})();

function getCookieValue(cname) {
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

function logout()
{
    deleteCookie(auth_cookie_name);
    window.location.href = 'auth.html';
}