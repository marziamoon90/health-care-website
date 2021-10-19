import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Login = () => {
    return (
        <div>
            <div className="fw-bold mt-5 d-flex align-items-center justify-content-center text-start">
                <Form className="w-md-50 rounded border border-3 border-light">
                    <div className="p-3">
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button className="border-0 text-dark fw-bold" style={{ backgroundColor: "lightblue" }} variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Login;