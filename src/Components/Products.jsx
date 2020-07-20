import React from "react";
import Product from "./Product";

class Products extends React.Component {
  render() {
    return this.props.productData.map(data => (
      <Product
        key={data.id}
        id={data.id}
        title={data.title}
        description={data.description}
        price={data.price}
      />
    ));
  }
}

export default Products;
