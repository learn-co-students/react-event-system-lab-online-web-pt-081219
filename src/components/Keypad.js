// @ts-check

import React, { Component } from "react";

export default class Keypad extends Component {
  handleClick = (event) => {
    {
      console.log("Entering password...");
    }
  };

  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.handleClick}>
          Something something
        </input>
      </div>
    );
  }
}
