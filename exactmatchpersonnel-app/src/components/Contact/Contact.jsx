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
                    <Row className="contact" style={{ justifyContent: "left", padding: "10px" }}>
                        <Col fluid
                            md={7}
                            style={{
                                justifyContent: "center",
                                paddingTop: "30px",
                                paddingBottom: "50px",
                                border: "2px solid black",
                                maxHeight: "520px"
                            }}
                        >
                            <h1 className="contactHeading" style={{ fontSize: "2.1em", paddingBottom: "20px", color:  'white' }}>
                                Contact <strong>ME</strong>
                            </h1>
                            <Contactform style={{
                                justifyContent: 'left'

                                }} 
                            />
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