import React, { useState } from 'react'

const LearnUseState2 = () => {
    let [count, setCount] = useState(0)
  return (
    <div>
      <p>The count is {count}</p>
      <button
      onClick = {(e) => {
        setCount(count+1)
      }}
      >+</button>
      <button
      onClick = {(e) => {
        setCount(count-1)
      }}
      >-</button>

    </div>
  )
}

export default LearnUseState2
