import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Contactform from './ContactForm';
import contactImg from '../../Assets/navbarlogo/EMPlogo2.png'

function Contact () {
    return (
        <section>

            {/* <SideBar></SideBar> */}

            <Container fluid className="contact-section" id="contact">

                {/* <Particle> */}

                <Container className="contact-content">
                    <Row className="contact" style={{ justifyContent: "center", padding: "10px" }}>
                        <Col
                            md={7}
                            style={{
                                justifyContent: "center",
                                paddingTop: "30px",
                                paddingBottom: "50px",
                                border: "2px solid white",
                                maxHeight: "600px"
                            }}
                        >
                            <h1 className="contactHeading" style={{ fontSize: "2.1em", paddingBottom: "20px", color: 'rgba(245, 181, 27)' }}>
                                CONTACT
                            </h1>
                            <Contactform />
                        </Col>
                        <Col
                            md={5}
                            style={{ paddingTop: "20px", paddingBottom: "20px" }}
                            className="contact-img"
                        >
                            <img src={contactImg} alt="contact" className="img-fluid-contact" />
                        </Col>

                    </Row>
                </Container>
                {/* </Particle> */}
            </Container>
        </section>
    );
}

export default Contact;