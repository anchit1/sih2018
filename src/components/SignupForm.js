import React from 'react';
import { Segment, Form, Divider, Grid, Header, Button } from 'semantic-ui-react';
import { validate } from 'email-validator';

export default class SignUpForm extends React.Component {
	constructor(props) {
		super(props);
	}

	state = {
		emailError: false,
		passwordMatchError: false,
		passwordBlankError: false,
		firstNameBlankError: false,
		lastNameBlankError: false
	}

	onSubmit = (e) => {
		e.preventDefault();
		
		// form validation
		const email = e.target.email.value;
		if (validate(email) == false) {
			this.setState(() => ({ emailError: true}));
			console.log('invalid email.');
		} else {
			this.setState(() => ({ emailError: false }))
		}
		
		const password = e.target.password.value;
		const password_confirm = e.target.password_confirm.value;

		if (password_confirm != password) {
			this.setState(() => ({ passwordMatchError: true }));
		}

		// check if the password is blank
		this.setState(() => ({
			passwordBlankError: password === '' || password_confirm === ''
		}));

		const first_name = e.target.first_name.value;
		const last_name = e.target.last_name.value;
		this.setState(() => ({ firstNameBlankError: first_name === ''}));
		this.setState(() => ({ lastNameBlankError: last_name === ''}));
		
	}

	render = () => (
		<div className="signup-form">
			<Grid
				verticalAlign="middle"
				centered={true}
			>
				<Grid.Column style={{ maxWidth: 450 }}>

					<Header as='h2' color='teal'>Create a new account</Header>
					
					<Segment padded='very'>
						<Form onSubmit={ this.onSubmit }>

							<Form.Group widths='equal'>
								<Form.Input 
									fluid label='First name' 
									placeholder='First name'
									name='first_name'
									error={ this.state.firstNameBlankError } />
								<Form.Input 
									fluid 
									label='Last name' 
									placeholder='Last name'
									name='last_name'
									error={ this.state.lastNameBlankError } />
							</Form.Group>
							
							<Form.Field>
								<Form.Input
									fluid 
									label='Email' 
									placeholder='email'
									icon='mail'
									iconPosition='left'
									name='email'
									error={ this.state.emailError } />
							</Form.Field>

							<Form.Field>
								<Form.Input
									fluid 
									label='Password' 
									placeholder='Password'
									type='password'
									name='password'
									error={ this.state.passwordMatchError}
									error={ this.state.passwordBlankError} />
							</Form.Field>

							<Form.Field>
								<Form.Input
									fluid 
									label='Confirm password' 
									placeholder='Password'
									type='password'
									name='password_confirm'
									error={ this.state.passwordMatchError}
									error={ this.state.passwordBlankError} />
							</Form.Field>
							
							<Button color='teal' fluid>Signup</Button>
						</Form>
					</Segment>
				</Grid.Column>
			</Grid>
		</div>
	);
}