<script>
	import { Button, Col, Form, FormGroup, Input, InputGroup, InputGroupText, Label, Row } from 'sveltestrap';
	import users from '../data/users.json';
	import { createForm } from 'svelte-forms-lib';
	import { setCookie } from '../utils/utils.js';

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
				location.pathname = '/';
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
	<Col>No account yet? Register one <a href='/signup'>here</a></Col>
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
							<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor'
									 viewBox='0 0 16 16'>
								<path
									d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z' />
							</svg>
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
							<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
								<path
									d='M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z' />
								<path d='M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z' />
							</svg>
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
