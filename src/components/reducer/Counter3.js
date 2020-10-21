import React, { useReducer } from 'react'


const initialstate = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialstate;
        default:
            return state

    }
}
function Counter3() {
    const [count, dispatch] = useReducer(reducer, initialstate)
    const [count2, dispatch2] = useReducer(reducer, initialstate)

      
    return (
        <div>
            <div>Count-{count}</div>
            <button onClick={() => dispatch('reset')}>Reset</button>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <div>
                <div>Count2-{count2}</div>
                <button onClick={() => dispatch2('reset')}>Reset</button>
                <button onClick={() => dispatch2('increment')}>Increment</button>
                <button onClick={() => dispatch2('decrement')}>Decrement</button>
            </div>
        </div>
    )
}

export default Counter3
