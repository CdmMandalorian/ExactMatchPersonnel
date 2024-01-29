import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import './style.css';
import logo from '../../Assets/navbarlogo/EMPlogo2.png'

function Mission() {
    return (
        <Container fluid className="mission-container">
      <Container>
        <h1 className="mission"style={{color: 'rgba(245, 181, 27)' }}>
          MISSION
        </h1>
        <Row className='mission-description'>
          <Col style={{ color: 'white' }}>
            <h3>
              Exact Match Personnel
            </h3>
            <h3 className="mission">Mission</h3>
            <h4 className="mission">At Exact Match Personnel, our mission is to empower individuals at every stage of their career journey by providing unparalleled support in connecting talented individuals with rewarding employment opportunities. </h4>
            <h4 className="mission">We believe that everyone, regardless of their level of experience, deserves the chance to find a job that not only matches their skills but also aligns with their aspirations.</h4>
            <h4 className="mission">sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h4>
            <h4 className="mission">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos pariatur, excepturi perferendis consequatur itaque eum minima ex harum sequi accusamus nostrum fugiat earum nulla repellendus animi dolore eaque odit doloribus.</h4>
            <br></br>
          </Col>
        </Row>
        <Row className="mission-img">
          <Col className="mission-img"
            md={5}
          >
            <img src={logo} alt="missionLogo" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </Container>
    );
}

export default Mission;