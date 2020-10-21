import React, { Component } from 'react';

class Welcome extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <div>
                <p>
                    Robin {this.props.title}
                </p>
            </div>
        );
    }


}
export default Welcome;