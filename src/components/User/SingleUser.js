import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const SingleUser = () => {
    const { userId } = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then((res) => res.json())
            .then((user) => setUser(user));
    }, [userId]);
    const [images, setImages] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${userId}`)
            .then((res) => res.json())
            .then((image) => setImages(image));
    }, [userId]);
    const { name, email, phone } = user;
    return (
        <div>
            <Container>
                <Row>
                    <Col md="auto" className="m-auto" xs={12} sm={12}>
                        <div className="card  mt-5">
                            <img
                                style={{ width: '100%', height: '70%' }}
                                src={images.url}
                                alt={images.title}
                            />
                            <div className="card__info p-2">
                                <h4 className="text-muted">{images.title}</h4>
                                <h4>
                                    <b className="text-muted">Name:</b> {name}
                                </h4>
                                <h4>
                                    <b className="text-muted">Email:</b> {email}
                                </h4>
                                <h4>
                                    <b className="text-muted">Phone</b> {phone}
                                </h4>
                            </div>
                            <div className="btn__container text-center mb-4">
                                <Link className="btn btn-outline-primary rounded w-50" to="/">
                                    BackTo Home
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SingleUser;
