import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from '../comp/ProductCard';

const ProductOne = ({ products }) => {
	return (
		<div>
			<h1>Last Products</h1>

			<Row>
				{products &&
					products.map((product) => {
						return (
							<Col sm={12} md={6} lg={4}>
								<ProductCard product={product} key={`product__${product.id}`} />
							</Col>
						);
					})}
			</Row>
		</div>
	);
};

export default ProductOne;
