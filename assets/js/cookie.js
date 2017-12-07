var cname = "gibberish";

function setCookie(cvalue)
{
	setCookie(cvalue, 5);
}

function setCookie(cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie =  cname + "=" + cvalue + "; " + expires;
}

function getCookieValue() {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}

function deleteCookie()
{
	setCookie("", -1);
}

function goCookieGo(remove)
{
	if(remove)
	{
		deleteCookie();
	}
	else
	{
		setCookie(randomString());
	}

	loadCookieValue();
}

function loadCookieValue()
{
	document.getElementById("cookie-value").innerText = getCookieValue();
}

function randomString()
{
    var text = "ss";
//    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var possible = "abcdefghijklmnopqrstuvwxyz ";

    for( var i=0; i < 8; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}
