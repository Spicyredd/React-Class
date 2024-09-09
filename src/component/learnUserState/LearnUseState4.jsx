import React, { useState } from 'react'

const LearnUseState4 = () => {
  let [count, setCount] = useState(0)
  console.log("I am component")
  return (
    <>
      <p>The count is {count}</p>
      <button
      onClick = {(e) => {
        setCount(count+1)
      }}
      >Increment</button>
    <button
      onClick = {(e) => {
        setCount(count-1)
      }}
      >Decrement</button>
    </>

  )
}

<></> // this is a react fragment

export default LearnUseState4
