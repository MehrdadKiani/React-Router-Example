import React, { Component, Fragment } from "react";
import "./styles.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import { Container, Row } from "react-bootstrap";
import data from "./Components/data";
import { Route, Switch } from "react-router-dom";
import Products from "./Components/Products";
import ProductDetails from "./Components/ProductDetails";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { productData: data };
  }

  componentDidMount() {
    this.setState({ productData: data });
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Container fluid>
          <Row className="justify-content-md-center">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/products" render={() => <Products productData={this.state.productData} /> } />
              {/* Whenever React Router v4 renders a component, itâll pass to that component three props, match, location, and history */}
              <Route exact path="/products/:id"
                render={props => {
                  let details = this.state.productData.find( item => item.id === parseInt(props.match.params.id, 10));
                  return details ? (<ProductDetails details={details} />) : (<Home />);
                }}
              />
            </Switch>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default App;
