<script>
	import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'sveltestrap';

	let open = false;
	const toggle = () => (open = !open);
</script>

<h1>Modal</h1>
<div>
	<Button on:click={toggle}>Open Modal</Button>
	<Modal isOpen={open} {toggle}>
		<ModalHeader {toggle}>Click interceptor</ModalHeader>
		<ModalBody>I'm stealing the click action for any element that's under me</ModalBody>
		<ModalFooter>
			<Button color='secondary' on:click={toggle}>Cancel</Button>
		</ModalFooter>
	</Modal>
</div>
