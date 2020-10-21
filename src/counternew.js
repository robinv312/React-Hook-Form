import React, { Component } from 'react';
import Counter from './counter';
class Counternew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    increment() {
        setTimeout(() => {
            this.setState((prev, props) =>( 
                {counter: prev.counter +1})); 
        }, 100000000000000);

    }
    render() {

        this.increment();
        return (
            <div>
                <p>{this.state.counter}</p>
            </div>
        );
    }
}
export default Counternew;