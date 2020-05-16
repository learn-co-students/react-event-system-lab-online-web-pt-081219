// @ts-check

import React, { Component } from "react";

export default class EyesOnMe extends Component {
  focusEvent = (event) => {
    {
      console.log("Good!");
    }
  };

  blurEvent = (event) => {
    {
      console.log("Hey! Eyes on me!");
    }
  };

  render() {
    return (
      <div>
        <button onFocus={this.focusEvent} onBlur={this.blurEvent}></button>
      </div>
    );
  }
}
