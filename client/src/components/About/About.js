import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarehouse } from "@fortawesome/free-solid-svg-icons";
import { faBuildingLock } from "@fortawesome/free-solid-svg-icons";
import { faHospitalUser } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faNetworkWired } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faBreadSlice } from "@fortawesome/free-solid-svg-icons";
import { faBoxesStacked } from "@fortawesome/free-solid-svg-icons";
import { faUserShield } from "@fortawesome/free-solid-svg-icons";
import { faHospital } from "@fortawesome/free-solid-svg-icons";


function About() {
    return (
        <Container fluid className="about-container">
      <Container>
        <h1 style={{ fontSize: '2.1em', color: 'rgba(245, 181, 27)' }}>
          ABOUT
        </h1>
        <Row className='about-description' style={{ color: 'white' }}>
          <Col >
            <h2>Exact Match Personnel</h2>
            <h3>Employers</h3>
            <h3>Looking for Workforce?</h3>
            <h4>E M P is a Staffing Agency that Specializes Matching the Perfect Contender into Your Enviroment.</h4>
            <h4>Connecting with our Team, We Develop a Comprehensive Understanding of our Staffs' Skills, Apirations, Needs, and Repetoire to Match Your Exact Organization.  </h4>
            <br></br>
            <h3>Employees</h3>
            <h4>Working with a Premier Extensive Network Connecting Applicants into thier Skilled Specializations.</h4>
            <h4>E M P Strives to Incorporate You with the Best Job Opportunities in Your Area.</h4>
            <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam facere voluptate aspernatur porro quos veniam nemo iusto, velit pariatur laboriosam vero natus molestias voluptatibus neque tenetur accusamus tempore illum et!</h4>
            <br></br>
            <br></br>
            <br></br>
            <Col className="jobs">
              <Container className="jobs">
                <Row>
                  <Col className="recruitingPositions_item">
                  FULL TIME
                  </Col>
                  <Col className="recruitingPositions_item">
                  PART TIME
                  </Col>
                  <Col className="recruitingPositions_item">
                  PER DIEM
                  </Col>
                  <Col className="recruitingPositions_item">
                  DIRECT HIRE
                  </Col>
                  <Col className="recruitingPositions_item">
                  TEMPORARY PLACEMENT
                  </Col>
                  <Col className="recruitingPositions_item">
                  LONG TERM PLACEMENT
                  </Col>
                  <Col className="recruitingPositions_item">
                  ON CALL SUBSTITUTES
                  </Col>
                </Row>
                  <hr></hr>
                  <Row>  
                    <Col className="jobIcons_item">
                      WAREHOUSE
                        <br></br>
                          <FontAwesomeIcon icon={faWarehouse} style={{color: "#f5b51b", paddingRight: "8%"}} />
                          <FontAwesomeIcon icon={faBoxesStacked} style={{color: "#f5b51b",}} />
                    </Col>
                    <Col className="jobIcons_item">
                      SECURITY
                        <br></br>
                          <FontAwesomeIcon icon={faUserShield} style={{color: "#f5b51b", paddingRight: "8%"}} />
                          <FontAwesomeIcon icon={faBuildingLock} style={{color: "#f5b51b", paddingRight: "2%"}} />
                    </Col>
                    <Col className="jobIcons_item">
                      MEDICAL
                        <br></br>
                          <FontAwesomeIcon icon={faHospitalUser} style={{color: "#f5b51b", paddingRight: "5%"}} />
                          <FontAwesomeIcon icon={faHospital} style={{color: "#f5b51b", paddingRight: "2%"}} />
                    </Col> 
                    <Col className="jobIcons_item">
                      FOOD
                        <br></br>
                          <FontAwesomeIcon icon={faUtensils} style={{color: "#f5b51b",paddingRight: "2%"}} />
                          <FontAwesomeIcon icon={faBreadSlice} style={{color: "#f5b51b"}} />
                    </Col>
                    <Col>
                      Technology
                        <br></br>
                        <FontAwesomeIcon icon={faNetworkWired} style={{color: "#f5b51b",paddingRight: "7%"}} />
                        <FontAwesomeIcon icon={faLaptopCode} style={{color: "#f5b51b"}} />
                    </Col>
                  </Row>
              </Container>
            </Col>
          </Col>
          
        </Row>
      </Container>
    </Container>
    );
}

export default About;