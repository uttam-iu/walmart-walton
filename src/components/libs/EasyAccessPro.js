import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import lapTop from '../../resources/image/laptop-3.png'
import blender from '../../resources/image/blender.png';
import PropTypes from 'prop-types';

const EasyAccessPro = props => {
	const products = props.products;

	const getProducts = () => {
		let proArr = [];
		products.map((pro, i) => {
			const jsx = <Grid key={i} item md={6} sm={12} xs={12}>
				<Box flex={1} height='100%' display='flex' bgcolor='#bbb' style={{ padding: '24px' }}>
					<Box flex={1.2} display='flex' justifyContent='center' flexDirection='column'>
						<Box textAlign='start'>
							<Box fontSize='28px' fontWeight='600'>{pro.title}</Box>
							{pro.isCombo && <Box fontSize='28px' fontWeight='600' style={{ color: 'rgb(250, 212, 3)', lineHeight: '20px' }}>Combo</Box>}
							<Box style={{ fontSize: '12px', color: 'rgba(0,0,0,0.45)', margin: '10px 0px' }}>{pro.subTitle}</Box>
							<Button variant='contained' style={{ background: 'rgb(250, 212, 3)' }}>shop now</Button>
						</Box>
					</Box>
					<Box flex={.8} display='flex' justifyContent='center' flexDirection='column'>
						<img src={i % 2 === 0 ? lapTop : blender} alt='' style={{ height: '100px', maxWidth: '180px' }} />
					</Box>
				</Box>
			</Grid>;
			proArr.push(jsx);
			return null;
		});

		return <Grid container spacing={3}>{proArr}</Grid>;
	};

	return (<Container maxWidth='md' >
		{getProducts()}
	</Container>);
};

EasyAccessPro.propTypes = {
	products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default EasyAccessPro;
