import React from "react";
import { Row, Card } from "react-bootstrap";
import '../style.css'
import "bootstrap/dist/css/bootstrap.min.css";

function IndustrialCards(props) {
  return (
      <Card className="industrial-card-view">
        <Row style={{justifyContent: 'center'}}>
        <Card.Img variant="left" src={props.imgPath1} className="industrial-img1" />
        <Card.Img variant="right" src={props.imgPath2} className="industrial-img2" />
        </Row>
        <Card.Footer>
          {props.title}
        </Card.Footer>
      </Card>
  );
}

export default IndustrialCards;
