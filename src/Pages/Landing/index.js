import React, { Component } from "react";
import "./styles.css";
import MyHeader from "../../Components/Header";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "Landing",
      sideMenuOpen: "open"
    };
  }
  renderSideMenu = () => {
    switch (this.state.sideMenuOpen) {
      case "close":
        return (
          <div id="main-left-close">
            <button type="button" value="close" onClick={this.updateMenu}>
              O
            </button>
          </div>
        );
      case "open":
        return (
          <div id="main-left-open">
            <button type="button" value="open" onClick={this.updateMenu}>
              X
            </button>
          </div>
        );
    }
  };

  updateMenu = event => {
    event.preventDefault();
    this.setState({ sideMenuOpen: !this.state.sideMenuOpen });
  };
  render() {
    return (
      <div className="landing-page">
        <div className="main">
          <div> {this.renderSideMenu()} </div>

          <div id="main-right">
            <div id="item-counter">
              <button type="button" onClick={this.props.addItemToCart}>
                Add Item
              </button>

              <button type="button" onClick={this.props.decreaseCartItems}>
                Remove Item
              </button>
            </div>

            <div id="row1">
              <div id="box1"> </div>
              <div id="box2"> </div>
              <div id="box3"> </div>
            </div>
            <div id="row2">
              <div id="box4"> </div>
              <div id="box5"> </div>
              <div id="box6"> </div>
            </div>
            <div id="row3">
              <div id="box7"> </div>
              <div id="box8"> </div>
              <div id="box9"> </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
