<script>
	import { getCookie, getValueFromCookie } from '../utils/utils.js';
	import { onMount } from 'svelte';

	let user;

	onMount(() => {
		const userCookie = getCookie('auth');
		user = getValueFromCookie(userCookie);
	});

</script>
<h1>Welcome to web-stubs, {user ? user : 'guest'}!</h1>
