import React from 'react';
import './App.css';
import Box from '@material-ui/core/Box';
import Header from './components/Header';
import ToolBar from './components/libs/Toolbar';
import Footer from './components/Footer';
import Body from './components/Body';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	topper: {
		top: '130px'
	},
	"@media (max-width: 700px)": {
		topper: {
			top: '200px'
		}
	}

}));

function App() {
	const classes = useStyles();

	return (<Box>
		<Box className="App" display='flex' flexDirection='column'>
			<Header />
			<Box position='absolute' width='100%' className={classes.topper} >
				<ToolBar />
				<Body />
				<Footer />
			</Box>
		</Box>
	</Box >);
}

export default App;
