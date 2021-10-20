import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "../FooterStyles/FooterStyles.js";

const Footer = () => {
    return (
        <Box className="mt-5">
            <h1 style={{
                color: "green",
                textAlign: "center",
                marginTop: "-50px"
            }}>
            </h1>
            <Container>
                <Row>
                    <Column>
                        <Heading>About Us</Heading>
                        <FooterLink href="#"><i className="fas fa-info-circle me-1"></i>Skilled Therapist</FooterLink>
                        <FooterLink href="#"><i className="fas fa-at me-1"></i>moon@info.com</FooterLink>
                        <FooterLink href="#"><i className="fas fa-map-marker-alt me-1"></i>Gulshan 1,Dhaka</FooterLink>
                        <FooterLink href="#"><i className="fas fa-phone-alt me-1"></i>+0235641</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Services</Heading>
                        <FooterLink href="#">Physiotherapy</FooterLink>
                        <FooterLink href="#">
                            Massage Therapy</FooterLink>
                        <FooterLink href="#">Chiroptratic Therapy</FooterLink>
                        <FooterLink href="#">Clinical Pilates</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="#">Dhaka</FooterLink>
                        <FooterLink href="#">Barisal</FooterLink>
                        <FooterLink href="#">Rangpur</FooterLink>
                        <FooterLink href="#">Rajshahi</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="#">
                            <i className="fab fa-facebook-f">
                                <span style={{ marginLeft: "10px" }}>
                                    Facebook
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-instagram">
                                <span style={{ marginLeft: "10px" }}>
                                    Instagram
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-twitter">
                                <span style={{ marginLeft: "10px" }}>
                                    Twitter
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-youtube">
                                <span style={{ marginLeft: "10px" }}>
                                    Youtube
                                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
            </Container>
        </Box>
    );
};
export default Footer;
