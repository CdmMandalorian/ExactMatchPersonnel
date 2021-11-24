import React from "react";
import { Row, Card } from "react-bootstrap";
import '../style.css'
import "bootstrap/dist/css/bootstrap.min.css";

function NewsLetter(props) {
  return (
      <Card className="newsletter-card-view">
        <Row style={{justifyContent: 'center'}}>
       <Card.Header>
           {props.title}
       </Card.Header>
       <Card.Body>
           {props.body}
       </Card.Body>
        </Row>
      </Card>
  );
}

export default NewsLetter;
