<script>
	import { onMount } from 'svelte';
	import { setCookie } from '../utils/utils.js';

	onMount(() => {
		setCookie('auth', '', -1);
		location.pathname = '/';
	});
</script>
