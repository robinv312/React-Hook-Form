import React, { useReducer } from 'react'


const initialstate = {
    firstCounter: 0,
    secondCounter: 10
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { firstCounter: state.firstCounter - action.value }
        case 'increment2':
            return { secondCounter: state.secondCounter + action.value }
        case 'decrement2':
            return { secondCounter: state.secondCounter - action.value }

        case 'reset':
            return initialstate;
        default:
            return state

    }
}
function Counter2() {
    const [count, dispatch] = useReducer(reducer, initialstate)
    return (
        <div>
            <div>First Count-{count.firstCounter}</div>
            <div>Second Count-{count.secondCounter}</div>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment 5</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement 5</button>
            <div>
            <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>Increment counter 2 </button>
            <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>Decrement counter 2</button>
            </div>
        </div>
    )
}

export default Counter2
