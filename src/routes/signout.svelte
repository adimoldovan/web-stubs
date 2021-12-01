<script>
	import { onMount } from 'svelte';
	import { setCookie } from '../utils/utils.js';
	import { base } from '$app/paths';

	onMount(() => {
		setCookie('auth', '', -1);
		location.pathname = `${base}/`;
	});
</script>
