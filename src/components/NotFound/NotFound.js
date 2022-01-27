import React from 'react';
import './NotFound.css';
import { Col, Container, Row } from 'react-bootstrap';

const NotFound = () => {
    return (
        <div className="err__main">
            <Container>
                <Row>
                    <Col>
                        <div style={{ minHeight: '400px' }} className="error__container mt-5">
                            <h2 className="text-muted">OPPS! This page is not available</h2>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NotFound;
