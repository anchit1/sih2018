import React from 'react';
import { Segment, Form, Divider, Grid, Header, Button } from 'semantic-ui-react';
import { validate } from 'email-validator';

export default class SignUpForm extends React.Component {
	constructor(props) {
		super(props);
	}

	state = {
		emailError: false
	}

	onSubmit = (e) => {
		e.preventDefault();

		const email = e.target.email.value;
		if (validate(email) == false) {
			this.setState(() => ({ emailError: true}));
			console.log('invalid email.');
		} else {
			this.setState(() => ({ emailError: false }))
		}


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
								<Form.Input fluid label='First name' placeholder='First name' />
								<Form.Input fluid label='Last name' placeholder='Last name' />
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
									type='password' />
							</Form.Field>

							<Form.Field>
								<Form.Input
									fluid 
									label='Confirm password' 
									placeholder='Password'
									type='password' />
							</Form.Field>
							
							<Button color='teal' fluid>Signup</Button>
						</Form>
					</Segment>
				</Grid.Column>
			</Grid>
		</div>
	);
}