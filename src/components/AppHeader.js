import React from 'react';
import { Menu } from 'semantic-ui-react';

export default () => (
	<div>
		<Menu 
			fixed='top'
			borderless={true}
			inverted={true}
			size='large'
			stackable='true'
		>
			<Menu.Item as='a'>ABC</Menu.Item>
		</Menu>
	</div>
)