import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import './style.css';
import logo from '../../Assets/Images/EMPlogo.png'

function Resources() {
    return (
        <Container fluid className="resources-container">
      <Container>
        <h1 style={{ fontSize: '2.1em', color: 'rgba(245, 181, 27)' }}>
          About
        </h1>
        <Row className='resources-description'>
          <Col style={{ color: 'white' }}>
            <h3>
              Exact Match Personnel is a Staffing Agency.
            </h3>
          </Col>
        </Row>
        <Row>
          <Col
            md={5}
            style={{ paddingTop: "20px", paddingBottom: "50px" }}
            className="resources-img"
          >
            <img src={logo} alt="resourcesLogo" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </Container>
    );
}

export default Resources;