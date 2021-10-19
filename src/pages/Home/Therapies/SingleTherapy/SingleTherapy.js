import React from 'react';
import './SingleTherapy.css'
import { Card, Col } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';

const SingleTherapy = ({ therapies }) => {
    const { therapy, id, img } = therapies;
    return (
        <div >
            <Col className="single-therapy">
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className="fs-3 fw-bold therapy-title">{therapy}</Card.Title>
                        <Card.Text className="text-muted fs-5 fw-bold">
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Button className="login-button px-4 py-2 rounded-pill border-0" to='/book'><i class="fas fa-calendar-check me-2 text-center"></i>Book Appoinment</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default SingleTherapy;