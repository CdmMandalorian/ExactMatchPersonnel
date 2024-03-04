import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarehouse } from "@fortawesome/free-solid-svg-icons";
import { faBuildingLock } from "@fortawesome/free-solid-svg-icons";
import { faIndustry } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { faBreadSlice } from "@fortawesome/free-solid-svg-icons";
import { faBoxesStacked } from "@fortawesome/free-solid-svg-icons";
import { faUserShield } from "@fortawesome/free-solid-svg-icons";
import { faCarSide } from "@fortawesome/free-solid-svg-icons";


function About() {
    return (
        <Container fluid className="about-container">
      <Container>
        <h1 className="about" style={{color: 'rgba(245, 181, 27)' }}>
          ABOUT
        </h1>
        <Row className='about-description' style={{color: 'white' }}>
          <Col >
            <h2 className="about">Exact Match Personnel</h2>
            <h3 className="about">EMPLOYERS</h3>
            <h3 className="about">Looking for Workforce?</h3>
            <h4 className="about">E M P is a Staffing Agency that Specializes Matching the Perfect Contender into Your Environment.</h4>
            <h4 className="about">Connecting with our Team, We Develop a Comprehensive Understanding of our Staffs' Skills, Aspirations, Needs, and Repertoire to Match Your Exact Organization.</h4>
            <br className="aboutBR"></br>
            <h3 className="about">EMPLOYEES</h3>
            <h4 className="about">Working with a Premier Extensive Network Connecting Applicants into their Skilled Specializations.</h4>
            <h4 className="about">E M P Strives to Incorporate You with the Best Job Opportunities in Your Area.</h4>
            <h4 className="about">Our Commitment is to foster a Dynamic and Inclusive job-seeking Experience. Dedicated in Assisting All.</h4>
            <h4 className="about">Experience does not Limit Opportunities.</h4>
            <br className="about1"></br>
            <br className="about2"></br>
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
                      MANUFACTURING
                        <br></br>
                          <FontAwesomeIcon icon={faIndustry} style={{color: "#f5b51b", paddingRight: "5%"}} />
                          <FontAwesomeIcon icon={faCarSide} style={{color: "#f5b51b", paddingRight: "2%"}} />
                    </Col> 
                    <Col className="jobIcons_item">
                      FOOD PRODUCTION
                        <br></br>
                          <FontAwesomeIcon icon={faUtensils} style={{color: "#f5b51b",paddingRight: "2%"}} />
                          <FontAwesomeIcon icon={faBreadSlice} style={{color: "#f5b51b"}} />
                    </Col>
                    <Col className="jobIcons_item">
                      ADMINISTRATIVE
                        <br></br>
                        <FontAwesomeIcon icon={faPhone} style={{color: "#f5b51b",paddingRight: "7%"}} />
                        <FontAwesomeIcon icon={faPrint} style={{color: "#f5b51b"}} />
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