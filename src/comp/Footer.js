import React from 'react';
import {
	Container,
	Row,
	Col,
	InputGroup,
	FormControl,
	Button,
} from 'react-bootstrap';

const Footer = () => {
	return (
		<footer>
			<Container>
				<Row className='py-3'>
					<Col> Copyright &copy; MC</Col>
					<Col>
						{' '}
						<h4>
							Follow us at <i class='fab fa-facebook-square'></i>{' '}
							<i class='fab fa-instagram'></i>
						</h4>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
