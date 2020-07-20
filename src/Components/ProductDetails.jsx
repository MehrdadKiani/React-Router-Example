import React, { Component } from "react";
import { Card, Col } from "react-bootstrap";

class ProductDetails extends Component {
  render() {
    return (
      <Col md="auto" className="mt-5">
        <Card>
          <Card.Body>
            <Card.Title>
              {this.props.details.id}){this.props.details.title}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-danger">
              {this.props.details.price}
            </Card.Subtitle>
            <Card.Text>{this.props.details.description}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default ProductDetails;
