import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useTherapy from '../../../../Hooks/useTherapy';

import SingleTherapy from '../SingleTherapy/SingleTherapy';

// style="transform: translate3d(-1600px, 0px, 0px); transition: all 0.5s ease 0s; width: 4000px;
const Therapy = () => {
    const therapy = useTherapy()
    return (
        <div className="mt-5 text-start">
            <h1 className="text-center fw-bolder fs-sm-1" >Our Services</h1>
            <Container>
                <Row xs={1} md={2} className="g-5">
                    {
                        therapy.map(therapies => <SingleTherapy
                            key={therapies.id}
                            therapies={therapies}
                        ></SingleTherapy>)
                    }
                </Row>
            </Container>

        </div>
    );
};

export default Therapy;