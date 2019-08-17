import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import './app.css';

import { HomePage, RepoPage } from '../pages';
import Nav from '../nav';
import Header from '../header';
import Footer from '../footer';

const App = () => {
	
	return (
		<Fragment>
			<Nav/>
			<Header/>
				<Switch>
					<Route 
						path="/"
						component={HomePage}
						exact />
					<Route 
						path="/repo"
						component={RepoPage} />
				</Switch>
			<Footer/>
		</Fragment>
	);
};

export default App;