import React, { Component } from "react";
import HomePage from "../../Pages/Home/index.js";
import LandingPage from "../../Pages/Landing/index.js";
import ItemPage from "../../Pages/Item/index.js";
import "./Header.css";

class MyHeader extends Component {
  render() {
    if (this.props.onPage === "Home") {
      return (
        <header>
          <img
            src="https://img.icons8.com/plasticine/200/000000/partly-cloudy-day.png"
            alt="cloudy day"
          />{" "}
          Not Logged In
          <h1 id="h1"> Rainy Day </h1>
          <div id="Cart">
            {" "}
            There are {this.props.itemsInCart} items in cart{" "}
          </div>
          <input type="text" placeholder="Search" className="search" />)
        </header>
      );
    } else if (this.props.onPage === "Landing" || "Item") {
      return (
        <header>
          <img
            src="https://img.icons8.com/plasticine/200/000000/partly-cloudy-day.png"
            alt="cloudy day"
          />{" "}
          Logged In
          <h1 id="h1"> Rainy Day </h1>
          <div id="Cart">
            {" "}
            There are {this.props.itemsInCart} items in cart{" "}
          </div>
          <input type="text" placeholder="Search" className="search" />)
        </header>
      );
    }
  }
}
export default MyHeader;
