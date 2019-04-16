import React, { Component } from "react";
import "./styles.css";

import { Button, Header, Image, Modal } from "semantic-ui-react";

class ItemPage extends Component {
  static state = {
    page: "Item"
  };
  render() {
    return (
      <div className="item">
        <main id="main">
          <div id="top">
            <div id="top-left">This will be an image of the item</div>
            <div id="top-middle"> This will be the text about the item.</div>
            <div id="top-right">
              <Modal trigger={<Button>Show Modal</Button>}>
                <Modal.Header>Select a Photo</Modal.Header>
                <Modal.Content image>
                  <Image
                    wrapped
                    size="medium"
                    src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
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
            </div>
          </div>
          <div id="bottom">
            {" "}
            Reviews
            <img star />
            <img star outline />
          </div>
        </main>
      </div>
    );
  }
}

export default ItemPage;
