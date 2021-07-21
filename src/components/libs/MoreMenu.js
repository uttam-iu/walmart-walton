import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';

class MoreMenu extends React.Component {
	state = { anchorEl: null };

	onMenuIndex = (item) => {
		this.props.onLinkClick(item);
		this.setTarget(null);
	}

	setTarget = (anchorEl = null) => this.setState({ anchorEl });

	generateMenu = () => {
		const { menuItems } = this.props;
		let items = menuItems ? menuItems : [], elemArr = [];
		for (let i = 0; i < items.length; i++) {
			let elem = <MenuItem key={items[i].name} onClick={() => this.onMenuIndex(items[i])} >
				<div style={{ display: "flex", alignItems: "center", textTransform: "capitalize", color: '#fff' }}>
					{items[i].name.replace(/_/g, ' ')}
				</div>
			</MenuItem>;
			elemArr.push(elem);
		}
		return (<div style={{ background: '#051D43' }}>
			{elemArr}
		</div>);
	}

	render() {
		const { anchorEl } = this.state;

		return (<div onBlur={() => this.setTarget(null)}>
			<Menu
				anchorEl={anchorEl}
				// keepMounted
				open={Boolean(anchorEl)}
				onClose={this.setTarget}
			>
				{this.generateMenu()}
			</Menu>
		</div>);
	}
}

MoreMenu.propTypes = {
	onLinkClick: PropTypes.func.isRequired,
	menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MoreMenu;
