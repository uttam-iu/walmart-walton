import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class MoreMenu extends React.Component {
	state = { anchorEl: null };

	onMenuIndex = (item) => {
		if (this.props.onLinkClick && typeof this.props.onLinkClick === 'function')
			this.props.onLinkClick(item);
		this.setTarget(null);
	};

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
		return <div style={{ background: '#051D43' }}>
			{elemArr}
		</div>
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

export default MoreMenu;
