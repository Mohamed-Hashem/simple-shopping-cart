import { Component } from "react";
import Cart from "./Pages/Cart/Cart";
import Products from "./Pages/Products/Products";
import Navbar from "./Components/Navbar/Navbar";

export default class App extends Component {
  constructor(props) {
    super();
    this.state = {
      cartItems: [],
    };
  }

  componentDidMount = () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (cartItems) {
      this.setState({ cartItems });
    }
  };

  addToLocalStorage = (data) => {
    localStorage.setItem("cartItems", JSON.stringify(data));
  };

  addToCart = (product) => {
    let cartItems = [...this.state.cartItems];
    const element = cartItems.find((elem) => elem.id === product.id);

    if (element) {
      cartItems = cartItems.map((p) =>
        p.id === product.id ? { ...element, qty: element.qty + 1 } : p
      );
    } else {
      cartItems = [...cartItems, { ...product, qty: 1 }];
    }

    this.addToLocalStorage(cartItems);
    this.setState({ cartItems });
  };

  removeFromCart = (product) => {
    let cartItems = [...this.state.cartItems];
    const element = cartItems.find((elem) => elem.id === product.id);

    if (element) {
      cartItems = cartItems.filter((p) => p.id !== product.id);
      this.addToLocalStorage(cartItems);
    } else {
      alert("This Product is not in the Cart Items");
    }

    this.setState({ cartItems });
  };

  removeProductFromCart = (product) => {
    let cartItems = [...this.state.cartItems];
    const element = cartItems.find((elem) => elem.id === product.id);

    if (element.qty > 1) {
      cartItems = cartItems.map((p) =>
        p.id === product.id ? { ...element, qty: element.qty - 1 } : p
      );
    } else {
      cartItems = cartItems.filter((p) => p.id !== product.id);
    }
    this.addToLocalStorage(cartItems);
    this.setState({ cartItems });
  };
  render() {
    return (
      <>
        <Navbar cartItems={this.state.cartItems} />
        <Products
          addToCart={this.addToCart}
          removeFromCart={this.removeFromCart}
        />
        <Cart
          cartItems={this.state.cartItems}
          addToCart={this.addToCart}
          removeFromCart={this.removeFromCart}
          removeProductFromCart={this.removeProductFromCart}
        />
      </>
    );
  }
}
