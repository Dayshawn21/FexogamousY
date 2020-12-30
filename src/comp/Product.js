import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

import axios from 'axios';

const Product = ({ product, image }) => {
	const imageUrl =
		process.env.NODE_ENV !== 'development'
			? product.photo.url
			: process.env.REACT_APP_BACKEND_URL + product.photo.url;
	return (
		<Card className='my-3 p-3 rounded'>
			<Link to={`/products/${product._id}`}>
				<Card.Img src={imageUrl} alt={product.name} fluid />
			</Link>

			<Card.Body>
				<Link to={`/products/${product._id}`}>
					<Card.Title as='div'>
						<strong>{product.name}</strong>
					</Card.Title>
				</Link>

				<Card.Text as='h3'> ${product.price} </Card.Text>
			</Card.Body>
		</Card>
	);
};

export default Product;
