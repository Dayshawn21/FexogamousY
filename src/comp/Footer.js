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
						<h4>Follow us at</h4>
						<i class='fab fa-facebook-square'></i>{' '}
						<i class='fab fa-instagram'></i>
					</Col>
					<Col>
						{' '}
						<p> SUBSCRIBE TO OUR NEWSLETTER</p>
						<InputGroup className='mb-3'>
							<FormControl
								aria-label='Default'
								aria-describedby='inputGroup-sizing-default'
							/>
							<InputGroup.Append>
								<Button className='btn-block' type='button'>
									Submit
								</Button>
							</InputGroup.Append>
						</InputGroup>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
