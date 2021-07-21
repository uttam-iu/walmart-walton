import React from 'react';
import TopHeader from './libs/TopHeader';
import Appbar from './libs/Appbar';
import Box from '@material-ui/core/Box';

const Header = props => {
	return (
		<Box >
			<Box position='fixed' width='100%' bgcolor='#fff' zIndex='1100'>
				<TopHeader />
			</Box>
			<Box position='fixed' width='100%' top='40px' bgcolor='#fff' zIndex='1100'>
				<Appbar />
			</Box>
		</Box>
	);
};

export default Header;
