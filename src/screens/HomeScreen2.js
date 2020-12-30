import React from 'react';
import Query from '../comp/query/index';
import ProductOne from '../comp/ProductOne';
import PRODUCTS_QUERY from '../comp/queries/catergory/products';
const HomeScreen2 = () => {
	return (
		<div>
			<h1>Products</h1>
			<Query query={PRODUCTS_QUERY}>
				{({ data: { products } }) => {
					return (
						<div>
							<ProductOne products={products} />
						</div>
					);
				}}
			</Query>
		</div>
	);
};

export default HomeScreen2;
