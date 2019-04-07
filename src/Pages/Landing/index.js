import React, { Component } from "react";
import "./styles.css";
import MyHeader from "../../Components/Header";

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <MyHeader />
        <div className="main">
          <div id="main-left"> This is the left-side menu </div>

          <div id="main-right">
            <div id="row1">
              <div id="box1">1 </div>
              <div id="box2"> 2</div>
              <div id="box3"> 3</div>
            </div>
            <div id="row2">
              <div id="box4"> 4</div>
              <div id="box5"> 5</div>
              <div id="box6"> 6</div>
            </div>
            <div id="row3">
              <div id="box7"> 7</div>
              <div id="box8"> 8</div>
              <div id="box9"> 9</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
