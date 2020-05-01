// Code EyesOnMe Component Here

import React from "react";

export default class EyesOnMe extends React.Component {
    goodText = () => {
        console.log('Good!')
    }

    blurText = () => {
        console.log('Hey! Eyes on me!')
    }

    
    render() {
        return (
            <button onFocus={this.goodText} onBlur={this.blurText}></button> 
        )
    }
}
