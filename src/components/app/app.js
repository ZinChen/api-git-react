import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './app.css';

import { HomePage, RepoPage } from '../pages';
// import { withFetchService } from '../hoc';

const App = () => {
	// console.log(fetchApiService.getAllRepos());
	// console.log(fetchApiService.getRepo('api_react'));

	// console.log(fetchApiService.getTest());
	// console.log(fetchApiService.getBooks());
	
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


// export default withFetchService()(App);

export default App;