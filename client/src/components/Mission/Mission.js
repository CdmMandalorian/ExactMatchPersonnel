import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import './style.css';
import logo from '../../Assets/navbarlogo/EMPlogo2.png'

function Mission() {
    return (
        <Container fluid className="mission-container">
      <Container>
        <h1 style={{ fontSize: '2.1em', color: 'rgba(245, 181, 27)' }}>
          MISSION
        </h1>
        <Row className='mission-description'>
          <Col style={{ color: 'white' }}>
            <h3>
              Exact Match Personnel
            </h3>
            <h3>Mission</h3>
            <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos pariatur, excepturi perferendis consequatur itaque eum minima ex harum sequi accusamus nostrum fugiat earum nulla repellendus animi dolore eaque odit doloribus.</h4>
            <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos pariatur, excepturi perferendis consequatur itaque eum minima ex harum sequi accusamus nostrum fugiat earum nulla repellendus animi dolore eaque odit doloribus.</h4>
            <br></br>
          </Col>
        </Row>
        <Row className="mission-img">
          <Col
            md={5}
            style={{ paddingTop: "20px", paddingBottom: "50px" }}
          >
            <img src={logo} alt="missionLogo" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </Container>
    );
}

export default Mission;