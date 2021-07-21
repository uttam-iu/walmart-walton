import React from 'react';
import './App.css';
import Box from '@material-ui/core/Box';
import Header from './components/Header';
import Content from './components/Content';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	topper: {
		top: '130px'
	},
	"@media (max-width: 700px)": {
		topper: {
			top: '186px'
		}
	}
}));

function App() {
	const classes = useStyles();

	return (<Box>
		<Box className="App" display='flex' flexDirection='column'>
			<Header />
			<Box position='absolute' width='100%' className={classes.topper} >
				<Content />
			</Box>
		</Box>
	</Box >);
}

export default App;
