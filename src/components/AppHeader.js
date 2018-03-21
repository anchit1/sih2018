import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default () => (
	<div>
		<Menu 
			fixed='top'
			borderless={true}
			inverted={true}
			size='large'
		>
			<Container>
				<Menu.Item header as='h2'>
					<Link to='/'>Freelancr</Link>
				</Menu.Item>
				<Menu.Item position='right'>
					<Button>Sign up</Button>
				</Menu.Item>			
				<Menu.Item>
					<Button color='green' size='tiny'>Log in</Button>
				</Menu.Item>
			</Container>
		</Menu>
	</div>
)