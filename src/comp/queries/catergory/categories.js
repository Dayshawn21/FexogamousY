import gql from 'graphql-tag';

const CATEGORIES_QUERY = gql`
	query Categories {
		categories {
			title
		}
	}
`;

export default CATEGORIES_QUERY;
