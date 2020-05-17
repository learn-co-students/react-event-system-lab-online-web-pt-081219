import React, { Component } from 'react'

export default class EyesOnMe extends Component {

    inFocus = () => {
        console.log('Good!')
    }

    blurIt = () => {
        console.log('Hey! Eyes on me!')
    }
    
    render() {
        return (<button onFocus={this.inFocus} onBlur={this.blurIt}></button>)
    }
}