import React from 'react';
import './SingleTherapy.css'
import { Card, Col, } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import { Link } from 'react-router-dom';

const SingleTherapy = ({ therapies }) => {
    const { therapy, id, img, description } = therapies;
    const therapyId = `/book/${id}`;

    const instruction = description.slice(0, 200)
    return (
        <div >
            <Col className="single-therapy">
                <Card className="inner">
                    <Card.Img width="250px" height="300px" variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className="fs-3 fw-bold therapy-title">{therapy}</Card.Title>
                        <Card.Text className="text-muted fs-5 fw-bold text-justify">
                            {instruction}
                        </Card.Text>
                        <Link to={therapyId}>
                            <Button className="login-button px-4 py-2 rounded-pill border-0"><i className="fas fa-calendar-check me-2 text-center"></i>Book Appoinment</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default SingleTherapy;