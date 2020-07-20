import React, { Component } from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class Product extends Component {
  render() {
    return (
      <Col lg={3} className="mt-5">
        <Card>
          <Card.Body>
            <Card.Title>
              {this.props.id}){this.props.title}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-danger">
              {this.props.price}
            </Card.Subtitle>
            <Card.Text>{this.props.description}</Card.Text>
            <Link to={`/products/${this.props.id}`}>Details</Link>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default Product;
