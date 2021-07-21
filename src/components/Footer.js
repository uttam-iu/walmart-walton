import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import TelegramIcon from '@material-ui/icons/Telegram';
import YouTube from '@material-ui/icons/YouTube';
import Instagram from '@material-ui/icons/Instagram';
import Twitter from '@material-ui/icons/Twitter';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Facebook from '@material-ui/icons/Facebook';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import AppleIcon from '../resources/image/app_store.png';
import AndroidIcon from '../resources/image/play-store.jpg';
import FooterBottom from './libs/FooterBottom';

const useStyles = makeStyles((theme) => ({
	container: {
		'& .MuiInputBase-root': {
			'& fieldset': {
				borderColor: 'transparent',
			},
			'&:hover fieldset': {
				borderColor: 'transparent',
			},
			'&.Mui-focused fieldset': {
				borderColor: 'transparent',
			},
			'& .MuiOutlinedInput-input': {
				color: '#000', background: '#fff'
			}
		}
	},
	signUp: {
		display: 'flex', padding: '16px 0px'
	},
	signUp1: {
		display: 'flex', padding: '16px 0px', justifyContent: 'flex-end'
	},
	fResp: {
		textAlign: 'left'
	},
	[theme.breakpoints.down("xs")]: {
		signUp: {
			justifyContent: 'center'
		},
		signUp1: {
			justifyContent: 'center'
		},

	},
	[theme.breakpoints.down("sm")]: {
		fResp: {
			textAlign: 'right'
		},
		flexEnd: {
			justifyContent: 'flex-end'
		}
	}
}));

const Footer = props => {
	const classes = useStyles();

	const onSubmit = () => {
		console.log('onsubmit')
	}

	const onIconClick = (name) => {
		console.log(name)
	}

	const onQuickLink = (name) => {
		console.log(name)
	}

	const footerTop = () => {
		return (<Box pt={4} pb={4} display='flex' justifyContent='center' flexDirection='column'>
			<Container maxWidth='md' className={classes.container}>
				<Box bgcolor='#fad403' padding="32px 16px">
					<Grid container spacing={3}>
						<Grid className={classes.signUp} item md={6} sm={6} xs={12}>
							<Box display='flex' justifyContent='center' flexDirection='column' fontWeight={600} fontSize='20px' style={{ color: '#fff' }}>
								<Box display='flex' ><TelegramIcon style={{ marginRight: '16px', fontSize: '32px' }} />Sign up for Newsletter</Box>
							</Box>
						</Grid>
						<Grid className={classes.signUp1} item md={6} sm={6} xs={12} >
							<Box display='flex'>
								<TextField
									// label="Required"
									defaultValue=""
									size='small'
									placeholder='Enter your gmail address'
									variant="outlined"
								/>
								<Button style={{ background: '#000', color: '#fff', borderRadius: 0, height: '40px' }} onClick={onSubmit} variant="contained">
									Submit
								</Button>
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</Box>);
	}

	const footerBottom = () => {
		return (
			<Container maxWidth='md' className={classes.container}>
				<Grid container spacing={3}>
					<Grid item md={6} sm={12} xs={12}>
						<Box display='flex'>
							<Box flex={1} textAlign='left' padding='8px 16px'>
								<Box fontSize={44} fontWeight={600} textAlign='left'>
									<span>Jusa<span style={{ color: '#fad403' }}>co</span></span>
								</Box>
								<Box fontSize='12px' maxWidth={300} style={{ padding: '8px 0px' }}>Find that perfect color with our color picker and discover beautiful color harmonies and generate HTML.</Box>
								<Box>
									{iconBtn(<YouTube style={{ color: '#fff' }} />, 'youtube')}
									{iconBtn(<Instagram style={{ color: '#fff' }} />, 'instagram')}
									{iconBtn(<Twitter style={{ color: '#fff' }} />, 'twitter')}
									{iconBtn(<Facebook style={{ color: '#fff' }} />, 'facebook')}
									{iconBtn(<LinkedIn style={{ color: '#fff' }} />, 'linkedin')}
								</Box>
							</Box>

							<Box minWidth='160px' maxWidth='180px' padding='16px' className={classes.fResp}>
								<Box fontSize='20px' fontWeight={600}>QUICK LINKS</Box>
								{['about_us', 'contact_us', 'products', 'login', 'signup'].map((itm, i) => (
									<Box key={i} padding='4px 0px'>
										<a href='/#' style={{ textTransform: 'capitalize', fontSize: '12px' }} onClick={() => onQuickLink(itm)}>{itm.replace(/_/g, ' ')}</a>
									</Box>
								))}
							</Box>
						</Box>
					</Grid>
					<Grid item md={6} sm={12} xs={12} >
						<Box display='flex'>
							<Box minWidth='160px' maxWidth='180px' textAlign='left' padding='16px'>
								<Box fontSize='20px' fontWeight={600}>CUSTOM AREA</Box>
								{['my_account', 'orders', 'traking_list', 'tearm', 'privacy_policy', 'my_cart'].map((itm, i) => (
									<Box key={i} padding='4px 0px'>
										<a href='/#' style={{ textTransform: 'capitalize', fontSize: '12px' }} onClick={() => onQuickLink(itm)}>{itm.replace(/_/g, ' ')}</a>
									</Box>
								))}
							</Box>
							<Box flex={1} padding='16px' className={classes.fResp}>
								<Box fontSize={20} fontWeight={600}>
									CONTACT INFO
								</Box>
								<Box display='flex' flex={1} className={classes.flexEnd}>
									<Box flex={1} fontSize='12px' maxWidth={300} style={{ padding: '8px 0px' }}>Find that perfect color with our color picker and discover beautiful color harmonies and generate HTML.</Box>
								</Box>
								<Box display='flex' className={classes.flexEnd}>
									<Box display='flex' justifyContent='center' flexDirection='column' pr={2}><HeadsetMicIcon /></Box>
									<Box>
										<Box fontSize='12px'>Have any Questions?</Box>
										<Box fontSize='12px'>+ 123 456 7890</Box>
									</Box>
								</Box>
								<Box display='flex' flex={1} className={classes.flexEnd}>
									<Box flex={1} maxWidth='120px' width='120px' mt={1} mb={1} fontSize='12px' display='flex' justifyContent='center' flexDirection='column' padding='10px 32px' border='1px solid yellow' borderRadius='24px' fontWeight={600}>
										Live Chat
									</Box>
								</Box>
								<Box display='flex' flex={1} className={classes.flexEnd}>
									<Box flex={1} display='flex' justifyContent='space-between' maxWidth={280} padding="16px 0px">
										<Box ><img style={{ height: '38px', width: '100px', cursor: 'pointer' }} src={AppleIcon} alt={'app'} /></Box>
										<Box ><img style={{ height: '40px', width: '100px', cursor: 'pointer' }} src={AndroidIcon} alt={'app'} /></Box>
									</Box>
								</Box>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Container>
		);
	}

	const iconBtn = (icon, name) => {
		return (<IconButton style={{ padding: '8px', background: '#b2b2b2', margin: '8px' }} size='small' key={name} edge="end" className={classes.menuButton} onClick={() => onIconClick(name)} color="inherit" aria-label="menu">
			{icon}
		</IconButton>);
	}

	return (
		<Box>
			{footerTop()}
			{footerBottom()}
			<FooterBottom />
		</Box>
	);
};

export default Footer;
