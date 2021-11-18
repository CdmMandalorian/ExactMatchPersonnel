import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap'
import './style.css';
import logo from '../../Assets/Images/EMPlogo.png'

function Employees() {
    return (
        <Container fluid className="employees-container">
      <Container>
        <h1 style={{ fontSize: '2.1em', color: 'rgba(245, 181, 27)' }}>
          Employees
        </h1>
        <Row className='employees-description1'>
          <Col style={{ color: 'white' }}>
            <h3>
            Looking for new opportunity
            </h3>
            <h4>Send Your Resume</h4>
            <h4>At Exatch Match Personnel we strive to connect you with the best job opportunities within your area.</h4>
            <h4>Assisting candidates excel, to achive the best job placements available</h4>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <Row className='employees-description2'>
          <Col style={{ color: 'white' }}>
            <h3>
              Recruiting Positions
            </h3>
            <h4>On Call Substitues</h4>
            <h4>Temporary Placement</h4>
            <h4>Direct Hire</h4>
            <h4>Long Term Permanent Placement</h4>
            <h4>Full Time</h4>
            <h4>Part Time</h4>
          </Col>
        </Row>
        <Row className='employees-description3'>
          <Col style={{ color: 'white' }}>
          <h3>Specialize Placements</h3>
          <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus dolorum impedit hic possimus perspiciatis sunt nostrum eveniet vero animi praesentium quos, dolor expedita quam numquam qui amet illum. Optio, provident.</h4>
          <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae quo obcaecati cum placeat non vero perspiciatis voluptatum dolore dolor earum laboriosam sit molestias, ullam odio consequuntur nemo beatae dolorem dicta!</h4>
          </Col>
        </Row>
        <Row style={{ marginTop: '2em', display: 'flex'}}>
          <Col style={{ textAlign: 'center'}}>
          <label class="is-invalid-label">Upload Your Resume <span class="text-primary">*</span>
							<div class="upload-button-wrapper" style={{ display: 'block'}}>
								<Button class="button">Click here to upload&nbsp;a&nbsp;file</Button>
								<input type="file" name="upload" id="resume" required="" class="is-invalid-input" data-invalid="" aria-invalid="true" />
								<div id="filename"></div>
							</div>
						</label>
          </Col>
        </Row>
      </Container>
    </Container>
    );
}

export default Employees;