import React, { Component } from "react";
import HomePage from "./Pages/Home/index.js";
import LandingPage from "./Pages/Landing/index.js";
import ItemPage from "./Pages/Item/index.js";
import "./App.css";
import MyHeader from "../src/Components/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "Home",
      itemsInCart: 0
    };
  }

  renderMainContent = () => {
    switch (this.state.page) {
      case "Home":
        return <HomePage />;
      case "Landing":
        return (
          <LandingPage
            decreaseCartItems={this.decreaseCartItems}
            addItemToCart={this.addItemToCart}
          />
        );
      case "Item":
        return <ItemPage />;
      default:
        return <div>Oh no, page not found!!</div>;
    }
  };
  updatePage = event => {
    event.preventDefault();
    this.setState({ page: event.target.value });
  };

  addItemToCart = event => {
    event.preventDefault();
    this.setState({ itemsInCart: this.state.itemsInCart + 1 });
  };
  decreaseCartItems = event => {
    event.preventDefault();
    let newTotal = this.state.itemsInCart - 1;
    newTotal = newTotal < 0 ? 0 : newTotal;
    this.setState({ itemsInCart: newTotal });
  };

  render() {
    return (
      <div>
        <div>
          <label>
            <input
              type="radio"
              name="page"
              value="Home"
              onClick={this.updatePage}
            />
            Home
          </label>
          <label>
            <input
              type="radio"
              name="page"
              value="Landing"
              onClick={this.updatePage}
            />
            Landing
          </label>
          <label>
            <input
              type="radio"
              name="page"
              value="Item"
              onClick={this.updatePage}
            />
            Item
          </label>
        </div>
        <MyHeader
          onPage={this.state.page}
          itemsInCart={this.state.itemsInCart}
        />
        {this.renderMainContent()}
      </div>
    );
  }
}

export default App;
