import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import './style.css';
import Contactform from './ContactForm';
import logo from '../../Assets/Images/EMPlogo.png'

function Contact() {
    return (
        <Container fluid className="contact-container">
      <Container>
        <h1 style={{ fontSize: '2.1em', color: 'rgba(245, 181, 27)' }}>
          Contact
        </h1>
        <Container className="contact-content">
                    <Row className="contact" style={{ justifyContent: "center", padding: "10px" }}>
                        <Col
                            md={7}
                            style={{
                                justifyContent: "center",
                                paddingTop: "30px",
                                paddingBottom: "50px",
                                border: "2px solid black",
                                maxHeight: "480px"
                            }}
                        >
                            <h1 className="contactHeading" style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                                Contact <strong className="green">ME</strong>
                            </h1>
                            <Contactform />
                        </Col>
                        <Col
                            md={5}
                            style={{ paddingTop: "20px", paddingBottom: "20px" }}
                            className="contact-img"
                        >
                            <img src={logo} alt="contact" className="img-fluid" />
                        </Col>

                    </Row>
                </Container>
      </Container>
    </Container>
    );
}

export default Contact;