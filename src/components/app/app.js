import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './app.css';

import { HomePage, RepoPage } from '../pages';

const App = () => {
	
	return (
		<div className="row">
			<div className="container">
				<div className="col-12">
					<Switch>
						<Route 
							path="/"
							component={HomePage}
							exact />
						<Route 
							path="/repo"
							component={RepoPage} />
					</Switch>
				</div>
			</div>
		</div>
	);
};

export default App;