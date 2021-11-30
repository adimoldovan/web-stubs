<script>
	import { Button, ButtonGroup, Col, Row } from 'sveltestrap';

	let cookieValue;
	const cookieName = 'gibberish';

	function randomString() {
		let text = '';
		const possible = 'abcdefghijklmnopqrstuvwxyz 0123456789';

		for (let i = 0; i < 8; i++)
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		return text;
	}

	function setCookie(value, expirationDays) {
		let d = new Date();
		d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
		let expires = 'expires=' + d.toUTCString();
		let v = cookieName + '=' + value + '; ' + expires;
		console.log('Setting cookie ' + v);
		document.cookie = v;

		cookieValue = getCookieValue();
	}

	function getCookieValue() {
		let name = cookieName + '=';
		let ca = document.cookie.split(';');
		for (let i = 0; i < ca.length; i++) {
			let c = ca[i];
			while (c.charAt(0) === ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) === 0) {
				return c.substring(name.length, c.length);
			}
		}
		return '';
	}

	function update(shouldDelete) {
		if (shouldDelete) {
			setCookie('', -1);
		} else {
			setCookie(randomString(), 5);
		}
	}
</script>
<style>
	#cookie-value {
			font-size: 2rem;
	}
</style>

<h1>The gibberish talking cookie</h1>
<Row>
	<Col className='text-center'>
		<div>
			<ButtonGroup>
				<Button class='btn-success' id='set-cookie'
								on:click={()=>update(false)}>{cookieValue ? 'Update' : 'Set'} the cookie
				</Button>
				<Button class='btn-danger' id='delete-cookie'
								on:click={() => update(true)}>Remove the cookie
				</Button>
			</ButtonGroup>
		</div>
		<div>
			<span id='cookie-value'>{cookieValue ? cookieValue : ''}</span>
		</div>
	</Col>
</Row>
