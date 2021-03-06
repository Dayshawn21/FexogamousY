import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './bootstrap.min.css';
import { ApolloProvider } from '@apollo/client';

import Client from './utils/apolloClient';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';

import App from './App';

ReactDOM.render(
	<Router>
		<Provider store={store}>
			<ApolloProvider client={Client}>
				{' '}
				<App />{' '}
			</ApolloProvider>
		</Provider>
	</Router>,
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
