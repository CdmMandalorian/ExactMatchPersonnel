import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import './style.css';
import NewsLetter from '../NewsLetter.js'
import JobsLists from "../JobsLists";

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
              Exact Match Personnel Jobs List
            </h3>
            <Col className='jobsLists'>
              <JobsLists 
                title=''
                info=''
                requirements=''
                benefits=''
              />
              <JobsLists 
                title=''
                info=''
                requirements=''
                benefits=''
              />
              <JobsLists 
                title=''
                info=''
                requirements=''
                benefits=''
              />
              <JobsLists 
                title=''
                info=''
                requirements=''
                benefits=''
              />
              <JobsLists 
                title=''
                info=''
                requirements=''
                benefits=''
              />
              <JobsLists 
                title=''
                info=''
                requirements=''
                benefits=''
              />
              <JobsLists 
                title=''
                info=''
                requirements=''
                benefits=''
              />
            </Col>
          </Col>
        </Row>
        <Row>
          <Col style={{ color: 'white' }}>
            <h3>
              Exact Match Personnel NewsLetter
            </h3>
            <NewsLetter 
              title='First NewsLetter'
              body='sdafasdfasdfsdafdsacvasdvcsfasdfsadfsadfasdfasdfasdfsfasdfsdafsdafafasdfasdfdsafafadsfafadsfafsafddafasd'
            />
             <NewsLetter 
              title='NewsLetter'
              body=''
            />
             <NewsLetter 
              title='NewsLetter'
              body=''
            />
             <NewsLetter 
              title='NewsLetter'
              body=''
            />
          </Col>
        </Row>
      </Container>
    </Container>
    );
}

export default Resources;