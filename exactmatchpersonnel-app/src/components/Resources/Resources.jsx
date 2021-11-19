import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import './style.css';
import logo from '../../Assets/Images/EMPlogo.png'

function Resources() {
    return (
        <Container fluid className="resources-container">
      <Container>
        <h1 style={{ fontSize: '2.1em', color: 'rgba(245, 181, 27)' }}>
          Resources
        </h1>
        <Row className='resources-description'>
          <Col style={{ color: 'white' }}>
            <h3>
              Jobs List
            </h3>
            <Col>
              <h4>
                <ul>
                  <li>
                      Job 1
                  </li>
                  <br></br>
                  <li>
                    Job 2
                  </li>
                  <br></br>
                  <li>
                    Job 3
                  </li>
                  <br></br>
                  <li>
                    Job 4
                  </li>
                  <br></br>
                  <li>
                    Job 5
                  </li>
                </ul>
              </h4>
            </Col>
            
          </Col>
        </Row>
        <Row>
          <Col style={{ color: 'white' }}>
            <h3>
              News
            </h3>
            <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quibusdam, iste perspiciatis libero placeat totam voluptates, impedit non commodi cum quod et! Id accusantium maxime maiores, animi excepturi dignissimos consectetur.</h4>
            <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias reprehenderit illum eius expedita laboriosam sunt ad unde illo placeat soluta sint maiores ratione dolore sequi repudiandae, odit quam. Totam, consequuntur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus optio eveniet quae laborum officia eaque non molestias possimus nulla enim eligendi, dignissimos reprehenderit ipsa totam exercitationem adipisci? Magnam, neque veniam!</h4>
            <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore molestiae sapiente sed ipsam ad eius consectetur, suscipit dolores pariatur, id voluptate laborum quo eveniet cum, incidunt necessitatibus debitis doloribus eaque.</h4>
          </Col>
        </Row>
      </Container>
    </Container>
    );
}

export default Resources;