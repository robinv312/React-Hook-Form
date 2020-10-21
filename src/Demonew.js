import React, { Component } from 'react';
class Demonew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    increment = () => {
        this.setState((prev, props) => (
            { counter: prev.counter + 1 }
        ));
    }
    decrement = () => {
        this.setState((prev, props) => (
            { counter: prev.counter - 1 }
        ));
    }
    render() {
        return (
            <div>
                <button onClick={this.increment}>Click</button>
                <button onClick={this.decrement}>Click</button>
                <p>You have clicked {this.state.counter} times</p>
            </div>
        );
    }
}
export default Demonew;