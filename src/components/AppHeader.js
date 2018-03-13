import React from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default () => (
	<div>
		<Menu 
			fixed='top'
			borderless={true}
			inverted={true}
			size='massive'
		>
			<Menu.Item as='a'>ABC</Menu.Item>
			<Menu.Item as={ NavLink } to='/help'>Help</Menu.Item>
			
		</Menu>
	</div>
)