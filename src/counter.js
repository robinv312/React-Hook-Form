import React from 'react';
let count = 0;
const Counter = () => {

    count++;
    return (

        <div>
            <p>{count}</p>
        </div>
    );
}
export default Counter;