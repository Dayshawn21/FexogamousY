import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './comp/Header';
import HomeScreen2 from './screens/HomeScreen2';
import Footer from './comp/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreenTwo from './screens/ProductScreenTwo';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

const App = () => {
	return (
		<div>
			<Header />

			<main className='py-3'>
				<Container>
					<Route path='/' component={HomeScreen} exact />
					<Route path='/products/:id' component={ProductScreen} />
					<Route path='/cart/:id?' component={CartScreen} />
				</Container>
			</main>
			<Footer />
		</div>
	);
};

export default App;
