import React from 'react';
import '../Therapies/SingleTherapy/SingleTherapy.css'
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ therapies }) => {
    const { therapy, id, img2, description } = therapies;
    const instruction = description.slice(0, 150)
    return (
        <div>
            <Col className="single-therapy">
                <Card className="inner">
                    <Card.Img width="200px" height="200px" variant="top" src={img2} />
                    <Card.Body>
                        <Card.Title className="fs-3 fw-bold therapy-title">{therapy}</Card.Title>
                        <Card.Text className="text-muted fs-5 fw-bold">
                            {instruction}
                        </Card.Text>
                        <Link to="/therapy">
                            <Button className="login-button px-4 py-2 rounded-pill border-0"><i className="fas fa-info-circle me-2 text-center"></i>See Details</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default Service;