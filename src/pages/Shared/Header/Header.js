import React from 'react';
import './Header.css'
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import logo from '../../../images/logo.png'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="background-img nav-bar">
            <Navbar collapseOnSelect sticky="top" expand="lg" variant="light">
                <Container>
                    <img className="d" width="80px" src={logo} alt="" />
                    <h2 className="ms-md-2 me-md-5 m-sm-0">Wellness Therapy</h2>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className=" mx-5 m-sm-0 nav-bar">
                            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/therapy">Therapy</Nav.Link>
                            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav>
                            <NavLink to="/login">
                                <Button className="login-button px-4 py-2 rounded-pill" variant="outline-info" ><i className="fas fa-sign-in-alt me-2 text-center"></i>Login</Button>
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="mx-5 my-5 fw-bold text-start w-50">
                <h1 className="title m-0"><i className="fas fa-spa"></i> Wellness Physiotherapy</h1>
                <h5 className="relax text-end w-75 text-uppercase m-0 mb-5 ">Have a relaxing time</h5>
                <h2 className="fw-bold ">Wellness Services</h2>
                <ul>
                    <li>Massage Therapy</li>
                    <li>Sport Injuries</li>
                    <li>Chiroptratic Therapy</li>
                    <li>Clinical Pilates</li>
                    <li>Work Injuries</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;