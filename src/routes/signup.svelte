<script>
	import {
		Button,
		Col,
		Form,
		FormGroup,
		FormText,
		Input,
		InputGroup,
		InputGroupText,
		Label,
		Row
	} from 'sveltestrap';
	import { createForm } from 'svelte-forms-lib';
	import users from '../data/users.json';
	import { setCookie } from '../utils/utils.js';

	const countries = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'The Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo, Republic of the', 'Congo, Democratic Republic of the', 'Costa Rica', 'Cote d\'Ivoire', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor (Timor-Leste)', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'The Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea, North', 'Korea, South', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia, Federated States of', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar (Burma)', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States of America', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City (Holy See)', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'];

	let errorMessage;

	const { form, errors, state, handleChange, handleSubmit, handleReset } = createForm({
		initialValues: {
			username: 'dino',
			password: 'dinopassword',
			password2: 'dinopassword',
			firstName: '',
			lastName: '',
			tc: false
		},
		validate: values => {
			let errs = {};
			errorMessage = '';
			if (values.username === '') {
				errs['username'] = 'Please choose a username';
			}
			if (values.username && values.username.length < 4) {
				errs['username'] = 'Please choose a longer username';
			}
			if (values.username && values.username.length > 35) {
				errs['username'] = 'Please choose a shorter username';
			}
			if (values.password === '') {
				errs['password'] = 'Please choose a password';
			}
			if (values.password && values.password.length < 8) {
				errs['password'] = 'Please choose a longer password';
			}
			if (values.password2 !== values.password) {
				errs['password2'] = 'Passwords do not match';
			}
			if (values.firstName && values.firstName.length < 2) {
				errs['firstName'] = 'Please choose a longer first name';
			}
			if (values.lastName && values.lastName.length < 2) {
				errs['lastName'] = 'Please choose a longer last name';
			}

			if(!values.tc) {
				errs['tc'] = 'You need to accept the terms and conditions';
			}

			return errs;
		},

		onSubmit: values => {
			if (!userExists(values)) {
				setCookie('auth', values.username, 2);
				location.pathname = '/';
			} else {
				errorMessage = 'Username already exists!';
			}
		}
	});

	function userExists(values) {
		const user = users.filter(u => u.username === values.username);
		return (user.length > 0);
	}
</script>

<style>
    .form-container {
        text-align: left;
    }
</style>

<h1>Sign up</h1>
<p class='page-description'>Create a new temporary account. A default session will be created with the successfully
	created account. The new account will not be saved, so when the session expires (in 2 minutes), the account will no
	longer exist.</p>
<Row>
	<Col lg='4'>
		<div class='form-container'>
			<Form on:submit={handleSubmit}>
				{#if errorMessage}
					<small class='form-error'>{errorMessage}</small>
				{/if}
				<p>Your login information</p>
				<FormGroup>
					<Label for='username'>Username*</Label>
					<InputGroup>
						<InputGroupText>$</InputGroupText>
						<Input id='username'
									 on:change={handleChange}
									 on:blur={handleChange}
									 bind:value={$form.username} />
					</InputGroup>
					<FormText className='text-left' muted>
						4 to 35 letters, numbers or underscore.<br />
					</FormText>
					{#if $errors.username}
						<small class='form-error'>{$errors.username}</small>
					{/if}
				</FormGroup>
				<FormGroup>
					<Label for='password'>Password*</Label>
					<InputGroup>
						<InputGroupText>$</InputGroupText>
						<Input id='password' name='password' type='password'
									 on:change={handleChange}
									 on:blur={handleChange}
									 bind:value={$form.password} />
					</InputGroup>
					<FormText className='text-left' muted>
						Minimum of 8 characters.<br />
					</FormText>
					{#if $errors.password}
						<small class='form-error'>{$errors.password}</small>
					{/if}
				</FormGroup>
				<FormGroup>
					<Label for='password2'>Confirm password*</Label>
					<InputGroup>
						<InputGroupText>$</InputGroupText>
						<Input id='password2' name='password2' type='password'
									 on:change={handleChange}
									 on:blur={handleChange}
									 bind:value={$form.password2} />
					</InputGroup>
					<FormText className='text-left' muted>
						Must match the password.<br />
					</FormText>
					{#if $errors.password2}
						<small class='form-error'>{$errors.password2}</small>
					{/if}
				</FormGroup>
				<FormGroup>
					<p>Some details to get to know you better</p>
				</FormGroup>
				<FormGroup>
					<Label for='input-first-name'>Title</Label>
					<Input type='radio' inline name='title' label='Mr' />
					<Input type='radio' inline name='title' label='Ms' />
				</FormGroup>
				<FormGroup>
					<Label for='input-first-name'>First name</Label>
					<InputGroup>
						<InputGroupText>$</InputGroupText>
						<Input id='input-first-name' name='firstName'
									 on:change={handleChange}
									 on:blur={handleChange}
									 bind:value={$form.firstName} />
					</InputGroup>
					<FormText className='text-left' muted>
						2 to 35 letters and '-' only.<br/>
					</FormText>
					{#if $errors.firstName}
						<small class='form-error'>{$errors.firstName}</small>
					{/if}
				</FormGroup>
				<FormGroup>
					<Label for='input-last-name'>Last name</Label>
					<InputGroup>
						<InputGroupText>$</InputGroupText>
						<Input id='input-last-name' name='lastName'
									 on:change={handleChange}
									 on:blur={handleChange}
									 bind:value={$form.lastName} />
					</InputGroup>
					<FormText className='text-left' muted>
						2 to 35 letters and '-' only.<br/>
					</FormText>
					{#if $errors.lastName}
						<small class='form-error'>{$errors.lastName}</small>
					{/if}
				</FormGroup>
				<FormGroup>
					<Label for='input-email'>Email</Label>
					<InputGroup>
						<InputGroupText>$</InputGroupText>
						<Input id='input-email' name='email' type='email' />
					</InputGroup>
					<FormText className='text-left' muted>
						We promise we won't spam you.
					</FormText>
				</FormGroup>
				<FormGroup>
					<Label for='input-dob'>Date of birth</Label>
					<InputGroup>
						<InputGroupText>$</InputGroupText>
						<Input
							type='date'
							name='dob'
							id='input-dob' />
					</InputGroup>
				</FormGroup>
				<FormGroup>
					<Label for='input-nationality'>Nationality</Label>
					<InputGroup>
						<InputGroupText>$</InputGroupText>
						<Input id='input-nationality' type='select'>
							<option value=''></option>
							{#each countries as country}
								<option value='{country}'>{country}</option>
							{/each}
						</Input>
					</InputGroup>
				</FormGroup>
				<FormGroup>
					<Input type='checkbox' id='terms' name='terms'
								 label='I accept the terms and conditions*'
								 on:change={handleChange}
								 on:blur={handleChange}
								 bind:checked={$form.tc}
					/>
					{#if $errors.tc}
						<small class='form-error'>{$errors.tc}</small>
					{/if}
				</FormGroup>
				<FormGroup>
					<Button color='primary'>Submit your registration</Button>
				</FormGroup>
			</Form>
		</div>
	</Col>
</Row>
