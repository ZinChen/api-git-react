import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import FetchApiServices from './services/fetch-api';
import { FetchServiceProvider } from './components/fetch-service-context';

import store  from './store';

const fetchApiService = new FetchApiServices();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <FetchServiceProvider value={fetchApiService}>
        <Router>
          <App />
        </Router>
      </FetchServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);



// fetchApiService.getAllRepos().then((body) => {
// 	console.log(body);
// });
// fetchApiService.getAllUsers().then((user) => {
// 	user.forEach((p) => {
// 		console.log(p.login);
// 	});
// 	console.log(user);
// });
// fetchApiService.getUser('ar-iv').then((body) => {
// 	console.log(body);
// });
// fetchApiService.getRepo('api_react').then((repo) => {
// 	console.log(repo);
// });