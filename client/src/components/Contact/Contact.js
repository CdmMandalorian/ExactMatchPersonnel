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
                    <Row className="contact" style={{ justifyContent: "center"}}>
                        <Col className="contact"
                            md={7}
                            style={{
                                justifyContent: "center",
                                border: "2px solid white",
                            }}
                        >
                            <h1 className="contactHeading" style={{color: 'rgba(245, 181, 27)' }}>
                                CONTACT
                            </h1>
                            <Contactform />
                        </Col>
                        <Col
                            md={5}
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