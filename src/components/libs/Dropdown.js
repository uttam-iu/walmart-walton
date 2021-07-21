import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import bdFlag from '../../resources/image/bd-flag.png';
import usFlag from '../../resources/image/us-flag.jpg';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
	drBtnImg: {
		width: "18px", height: "12px", objectFit: "cover"
	},
	drBtnTxt: {
		textTransform: "capitalize", padding: "0px 16px", fontSize: "14px", lineHeight: "16px", color: "rgba(0,0,0,0.57)"
	},
	drBtnIcon: {
		color: "rgba(0,0,0,0.57)"
	},
	menuImg: {
		width: "18px", height: "12px", objectFit: "cover"
	},
	menuTxt: {
		textTransform: 'capitalize', fontSize: "12px", lineHeight: "14px", color: "#000000", paddingLeft: "12px"
	},
}));

const Dropdown = props => {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [val, setVal] = React.useState(props.items[0]);

	const onMenuSelect = (key, select) => {
		setVal(select);
		setAnchorEl(null)
		props.onSelectChange(key, select);
	};

	const generateMenu = () => {
		const { items, name } = props;
		let elemArr = [];
		for (let i = 0; i < items.length; i++) {
			let elem = <MenuItem key={i} onClick={() => onMenuSelect(name, items[i])}>
				<Box display="flex" alignItems="center">
					<Box display="flex" >
						{items[i].icon && <img className={classes.menuImg} alt='' src={items[i].icon === 'bd-flag' ? bdFlag : usFlag} />}
						<Box display="flex" alignItems="center" className={classes.menuTxt}>
							{items[i].title.replace(/_/g, ' ') + (items[i].subTitle ? ': ' + items[i].subTitle : '')}
						</Box>
					</Box>
				</Box>
			</MenuItem>;
			elemArr.push(elem);
		}
		return elemArr;
	};

	const getDropJsx = () => {
		return (<Box bgcolor='transparent' height='100%' display='flex' ml={1} mr={1} mt={0} mb={0} flex={1}>
			<Box display="flex" style={{ cursor: "pointer" }} onClick={(e) => setAnchorEl(e.currentTarget)}>
				{val.icon &&
					<Box display="flex" justifyContent='center' flexDirection='column'>
						<img className={classes.drBtnImg} alt='' src={val.icon === 'bd-flag' ? bdFlag : usFlag} />
					</Box>
				}
				<Box display="flex" alignItems="center" className={classes.drBtnTxt}>
					{val.title.replace(/_/g, ' ') + (val.subTitle ? ': ' + val.subTitle : '')}
				</Box>
				<Box display="flex" alignItems="center" className={classes.drBtnIcon}>
					<ArrowDropDownIcon />
				</Box>
			</Box>
			<Menu
				id="long-menu"
				keepMounted
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={() => setAnchorEl(null)}
				PaperProps={{ style: { maxHeight: 400, width: 200 } }}
			>
				{generateMenu()}
			</Menu>
		</Box>);
	};

	return (<Box> {getDropJsx()} </Box>);
};

Dropdown.propTypes = {
	name: PropTypes.string.isRequired,
	items: PropTypes.arrayOf(PropTypes.object).isRequired,
	onSelectChange: PropTypes.func.isRequired
};

export default Dropdown;
