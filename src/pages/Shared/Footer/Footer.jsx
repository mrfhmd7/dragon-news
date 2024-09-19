import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#F3F3F3', padding: '20px 0' }}>
            <Container>
                <Row>
                    <Col md={4}>
                        <h5>About Dragon News</h5>
                        <p>Your trusted source for the latest news on various categories including sports, politics, and entertainment.</p>
                    </Col>
                    <Col md={4}>
                        <h5>Contact Us</h5>
                        <p>Email: info@dragonnews.com</p>
                        <p>Phone: +123 456 7890</p>
                    </Col>
                    <Col md={4}>
                        <h5>Follow Us</h5>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li><a href="#" style={{ color: '#000' }}>Facebook</a></li>
                            <li><a href="#" style={{ color: '#000' }}>Twitter</a></li>
                            <li><a href="#" style={{ color: '#000' }}>Instagram</a></li>
                        </ul>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col className="text-center">
                        <p>&copy; 2024 Dragon News. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;