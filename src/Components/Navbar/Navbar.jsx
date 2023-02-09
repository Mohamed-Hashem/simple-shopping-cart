import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  constructor(props) {
    super();
  }

  render() {
    let price = this.props.cartItems
      .map((item) => item.price * item.qty)
      .reduce((acc, value) => acc + value, 0);

    return (
      <nav className="navbar navbar-expand-lg py-4 position-fixed w-100 bg-dark z-1">
        <div className="container">
          <NavLink className="navbar-brand text-white-50" to="/">
            <b>Shopping Cart</b>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto d-flex justify-content-center align-items-center">
              <li className="nav-item mx-2 fs-3">
                <span className="text-white-50">$ {price.toFixed(2)}</span>
              </li>
              <li className="nav-item shoppingIcon">
                <a className="nav-link text-white-50" href="#cart">
                  Cart
                  <i className="bi bi-cart-plus fs-2 px-2"></i>
                </a>
                <span>{this.props.cartItems.length}</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
