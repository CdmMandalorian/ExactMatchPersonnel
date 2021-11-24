import React from "react";
import { ListGroup } from "react-bootstrap";
import '../style.css'
import "bootstrap/dist/css/bootstrap.min.css";

function JobsLists(props) {
  return (
    <ListGroup>
    <ListGroup.Item>
        {props.title}
        {props.info}
        {props.requirements}
        {props.benefits}
    </ListGroup.Item>
  </ListGroup>
  );
}

export default JobsLists;