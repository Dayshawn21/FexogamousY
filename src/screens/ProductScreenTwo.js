import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Query from '../comp/query/index';
import PRODUCT_QUERY from '../comp/queries/catergory/product';
import {
	Row,
	Col,
	Image,
	ListGroup,
	Card,
	Button,
	Form,
} from 'react-bootstrap';

const ProductScreenTwo = () => {
	let { id } = useParams();
	const [qty, setQty] = useState(1);
	const addtoCartHander = () => {
		console.log();
	};

	return (
		<Query query={PRODUCT_QUERY} _id={id}>
			{({ data: { product } }) => {
				const imageUrl =
					process.env.NODE_ENV !== 'development'
						? product.photo.url
						: process.env.REACT_APP_BACKEND_URL + product.photo.url;
				return (
					<Row>
						<Col md={6}>
							<Image src={imageUrl} alt={product.name} fluid />
						</Col>
						<Col md={3}>
							<ListGroup variant='flush'>
								<ListGroup.Item>
									<h3>{product.name}</h3>
								</ListGroup.Item>
								<ListGroup.Item>Price: ${product.price}</ListGroup.Item>
								<ListGroup.Item>
									Description: {product.description}
								</ListGroup.Item>
							</ListGroup>
						</Col>
						<Col Col md={3}>
							<Card>
								<ListGroup variant='flush'>
									<ListGroup.Item>
										<Row>
											<Col>Price:</Col>
											<Col>
												<strong>{product.price}</strong>
											</Col>
										</Row>
									</ListGroup.Item>
									{product.countInStock > 0 && (
										<ListGroup.Item>
											<Row>
												<Col> QTY</Col>
												<Col>
													<Form.Control
														as='select'
														value={qty}
														onChange={(e) => setQty(e.target.value)}
													>
														{[...Array(product.countInStock).keys()].map(
															(x) => (
																<option key={x + 1} value={x + 1}>
																	{' '}
																	{x + 1}
																</option>
															),
														)}
													</Form.Control>
												</Col>
											</Row>
										</ListGroup.Item>
									)}
									<ListGroup.Item>
										<Row>
											<Col>Status:</Col>
											<Col>
												{product.countInStock > 0
													? ' In Stock'
													: 'Out of Stock'}
											</Col>
										</Row>
									</ListGroup.Item>

									<ListGroup.Item>
										<Button
											variant='main'
											onClick={addtoCartHander}
											className='btn-block button-color'
											type='button'
											disabled={product.countInStock === 0}
										>
											{' '}
											Add to Cart{' '}
										</Button>
									</ListGroup.Item>
								</ListGroup>
							</Card>
						</Col>
					</Row>
				);
			}}
		</Query>
	);
};

export default ProductScreenTwo;
