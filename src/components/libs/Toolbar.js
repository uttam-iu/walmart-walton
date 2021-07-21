import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Badge from '@material-ui/core/Badge';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Slider from '../Slider';
import config from '../../resources/config.json';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CachedIcon from '@material-ui/icons/Cached';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MoreMenu from './MoreMenu';

const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1, display: 'flex',
		'& .MuiAppBar-positionFixed': {
			top: 'unset', margin: 'auto', maxWidth: '960px', right: "unset", left: 'unset'
		}
	},
	container: {
		'& .MuiAppBar-colorPrimary': {
			background: '#051D43'
		},
		'& .clicked': {
			color: 'rgb(250, 212, 3)'
		}
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	hide: {
		display: 'none',
	},
	drawer: {
		width: drawerWidth, flexShrink: 0,
		'& .MuiDrawer-paperAnchorLeft': {
			left: 'unset', top: 'unset'
		},
		'& .MuiListItemIcon-root': {
			minWidth: '40px'
		}
	},
	drawerPaper: {
		width: drawerWidth, height: '463px'
	},
	drawerHeader: {
		display: 'flex', alignItems: 'center', padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'flex-end', background: 'rgb(250, 212, 3)'
	},
	"@media (max-width: 850px)": {
		deskResp: {
			display: 'none'
		},
		mobileResp: {
			display: 'flex'
		},
		root: {
			'& .MuiAppBar-positionFixed': {
				left: 0
			}
		},
		drawer: {
			'& .MuiDrawer-paperAnchorLeft': {
				left: 0
			}
		}
	}
}));

const AppToolbar = props => {
	const classes = useStyles();
	const moreMenuRef = React.useRef();

	const navMenu = config.menu.navMenu;
	const leftMenu = config.menu.topLeft;
	const rightMenu = config.menu.topRight;
	const sliderItem = config.slider;

	const [clicked, setClicked] = React.useState(leftMenu[0]);

	// const [size, setSize] = React.useState([0, 0]);
	// React.useLayoutEffect(() => {
	// 	function updateSize() {
	// 		setSize([window.innerWidth, window.innerHeight]);
	// 	}
	// 	window.addEventListener('resize', updateSize);
	// 	updateSize();
	// 	return () => window.removeEventListener('resize', updateSize);
	// }, []);


	const handleDrawerOpen = () => {
		const nav = document.getElementById('nav-menu-id');
		nav.style.display = 'block';
		const navBtn = document.getElementById('nav-menu-ic');
		navBtn.style.display = 'none';
	};

	const handleDrawerClose = () => {
		const nav = document.getElementById('nav-menu-id');
		nav.style.display = 'none';
		const navBtn = document.getElementById('nav-menu-ic');
		navBtn.style.display = 'block';
	};

	const onMenuClick = (item, isTopLeftMenu = false) => {
		if (isTopLeftMenu) setClicked(item);
		console.log(item);
	};

	const openDrawer = () => {
		return (<Drawer
			className={classes.drawer}
			variant={"persistent"}
			anchor="left"
			open={true}
			classes={{
				paper: classes.drawerPaper,
			}}
		>
			<div className={classes.drawerHeader}>
				<IconButton onClick={handleDrawerClose}>
					<ChevronLeftIcon />
				</IconButton>
			</div>
			<Divider />
			<List>
				{navMenu.map((nav, index) => (
					<ListItem key={nav.name} button style={{ padding: '4px' }} onClick={() => onMenuClick(nav)}>
						<ListItemText style={{ textTransform: 'capitalize' }} primary={nav.name.replace(/_/g, ' ')} />
						{nav.hasChild && <ListItemIcon><ChevronRightIcon /> </ListItemIcon>}
					</ListItem>
				))}
			</List>
		</Drawer >);
	};

	const getToolBarIconBtn = () => {
		let iconArr = [];
		rightMenu.map((menu, i) => {
			const jsx = <IconButton style={{ padding: '8px' }} size='small' key={i} edge="end" className={classes.menuButton} onClick={() => onMenuClick(menu)} color="inherit" aria-label="menu">
				{menu.icon === 'account' && <PermIdentityIcon />}
				{menu.icon === 'notification' &&
					<Box textAlign='end'>
						<Badge badgeContent={5} style={{ color: '#fad403', cursor: 'pointer' }}><FavoriteBorderIcon style={{ color: '#fff' }} /></Badge>
					</Box>}
				{menu.icon === 'refresh' && <CachedIcon />}
				{menu.icon === 'location' && <LocationOnIcon />}
			</IconButton>
			iconArr.push(jsx);
			return null;
		});
		return (<>{iconArr}</>);
	};

	const getTootBarMenu = () => {
		let menuArr = [];
		leftMenu.map((menu, i) => {
			const jsx = <Button className={menu.name === 'pages' || menu.name === 'contact_us' ? `${classes.deskResp} +' top-left-menu'` : 'top-left-menu'} style={{ color: (menu.name === clicked.name ? 'rgb(250, 212, 3)' : '#fff'), fontSize: '10px' }} key={i} onClick={() => onMenuClick(menu, true)} endIcon={menu.hasChild ? < ExpandMoreIcon /> : null}>
				{menu.name.replace(/_/g, ' ')}
			</Button >
			menuArr.push(jsx);
			return null;
		});
		return (<>{menuArr}</>);
	};

	return (<Box display='flex' justifyContent='center'>
		<Box>
			<Box display='flex' flex={1}>
				<Container maxWidth='md' className={classes.container}>
					<Box display='flex'>
						<Box id='nav-menu-id' display='none' width='220px'>{openDrawer()}</Box>
						<Box>

							<AppBar position="static">
								<Toolbar>
									<IconButton edge="start" id='nav-menu-ic' className={classes.menuButton} onClick={handleDrawerOpen} color="inherit" aria-label="menu">
										<MenuIcon />
									</IconButton>
									<Box display='flex' flex={1}>
										<Box flex={2} display='flex' justifyContent='flex-start'>{getTootBarMenu()}</Box>
										<Box className={classes.deskResp} flex={1} display='flex' justifyContent='flex-end'>{getToolBarIconBtn()}</Box>
										<Box className={classes.mobileResp} display='none' justifyContent='flex-end'>
											<IconButton style={{ padding: '8px' }} size='small' edge="end" className={classes.menuButton} onClick={(e) => moreMenuRef.current.setTarget(e.target)} color="inherit" aria-label="menu">
												<MoreVertIcon />
											</IconButton>
										</Box>
									</Box>
								</Toolbar>
							</AppBar>

							<Box flex={1} >
								<Slider sliderItem={sliderItem} />
							</Box>
						</Box>
					</Box>
				</Container>
			</Box>
		</Box>

		<MoreMenu
			ref={moreMenuRef}
			menuItems={rightMenu}
			onLinkClick={onMenuClick}
		/>

	</Box>);
};

export default AppToolbar;
