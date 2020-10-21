import React from 'react';
import './contact.css';

const Contact = (props) => {
    let names= props.name.toUpperCase();
    
    
    return (
        <div className="test" style={props.sty}>
            <h1>{props.ser.name} contact page</h1>
            <label>Email Address</label>
            <input type="text" /><br />
            <label>Message</label>
            <textarea>

            </textarea>
            <button>Send</button>

        </div>
    );
}

export default Contact;