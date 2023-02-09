import React, { Component } from "react";

export default class Cart extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      this.props.cartItems.length && (
        <div className="cartItems" id="cart">
          <table className="table table-striped text-center table-responsive table-bordered table-hover">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Increase</th>
                <th scope="col">Decrease</th>
                <th scope="col">Total Price</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>
              {this.props.cartItems.map((product, index) => (
                <tr key={product.id}>
                  <th scope="row">{index + 1}</th>
                  <td width={200}>{product.title}</td>
                  <td>$ {product.price}</td>
                  <td>{product.qty}</td>
                  <td>
                    <button
                      className="btn btn-primary fw-bold"
                      onClick={() => this.props.addToCart(product)}
                    >
                      +
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-secondary fw-bold"
                      onClick={() => this.props.removeProductFromCart(product)}
                    >
                      -
                    </button>
                  </td>
                  <td>$ {product.price * product.qty}</td>
                  <td>
                    <i
                      className="removeIcon bi bi-cart-x fs-3 text-danger"
                      onClick={() => this.props.removeFromCart(product)}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    );
  }
}
