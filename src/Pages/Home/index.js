import React, { Component } from "react";
import "./styles.css";
import MyHeader from "../../Components/Header";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import LandingPage from "../Landing";

class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <MyHeader />

        <main>
          <div className="left">
            {" "}
            <Modal trigger={<Button>Show Modal</Button>}>
              <Modal.Header>Select a Photo</Modal.Header>
              <Modal.Content image>
                <Image
                  wrapped
                  size="medium"
                  src="/images/avatar/large/rachel.png"
                />
                <Modal.Description>
                  <Header>Default Profile Image</Header>
                  <p>
                    We've found the following gravatar image associated with
                    your e-mail address.
                  </p>
                  <p>Is it okay to use this photo?</p>
                </Modal.Description>
              </Modal.Content>
            </Modal>{" "}
            This is what the text will look like
          </div>

          <div className="right">
            <input type="text" placeholder="email" />
            <input type="password" placeholder="password" />
            <button type="button">Login</button>
          </div>
        </main>
        <footer>
          <div> Share on Social Media </div>
          <div> Careers </div>
          <div> Contact Us </div>
        </footer>
      </div>
    );
  }
}

export default HomePage;
