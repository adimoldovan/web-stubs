<script>
	import { Button, Col, Form, FormGroup, Input, InputGroup, InputGroupText, Label, Row, Icon } from 'sveltestrap';
	import users from '../data/users.json';
	import { createForm } from 'svelte-forms-lib';
	import { getCookie, setCookie } from '../utils/utils.js';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';

	onMount(() => {
		const userCookie = getCookie('auth');
		if (userCookie) {
			location.pathname = `${base}/`;
		}
	});

	let errorMessage;

	const { form, errors, state, handleChange, handleSubmit, handleReset } = createForm({
		initialValues: {
			user: '',
			pass: ''
		},
		validate: values => {
			let errs = {};
			errorMessage = '';
			if (values.user === '') {
				errs['user'] = 'Please enter your username';
			}
			if (values.pass === '') {
				errs['pass'] = 'Please enter your password';
			}

			return errs;
		},

		onSubmit: values => {
			if (validCredentials(values)) {
				setCookie('auth', values.user, 2);
				location.pathname = `${base}/`;
			} else {
				handleReset();
				errorMessage = 'Invalid username or password!';
			}
		}
	});

	function validCredentials(values) {
		const user = users.filter(u => u.username === values.user)[0];
		return (user && user.password === values.pass);
	}
</script>

<style>
    .form-container {
        text-align: left;
    }
</style>

<h1>Sign in</h1>
<p class='page-description'>Valid credentials:
	{#each users as user}[{user.username}/{user.password}]{/each}
</p>
<p>
	<Col>No account yet? Register one <a href='{base}/signup'>here</a></Col>
</p>
<Row>
	<Col lg='4'>
		<div class='form-container'>
			<Form on:submit={handleSubmit}>
				{#if errorMessage}
					<small class='form-error'>{errorMessage}</small>
				{/if}
				<FormGroup>
					<Label for='user'>Username</Label>
					<InputGroup>
						<InputGroupText>
							<Icon name='person' />
						</InputGroupText>
						<Input id='user'
									 on:change={handleChange}
									 on:blur={handleChange}
									 bind:value={$form.user} />
					</InputGroup>
					{#if $errors.user}
						<small class='form-error'>{$errors.user}</small>
					{/if}
				</FormGroup>
				<FormGroup>
					<Label for='pass'>Password</Label>
					<InputGroup>
						<InputGroupText>
							<Icon name='key' />
						</InputGroupText>
						<Input id='pass' type='password'
									 on:change={handleChange}
									 on:blur={handleChange}
									 bind:value={$form.pass} />
					</InputGroup>
					{#if $errors.pass}
						<small class='form-error'>{$errors.pass}</small>
					{/if}
				</FormGroup>
				<FormGroup>
					<Input id='remember' type='checkbox' label='Remember me' />
				</FormGroup>
				<Button color='primary'>Sign in</Button>
			</Form>
		</div>
	</Col>
</Row>
