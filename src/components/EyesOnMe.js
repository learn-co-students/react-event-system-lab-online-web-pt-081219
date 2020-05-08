// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {
    render() {
        return(
            <div>
                <br/>
                <button onFocus={() => console.log("Good!")} onBlur={() => {console.log("Hey! Eyes on me!")}}>Enter</button>
            </div>
        )
    }
}

export default EyesOnMe