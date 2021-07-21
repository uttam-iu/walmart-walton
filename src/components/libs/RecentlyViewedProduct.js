import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import lapTop from '../../resources/image/laptop-3.png'
import blender from '../../resources/image/blender.png';
import Grid from '@material-ui/core/Grid';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles((theme) => ({
	container:{
		paddingTop: '40px', paddingBottom: '24px'
	}
}));

const RecentlyViewedProduct = props => {
	const classes = useStyles();
	const products = props.products;

	const getProducts = () => {
		let proArr = [];
		products.map((pro, i) => {
			const jsx = <Grid key={i} item md={4} sm={6} xs={12}>
				<Box border='2px solid #f4f4f4' >
					<Box display='flex' padding='16px'>
						<Box flex={1} padding={{ sm: '16px', xs: '32px' }} display='flex' justifyContent='center' flexDirection='column'>
							<img src={i % 2 === 0 ? lapTop : blender} alt='' style={{ height: '80px', maxWidth: '150px' }} />
						</Box>
						<Box flex={1} pl={2}>
							<Box textAlign='left' style={{ color: '#000' }}>{pro.category}</Box>
							{pro.subCategory.map((cat, j) => (
								<Box key={j} textAlign='left' style={{ color: 'rgba(0,0,0,0.45)', fontSize: '12px' }}>{cat}</Box>
							))}
						</Box>
					</Box>
				</Box>
			</Grid>
			proArr.push(jsx);
			return null;
		});

		return <Grid container spacing={3}>{proArr}</Grid>;
	}

	return (
		<Container maxWidth='md' className={classes.container}>
			<Box display='flex' justifyContent='space-between'>
				<Box bgcolor='rgb(250, 212, 3)' padding={1} fontWeight={600}>RECENTLY VIEWED PRODUCTS</Box>
				<Box><ChevronLeftIcon /><ChevronRightIcon /></Box>
			</Box>
			<Box display='flex'>
				{getProducts()}
			</Box>
		</Container>
	);
};

export default RecentlyViewedProduct;
