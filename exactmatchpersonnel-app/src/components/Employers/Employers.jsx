import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import './style.css';
import logo from '../../Assets/Images/EMPlogo.png'

function Employers() {
    return (
        <Container fluid className="employers-container">
      <Container>
        <h1 style={{ fontSize: '2.1em', color: 'rgba(245, 181, 27)' }}>
          Employers
        </h1>
        <Row className='employers-description'>
          <Col style={{ color: 'white' }}>
            <h3>
              Looking for your next Candidates?
            </h3>
          </Col>
        </Row>
        <Row>
          <Col >

          </Col>
        </Row>
      </Container>
    </Container>
    );
}

export default Employers;