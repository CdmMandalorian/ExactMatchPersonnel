import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import './style.css';
import logo from '../../Assets/Images/EMPlogo.png'

function About() {
    return (
        <Container fluid className="about-container">
      <Container>
        <h1 style={{ fontSize: '2.1em', color: 'rgba(245, 181, 27)' }}>
          About
        </h1>
        <Row className='about-description'>
          <Col style={{ color: 'white' }}>
            <h3>
              Exact Match Personnel
            </h3>
            <h4>is a Staffing Agency that specializes matching the perfect personnel into your work enviroment.</h4>
            <h4>Working with a premier extensive network connecting candidates within thier skilled specializations.</h4>
            <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam facere voluptate aspernatur porro quos veniam nemo iusto, velit pariatur laboriosam vero natus molestias voluptatibus neque tenetur accusamus tempore illum et!</h4>
            <br></br>
            <h3>Mission</h3>
            <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos pariatur, excepturi perferendis consequatur itaque eum minima ex harum sequi accusamus nostrum fugiat earum nulla repellendus animi dolore eaque odit doloribus.</h4>
            <br></br>
            <h3>Goals</h3>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore vel tenetur facilis deserunt eaque id optio. Praesentium mollitia exercitationem voluptate blanditiis nam fugit est, ullam, eveniet id et repellendus soluta!</h4>
            <br></br>
            <h3>Commitment</h3>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores temporibus est eaque, amet dolor optio similique, ut in dolorum ab repellat consectetur voluptatum aliquid, libero officiis eligendi vitae necessitatibus? Dolorum.</h4>
          </Col>
        </Row>
        <Row className="about-img">
          <Col
            md={5}
            style={{ paddingTop: "20px", paddingBottom: "50px" }}
          >
            <img src={logo} alt="aboutLogo" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </Container>
    );
}

export default About;