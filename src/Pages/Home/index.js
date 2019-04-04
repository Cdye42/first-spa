import React, { Component } from "react";
import "./styles.css";

class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <header>This is the header</header>

        <main>
          <div className="left"> </div>

          <div className="right">
            <input type="text" placeholder="email" />
            <input type="password" placeholder="password" />
            <input type="button">Submit> </input> />
          </div>
        </main>
        <footer> This is the footer</footer>
      </div>
    );
  }
}

export default HomePage;
