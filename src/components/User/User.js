import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Images from '../Images/Images';

const User = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((user) => setUsers(user));
    }, []);
    return (
        <Container>
            <Row>
                {users.map((user) => {
                    return (
                        <Col key={user.id} md={4}>
                            <div className="card mt-3 text-decoration-none">
                                <Link className="text-decoration-none" to={`/user/${user.id}`}>
                                    <Images ids={user.id} />
                                    <span className="text-muted text-decoration-none p-2">
                                        <b>Name:</b> {user.name}
                                    </span>
                                </Link>
                            </div>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};

export default User;
