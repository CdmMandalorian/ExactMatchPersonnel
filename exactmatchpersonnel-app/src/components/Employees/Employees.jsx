import React from "react";
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap'
import './style.css';
import warehouse from '../../Assets/Images/pickawood-6tAIO3pxde4-unsplash.jpg'
import security from '../../Assets/Images/flex-point-security-ut4dQ0KqsQE-unsplash.jpg'
import realEstate from '../../Assets/Images/dillon-kydd-pvdx8c6Y5BY-unsplash.jpg'
import medical from '../../Assets/Images/alex-mecl-oj6nOfh9Obo-unsplash.jpg'
import legal from '../../Assets/Images/tingey-injury-law-firm-yCdPU73kGSc-unsplash.jpg'
import marketing from '../../Assets/Images/jason-goodman-Oalh2MojUuk-unsplash.jpg'
import food from '../../Assets/Images/rod-long-kImU-9S9uh8-unsplash.jpg'
import staff from '../../Assets/Images/sam-moqadam-gzWqHpIJMTg-unsplash.jpg'
import office from '../../Assets/Images/andrew-neel-cckf4TsHAuw-unsplash.jpg'
import tech from '../../Assets/Images/christina-wocintechchat-com-glRqyWJgUeY-unsplash.jpg'
import construction from '../../Assets/Images/shivendu-shukla-3yoTPuYR9ZY-unsplash.jpg'
import accounting from '../../Assets/Images/kelly-sikkema-M98NRBuzbpc-unsplash.jpg'


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
            <Col className="employees-carouselImgs"
              md={6}
              style={{ paddingTop: "10px", paddingBottom: "20px" }}
            >
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={warehouse}
                    alt="Warehouse slide"
                  />
                  <Carousel.Caption>
                    <h3>Warehouse</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={security}
                    alt="Security slide"
                  />
                  <Carousel.Caption>
                    <h3>Security</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={realEstate}
                    alt="RealEstate slide"
                  />
                  <Carousel.Caption>
                    <h3>Real Estate</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={medical}
                    alt="Medical slide"
                  />
                  <Carousel.Caption>
                    <h3>Nursing | Medical</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={legal}
                    alt="Legal slide"
                  />
                  <Carousel.Caption>
                    <h3>Law | Legal</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={marketing}
                    alt="Marketing slide"
                  />
                  <Carousel.Caption>
                    <h3>Marketing</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={food}
                    alt="Food slide"
                  />
                  <Carousel.Caption>
                    <h3>Food | Culinary</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={staff}
                    alt="Staff slide"
                  />
                  <Carousel.Caption>
                    <h3>Event Staff</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={office}
                    alt="Administrative slide"
                  />
                  <Carousel.Caption>
                    <h3>Administrative | Office</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={tech}
                    alt="Tech slide"
                  />
                  <Carousel.Caption>
                    <h3>Techonology | IT</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={construction}
                    alt="Construction slide"
                  />
                  <Carousel.Caption>
                    <h3>Construction</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={accounting}
                    alt="Accounting slide"
                  />
                  <Carousel.Caption>
                    <h3>Accounting | Finance</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          <Col className='recruitingPositions' style={{ color: 'white' }}>
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