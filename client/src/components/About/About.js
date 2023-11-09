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
            <h3>
              Exact Match Personnel
            </h3>
            <h4>is a Staffing Agency that specializes matching the perfect personnel into your work enviroment.</h4>
            <h4>Working with a premier extensive network connecting candidates within thier skilled specializations.</h4>
            <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam facere voluptate aspernatur porro quos veniam nemo iusto, velit pariatur laboriosam vero natus molestias voluptatibus neque tenetur accusamus tempore illum et!</h4>
            <br></br>
            <h3>Commitment</h3>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores temporibus est eaque, amet dolor optio similique, ut in dolorum ab repellat consectetur voluptatum aliquid, libero officiis eligendi vitae necessitatibus? Dolorum.</h4>
            <br></br>
            <Col className="jobIcons">
              <Container className="jobIcons">
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