import gql from 'graphql-tag';

const PRODUCT_QUERY = gql`
	query Products($id: ID!) {
		product(id: $id) {
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

export default PRODUCT_QUERY;
