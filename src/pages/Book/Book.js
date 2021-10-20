import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useTherapy from '../../Hooks/useTherapy';

const Book = () => {
    const [data, setData] = useState()
    const therapy = useTherapy();
    const existtTherapy = therapy;

    console.log(therapy)
    const { therapyId } = useParams();

    useEffect(() => {
        const exists = existtTherapy.find(data => data.id === parseInt(therapyId));
        setData(exists);
    }, [existtTherapy, therapyId, data])

    return (
        <div className=" d-flex align-items-center justify-content-center mt-5">
            <div className="w-50">
                <Card className="inner d-flex justify-content-between">
                    <Card.Img width="250px" height="300px" variant="top" src={data?.img2} />
                    <Card.Body>
                        <Card.Title className="fs-3 fw-bold therapy-title">{therapy}</Card.Title>
                        <Card.Text className="text-muted fs-5 fw-bold">
                            {data?.description}
                        </Card.Text>
                        <Link to="/appointment">
                            <Button className="login-button px-4 py-2 rounded-pill border-0"><i className="fas fa-calendar-check me-2 text-center"></i>Confirm Appointment</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Book;