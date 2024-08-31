<script>
	import { Button, ButtonToolbar} from 'sveltestrap';

	const buttons = [{
		id: 'alert-trigger',
		onclick: showAlert,
		text: 'Open alert'
	},
		{
			id: 'confirm-trigger',
			onclick: showConfirm,
			text: 'Open confirmation dialog'
		},
		{
			id: 'prompt-trigger',
			onclick: showPrompt,
			text: 'Open prompt dialog'
		}];

	function showAlert() {
		window.alert('Hello! I am an Javascript alert!\nYou cannot interact with the page unless you dismiss me');
	}

	function showConfirm() {
		window.confirm('Hello! I am an Javascript confirmation dialog!\nYou cannot interact with the page unless you dismiss me');
	}

	function showPrompt() {
		window.prompt('Hello! I am an Javascript prompt dialog!\nYou cannot interact with the page unless you dismiss me');
	}
</script>
<h1>Alerts</h1>
<ButtonToolbar>
	{#each buttons as button}
			<Button id={button.id} on:click={button.onclick}>{button.text}</Button>
	{/each}
</ButtonToolbar>
