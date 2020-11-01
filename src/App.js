import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/products-store/Products";
import Message from "./components/Message";
import Cart from "./components/cart-store/Cart";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main id="mainContainer">
          <div className="container">
            <Products />
            <Message />
            <Cart />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
