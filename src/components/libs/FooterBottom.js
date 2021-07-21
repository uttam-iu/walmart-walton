import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import paypal from '../../resources/image/paypal.png';
import americanEx from '../../resources/image/american-ex.png';
import masterCard from '../../resources/image/master-card.png';
import visa from '../../resources/image/visa.png';

const useStyles = makeStyles((theme) => ({
	root: {
		background: '#f2f2f2',
	},
	container: {
		height: 'inherit'
	},
	resp: {
		display: 'flex', justifyContent: 'space-between'
	},
	"@media (max-width: 520px)": {
		resp: {
			flexDirection: 'column'
		}
	},
}));


const FooterBottom = props => {
	const classes = useStyles();

	const getwayIcon = (icon) => {
		return (<Box>
			<img style={{ height: '20px', width: '40px' }} src={icon} alt={'app'} />
		</Box>);
	};

	return (<Box className={classes.root}>
		<Container maxWidth='md' className={classes.container}>
			<Box className={classes.resp} height='inherit'>
				<Box display='flex' justifyContent='center' flexDirection='column' padding='16px 0px'>
					<Box fontSize='12px'>
						@2015-2021 <span style={{ color: 'yellow' }}>Jusaco</span>. All Rights Reserved.
					</Box>
				</Box>

				<Box alignItems='center' display='flex' flexDirection='column' justifyContent='center' padding='16px 0px'>
					<span style={{ fontSize: '12px', display: 'flex' }}>Payment:
						{getwayIcon(masterCard)}
						{getwayIcon(visa)}
						{getwayIcon(americanEx)}
						{getwayIcon(paypal)}
					</span>
				</Box>
			</Box>
		</Container>
	</Box>);
};

export default FooterBottom;
