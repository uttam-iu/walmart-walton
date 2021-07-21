import React from 'react';
import Box from '@material-ui/core/Box';
import EasyAccessPro from './EasyAccessPro';
import RecentlyViewedProduct from './RecentlyViewedProduct';
import config from '../../resources/config.json';

const Body = props => {
	const easyAccessPro = config.easyAccess;
	const recentlyViewed = config.recentlyViewed;

	return (<Box>
		<EasyAccessPro products={easyAccessPro} />
		<RecentlyViewedProduct products={recentlyViewed} drawerOpen={props.drawerOpen} />
	</Box>);
};

export default Body;
