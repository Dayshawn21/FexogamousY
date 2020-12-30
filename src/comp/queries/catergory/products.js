import gql from 'graphql-tag';

const PRODUCTS_QUERY = gql`
	query Products {
		products {
			id
			name
			quantity
			price
			description
			countInStock
			quantity
			photo {
				url
			}
		}
	}
`;

export default PRODUCTS_QUERY;
