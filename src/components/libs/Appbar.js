import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import ShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Dropdown from './Dropdown';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
	container: {
		height: 'inherit',
		'& .MuiInputBase-root': {
			'& fieldset': {
				borderColor: '#f4f4f4',
			},
			'&:hover fieldset': {
				borderColor: '#f4f4f4',
			},
			'&.Mui-focused fieldset': {
				borderColor: '#f4f4f4',
			},
		},
		'& .MuiBadge-anchorOriginTopRightRectangle': {
			color: '#fff', background: '#fad403'
		}
	},
	bodyCont: {
		flex: 2.4, background: '#f4f4f4'
	},
	bodyCont1: {
		background: '#f4f4f4', display: 'none'
	},
	appResp: {
		flexDirection: 'row'
	},
	"@media (max-width: 700px)": {
		bodyCont: {
			display: 'none'
		},
		bodyCont1: {
			display: 'flex', justifyContent: 'center'
		}
	}
}));

const items = [
	{
		title: 'all_category'
	},
	{
		title: 'electronics'
	},
	{
		title: 'freeze'
	},
	{
		title: 'gadges'
	},
];

const Appbar = props => {
	const classes = useStyles();

	const onSelectChange = (key, item) => {
		console.log(key, item);
	};

	const onSearch = () => {
		console.log('on Search');
	};

	const getAppBdy = () => {
		return (<Box>
			<Box height='100%' display='flex'>
				<Dropdown items={items} name='category' onSelectChange={onSelectChange} />
				<hr style={{ height: '32px', width: '1px', marginTop: '14px' }} />
				<TextField
					// label="Required"
					defaultValue=""
					placeholder='Search products...'
					variant="outlined"
				/>
				<Box height='initial' width='64px' bgcolor='#fad403' display='flex' justifyContent='center' flexDirection='column' alignItems='center'
					style={{ cursor: 'pointer' }}
					onClick={onSearch}
				>
					<SearchIcon style={{ color: '#fff' }} />
				</Box>
			</Box>
		</Box >);
	};

	return (<Box padding='16px 0px' >
		<Container maxWidth='md' className={classes.container}>
			<Box className={classes.appResp}>
				<Box display='flex'>
					<Box flex={.8} fontSize={44} fontWeight={600} textAlign='left'>
						<span>Jusa<span style={{ color: '#fad403' }}>co</span></span>
					</Box>
					<Box className={classes.bodyCont}>{getAppBdy()}</Box>
					<Box flex={.8} display='flex' justifyContent='center' flexDirection='column'>
						<Box textAlign='end'>
							<Badge badgeContent={5} style={{ color: '#fad403', cursor: 'pointer' }}><ShoppingCartIcon style={{ color: 'black' }} /></Badge>
							<span style={{ paddingLeft: '16px', fontWeight: '500' }}>$990.00</span>
						</Box>
					</Box>
				</Box>
				<Box className={classes.bodyCont1}>{getAppBdy()}</Box>
			</Box>
		</Container>
	</Box>);
};

export default Appbar;
