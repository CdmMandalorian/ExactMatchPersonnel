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
            <h4 className="mission">At the heart of our mission is the belief that the right job can transform lives. We strive to create a platform that transcends traditional recruitment paradigms, ensuring that every candidate, regardless of their background, finds an exact match that not only meets their immediate needs but also propels them towards long-term success. </h4>
            <h4 className="mission">Exact Match Personnel is driven by a passion for connecting talent with opportunity, cultivating a vibrant community where individuals thrive, and businesses prosper. Join us as we embark on a journey to redefine the job search experience, fostering a world where every person, with or without experience, can realize their fullest professional potential.</h4>
            <br></br>
          </Col>
        </Row>
        <Row className="mission-img">
          <Col className="mission-img"
            md={5}
          >
            <img src={logo} alt="missionLogo" className="missionImg-fluid" />
          </Col>
        </Row>
      </Container>
    </Container>
    );
}

export default Mission;