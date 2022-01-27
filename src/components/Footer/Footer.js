import React from 'react';
// import './Footer.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer__page mb-2">
            <Container>
                <Row>
                    <Col md="auto m-auto" xs={12} sm={12}>
                        <div className="footer">
                            <div className="footer__info">
                                <b calssName="text-muted">
                                    &copy; Copyright 2022 || All Right Reserved by Md Nayeem Sheikh.{' '}
                                    <Link className="privacy__link" to="/privacy-policy">
                                        Privacy Policy{' '}
                                    </Link>
                                    <Link className="tos__link" to="/terms-conditions">
                                        Terms of Service
                                    </Link>
                                </b>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
