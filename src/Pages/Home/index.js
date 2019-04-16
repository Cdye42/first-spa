import React, { Component } from "react";
import "./styles.css";

class HomePage extends Component {
  static state = {
    page: "Home"
  };

  render() {
    return (
      <div className="home-page">
        <main>
          <div className="left">This is what the text will look like</div>

          <div className="right">
            <input type="text" placeholder="email" />
            <input type="password" placeholder="password" />
            <button type="button">Login</button>
          </div>
        </main>
        <footer>
          <div id="Social Media"> Share on Social Media </div>
          <div id="Careers"> Careers </div>
          <div id="Contact"> Contact </div>
        </footer>
      </div>
    );
  }
}

export default HomePage;
