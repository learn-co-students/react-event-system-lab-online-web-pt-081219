import React, { Component } from 'react';

export default class EyesOnMe extends Component {

    constructor(props) {
        super(props)
        this.state = {
            // color: this.props.color
        }
    }

    isFocused = () => {
        console.log('Good!')
    }

    isBlured = () => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return (
            <button onFocus={this.isFocused} onBlur={this.isBlured} >Button</button>
        )
    }

}