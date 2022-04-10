import React from 'react';
// import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalStyle';
import Navbar from './components/Navbar';
import HomePage from './pages';
// import Footer from './components/Footer/Footer';

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Navbar/>
			<Switch>
				<Route path="/" exact component={HomePage} />
			</Switch>
			{/* <Footer /> */}
		</Router>
	);
}

export default App;
