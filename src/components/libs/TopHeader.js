import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import config from '../../resources/config.json';
import Dropdown from './Dropdown';

const useStyles = makeStyles((theme) => ({
	root: {
		background: '#f2f2f2',
	},
	container: {
		height: 'inherit'
	}
}));


const TopHeader = props => {
	const classes = useStyles();
	const onSelectChange = (key, item) => {
		console.log(key, item);
	}

	return (
		<Box height='40px' className={classes.root}>
			<Container maxWidth='md' className={classes.container}>
				<Box display='flex' justifyContent='space-between' height='inherit'>
					<Box display='flex'>
						<Dropdown items={config.languages} name='language' onSelectChange={onSelectChange} />
						<hr style={{ height: '20px', width: '1px', marginTop: '10px' }} />
						<Dropdown items={config.currencies} name='currency' onSelectChange={onSelectChange} />
					</Box>
					<Box display='flex' flexDirection='column' justifyContent='center'>
						<span style={{ fontSize: '12px' }}>Cell: <span style={{ fontWeight: '500' }}>+1888 234 5678</span></span>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default TopHeader;
