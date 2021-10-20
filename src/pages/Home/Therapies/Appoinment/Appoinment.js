import React from 'react';
import { Card } from 'react-bootstrap';

const Appoinment = () => {
    return (
        <Card className="inner">
            <Card.Img width="250px" height="300px" variant="top" src="{data?.img2} " />
            <Card.Body>
                <Card.Title className="fs-3 fw-bold therapy-title"></Card.Title>
                <Card.Text className="text-muted fs-5 fw-bold">

                </Card.Text>

            </Card.Body>
        </Card>
    );
};

export default Appoinment;