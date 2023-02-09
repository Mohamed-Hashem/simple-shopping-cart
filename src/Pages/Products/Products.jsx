import axios from "axios";
import React, { Component } from "react";

export default class Products extends Component {
  constructor(props) {
    super();
    this.state = {
      products: [],
    };
  }

  getProducts = async () => {
    await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        this.setState({ products: res.data.slice(0, 9) });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getProducts();
  }

  render() {
    return (
      <main className="container-fluid">
        <div className="row">
          {this.state.products.map((product) => (
            <div className="col-md-4 mb-3 overflow-hidden" key={product.id}>
              <div className="card text-center text-white">
                <div className="overflow-hidden">
                  <img src={product.image} className="card-img" alt="..." />
                </div>
                <div className="card-body bg-dark">
                  <h5>{product.title.slice(0, 10)}</h5>
                  <p>{product.description.slice(0, 30)}</p>
                  <button
                    className="btn btn-info mx-3"
                    onClick={() => this.props.addToCart(product)}
                  >
                    Add To Card
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.props.removeFromCart(product)}
                  >
                    Remove From Card
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    );
  }
}
