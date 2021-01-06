import React from 'react';
import { Container, Card, Row, Col, Image } from 'react-bootstrap';

const ShopPhoto = () => {
	return (
		<Row className='p-3'>
			<Col>
				{' '}
				<Image src='https://source.unsplash.com/1600x900/?girl' fluid />
				<Card.ImgOverlay>
					<h1 className='py-3 text-center'>Women</h1>
				</Card.ImgOverlay>
			</Col>
			<Col>
				{' '}
				<Image src='https://source.unsplash.com/1600x900/?boy' fluid />
				<Card.ImgOverlay>
					<h1 className='py-3 text-center'>Men</h1>
				</Card.ImgOverlay>
			</Col>
		</Row>
	);
};

export default ShopPhoto;
