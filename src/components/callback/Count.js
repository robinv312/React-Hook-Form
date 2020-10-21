import React from 'react'

function Count(props) {
    console.log(`rendering ${props.text}`)
    return (
        <div>
          <div>{props.text}---{props.count}</div>
        </div>
    )
}

export default React.memo(Count)
