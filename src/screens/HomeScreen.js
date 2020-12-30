import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../comp/Product';
import Message from '../comp/Messages';
import Loader from '../comp/Loader';
import { listProducts } from '../action/productAction';
import Carousels from '../comp/Carousels';

const HomeScreen = () => {
	const dispatch = useDispatch();

	const productList = useSelector((state) => state.productList);
	const { loading, error, products } = productList;

	useEffect(() => {
		dispatch(listProducts());
	}, [dispatch]);

	return (
		<>
			<Carousels />
			<h1>Last Products</h1>
			{loading ? (
				<Loader></Loader>
			) : error ? (
				<Message variant='danger'> {error} </Message>
			) : (
				<Row>
					{products.map((product) => (
						<Col key={product._id} sm={12} md={6} lg={4}>
							<Product product={product} name={product.name} />
						</Col>
					))}
				</Row>
			)}
		</>
	);
};

export default HomeScreen;
