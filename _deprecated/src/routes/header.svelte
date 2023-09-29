<script>
	import { Col, Icon } from 'sveltestrap';
	import appVersion from '../data/app-version.json';
	import { onMount } from 'svelte';
	import { getCookie } from '../utils/utils.js';
	import { base } from '$app/paths';

	let userCookie;

	onMount(() => {
		userCookie = getCookie('auth');
		if (userCookie) {

		}
	});
</script>

<Col>
	<span class='brand'>web-stubs</span><br />
	<span class='build-version'>built: {appVersion.buildDate}</span>
</Col>
<Col>
	<div class='header-right'>
		<a href={userCookie ? `${base}/signout` : `${base}/signin`}>
			<h2>
				<Icon name={userCookie ? 'box-arrow-right' : 'box-arrow-in-right'} class='text-dark' />
			</h2>
		</a>
	</div>
</Col>
