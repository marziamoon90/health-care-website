import React from 'react';
import { Col, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div className="mt-5">
            <h4>OUR TESTIMONIALS</h4>
            <h1 className="fw-bold">What Our Patients Say</h1>

            <div>
                <Row sm={1} md={3}>
                    <Col className="patient">
                        <h1>David Coper</h1>
                    </Col>
                    <Col className="patient">
                        <h1>David Coper</h1>
                    </Col>
                    <Col className="patient">
                        <h1>David Coper</h1>
                    </Col>

                </Row>
            </div >



            <div className="p-2 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center justify-content-between">
                    <i className="fas fa-user-md fs-1 me-3"></i>
                    <div >
                        <h1 className="fw-bolder">78</h1>
                        <h5 className="fw-bold">Skilled Therapist</h5>
                    </div>
                </div>

                <div className="d-flex align-items-center justify-content-between">
                    <i className="fas fa-exclamation-triangle fs-1 me-3"></i>
                    <div >
                        <h1 className="fw-bolder">78</h1>
                        <h5 className="fw-bold">Skilled Therapist</h5>
                    </div>
                </div>

                <div className="d-flex align-items-center justify-content-between">
                    <i className="fas fa-smile-beam fs-1 me-3"></i>
                    <div >
                        <h1 className="fw-bolder">78</h1>
                        <h5 className="fw-bold">Skilled Therapist</h5>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default About;