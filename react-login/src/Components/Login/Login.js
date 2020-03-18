import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card, Alert } from 'react-bootstrap';

import loader from '../../loader.gif';

import { authenticate } from '../../services/authenticationservice';

import './Login.css';

function Login(props) {
    // Declare a new state variable, which we'll use to store "credentials"
    const [credentials, setCredentials] = useState({ "email": "", "password": "" });
    const [error, setError] = useState("");
    const [isLoading, setLoader] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        setLoader(true);
        setError("");
        authenticate(credentials)
            .then(
                (result) => {
                    setLoader(false);
                    if (result && result.id) {
                        const { from } = props.location.state || { from: { pathname: "/" } };
                        props.history.push(from);
                    }
                    else if (result && result.error) {
                        setError(result.error);
                    }
                    else {
                        setError("Sorry...Could not able to Sign In.");
                    }
                })
            .catch(
                (error) => {
                    setLoader(false);
                    setError("Sorry...Could not able to Sign In.");
                }
            )
        setCredentials({ "email": "", "password": "" });
    }

    function handleChangeEmail(event) {
        setCredentials({ ...credentials, "email": event.target.value });
    }

    function handleChangePassword(event) {
        setCredentials({ ...credentials, "password": event.target.value });
    }


    return (
        <Container fluid={true} className="background-poster">
            <Row className="full-width">
                <Col xs={12} sm={10} md={6} lg={4} xl={4} className="m-auto">
                    <Card className="custom-card">
                        <Form onSubmit={(e) => handleSubmit(e)}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email"
                                    onChange={(e) => handleChangeEmail(e)}
                                    value={credentials.email}
                                    required
                                    pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$" />
                                <Form.Text className="text-muted">
                                    {"We'll never share your email with anyone else."}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"
                                    onChange={(e) => handleChangePassword(e)}
                                    value={credentials.password}
                                    required
                                    pattern="^([a-zA-Z0-9@*#]{8,15})$" />
                            </Form.Group>
                            {/* <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember me" />
                            </Form.Group> */}
                            {isLoading ?
                                <Button className="full-width" variant="success" type="submit" disabled>
                                    <img src={loader} alt="Signing In..." />
                                </Button>
                                :
                                <Button className="full-width" variant="success" type="submit">
                                    {"Sign In"}
                                </Button>
                            }
                            {error &&
                                <Alert dismissible onClose={() => setError("")}
                                    className="custom-alert" variant="danger">
                                    {error}
                                </Alert>
                            }
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Login;