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

	const countries = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'The Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo, Republic of the', 'Congo, Democratic Republic of the', 'Costa Rica', 'Cote d\'Ivoire', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor (Timor-Leste)', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'The Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea, North', 'Korea, South', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia, Federated States of', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar (Burma)', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States of America', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City (Holy See)', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'];
</script>

<style>
    .form-container {
        text-align: left;
    }
</style>

<h1>Sign up</h1>
<p class='page-description'>Create a new temporary account. A default session will be created with the successfully created account. The new account will not be saved, so when the session expires (in 2 minutes), the account will no longer exist.</p>
<Row>
	<Col lg='4'>
		<div class='form-container'>
			<Form>
				<p>Your login information</p>
				<FormGroup>
					<Label for='input-username'>Username</Label>
					<InputGroup>
						<InputGroupText>$</InputGroupText>
						<Input id='input-username' name='username' value='dino' />
					</InputGroup>
					<FormText className='text-left' muted>
						4 to 35 letters, numbers or underscore.
					</FormText>
				</FormGroup>
				<FormGroup>
					<Label for='input-password'>Password</Label>
					<InputGroup>
						<InputGroupText>$</InputGroupText>
						<Input id='input-password' name='password' type='password' value='dinoxxxx' />
					</InputGroup>
					<FormText className='text-left' muted>
						Minimum of 8 characters.
					</FormText>
				</FormGroup>
				<FormGroup>
					<Label for='input-password-confirm'>Confirm password</Label>
					<InputGroup>
						<InputGroupText>$</InputGroupText>
						<Input id='input-password-confirm' name='confirmPassword' type='password' value='dinoxxxx' />
					</InputGroup>
					<FormText className='text-left' muted>
						Must match the password.
					</FormText>
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
						<Input id='input-first-name' name='firstName' />
					</InputGroup>
					<FormText className='text-left' muted>
						2 to 35 letters and '-' only.
					</FormText>
				</FormGroup>
				<FormGroup>
					<Label for='input-last-name'>Last name</Label>
					<InputGroup>
						<InputGroupText>$</InputGroupText>
						<Input id='input-last-name' name='lastName' />
					</InputGroup>
					<FormText className='text-left' muted>
						2 to 35 letters and '-' only.
					</FormText>
				</FormGroup>
				<FormGroup>
					<Label for='input-email'>Email</Label>
					<InputGroup>
						<InputGroupText>$</InputGroupText>
						<Input id='input-email' name='email' />
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
								 label='I accept the terms and conditions'
					/>
				</FormGroup>
				<FormGroup>
					<Button color='primary'>Submit your registration</Button>
				</FormGroup>
			</Form>
		</div>
	</Col>
</Row>
