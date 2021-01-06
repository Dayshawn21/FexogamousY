import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { Image, Transformation } from 'cloudinary-react';

import axios from 'axios';

const Product = ({ product, image }) => {
	return (
		<Card bg='main' className='my-3 p-3 rounded'>
			<Link to={`/products/${product._id}`}>
				<Card.Img src={product.photo.url} alt={product.photo.url} fluid />
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
