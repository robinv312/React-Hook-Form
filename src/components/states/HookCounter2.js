import React, { useState } from 'react'

function HookCounter2() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount)

    return (
        <div>
            count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(precount=>precount + 1)}>Increment</button>
            <button onClick={() => setCount(precount=>precount - 1)}>Decrement</button>
            <button onClick={() => setCount(precount=>precount + 5)}>Increment 5</button>

        </div>
    )
}

export default HookCounter2
