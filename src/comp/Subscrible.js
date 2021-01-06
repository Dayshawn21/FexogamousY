import React from 'react';
import {
	Container,
	Card,
	Row,
	Col,
	Image,
	InputGroup,
	FormControl,
	Button,
	Form,
} from 'react-bootstrap';

const Subscrible = () => {
	return (
		<div className='subcrible'>
			<Container>
				<Row className='py-5'>
					<Col>
						<h2>Sign up for email & get 25% off</h2>
						<p> Subcribe to get information about products and coupons</p>
					</Col>
					<Col className='py-4'>
						<InputGroup>
							<FormControl
								aria-label='Default'
								aria-describedby='inputGroup-sizing-default'
							/>
							<InputGroup.Append>
								<Button variant='main' className='button-color' type='button'>
									Subcribe
								</Button>
							</InputGroup.Append>
						</InputGroup>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Subscrible;
