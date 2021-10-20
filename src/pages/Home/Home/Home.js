import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../../Shared/Header/Header.css'
import expert from '../../../images/icons/expert.png'
import emergency from '../../../images/icons/emergency.png'
import free from '../../../images/icons/free-consultation.png'
import useTherapy from '../../../Hooks/useTherapy';
import Service from '../Service/Service';

const Home = () => {
    const therapy = useTherapy()
    const slicedData = therapy.slice(0, 3)


    return (
        <div style={{ color: "#7f2549" }} className=" m-0">

            {/* clinic detail  */}
            <div className="clinic-details d-flex align-items-center justify-content-between container my-5  bg-light">
                <div className="text-start me-md-5">
                    <h5>CLINIC INTRODUCTION</h5>
                    <h1 className="fw-bold">Welcome to Physiotherapy &#38; Chiroparctor Clinic</h1>
                    <h5>In addition to spinal adjustments and manipulation, their expertise includes treating health problems of the neuromusculoskeletal system including nerves, bones, muscles, ligaments, and tendons.</h5>
                    <div>
                        <div className="p-3 border-top border-1 border-secondary">
                            <h5><i className="fas fa-check-circle"></i> <span className="text-muted fw-bold">24 -Hours Emergency Services</span>
                            </h5>
                            <h5><i className="fas fa-check-circle"></i> <span className="text-muted fw-bold">Professional and Certified Therapists
                            </span>
                            </h5>
                            <h5><i className="fas fa-check-circle"></i> <span className="text-muted fw-bold">Get Free Consultation Anytime
                            </span>
                            </h5>
                        </div>

                    </div>
                </div>
                <div>
                    <img width="500px" src="https://smartdemowp.com/resox/wp-content/uploads/proudly-1.jpg" alt="" />
                </div>
            </div>

            {/* sliced data for home  */}
            <div className="my-5 text-start container border-light border-top border-bottom border-3 py-4">
                <h5 >OUR SERVICESf</h5>
                <h1>What We’re Offering</h1>
                <Container>
                    <Row md={3} className="g-4 ">
                        {
                            slicedData.map(therapies => <Service
                                key={therapies.id}
                                therapies={therapies}
                            ></Service>)
                        }
                    </Row>
                </Container>
            </div>

            {/* expert,service,free consultation section  */}
            <div>
                <Row className="d-flex fs-5 text-start m-0 p-0">
                    {/* experts column */}
                    <Col md={4} sm={12} className="m-0 p-0">
                        <Card className="text-light me-0" style={{ height: '100%', backgroundColor: "#9E0036", }}>
                            <div className="p-3">
                                <Card.Img width="200px" className="p-3" variant="start" src={expert} />
                                <Card.Body>
                                    <Card.Title className="fw-bold fs-4">Experts Therapists</Card.Title>
                                    <Card.Text>
                                        As those in the professions know so well, therapy and counseling are brimming with ill-structured problems and a sometimes overwhelming confluence of solutions.
                                    </Card.Text>
                                    <NavLink to="/about" className="text-light text-decoration-none" variant="primary"><i className="fas fa-arrow-circle-right"></i> See Details</NavLink>
                                </Card.Body>
                            </div>
                        </Card>
                    </Col>
                    {/* emergency column */}
                    <Col md={4} sm={12} className="m-0 p-0">
                        <Card className="text-dark me-0" style={{ height: '100%', backgroundColor: "#FFDC78", }}>
                            <div className="p-3">
                                <Card.Img width="150px" className="p-3" variant="start" src={emergency} />
                                <Card.Body>
                                    <Card.Title className="fw-bold fs-4">Emergency Service</Card.Title>
                                    <Card.Text>
                                        Emergency medical services (EMS), also known as ambulance services or paramedic services, are emergency services that provide urgent pre-hospital treatment and stabilisation.
                                    </Card.Text>
                                    <NavLink to="/about" className="text-dark text-decoration-none" variant="primary"><i className="fas fa-arrow-circle-right"></i> See Details</NavLink>
                                </Card.Body>
                            </div>
                        </Card>
                    </Col>
                    {/* free column */}
                    <Col md={4} sm={12} className="m-0 p-0">
                        <Card className="text-light me-0" style={{ height: '100%', backgroundColor: "#222222", }}>
                            <div className="p-3">
                                <Card.Img width="150px" className="p-3" variant="start" src={free} />
                                <Card.Body>
                                    <Card.Title className="fw-bold fs-4">Free Consultaition</Card.Title>
                                    <Card.Text>
                                        “Healthcare Success is bringing new patients to our practice. In January 2013, they began managing all of our marketing including media (radio and TV), print (newspaper) and digital.
                                    </Card.Text>
                                    <NavLink to="/about" className="text-light text-decoration-none" variant="primary"><i className="fas fa-arrow-circle-right"></i> See Details</NavLink>
                                </Card.Body>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div >
    );
};

export default Home;