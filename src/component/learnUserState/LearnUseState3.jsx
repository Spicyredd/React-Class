import React, { useState } from 'react'

const LearnUseState3 = () => {
    let [info, setInfo] = useState("")
    let [show, setShow] = useState(false)
  return (
    <div>
      {show?<p>Hello Rishav</p>:null}
      <button
      onClick = {(e) => {
        setShow(true)
      }}
      >Show</button>
      <button
      onClick = {(e) => {
        setShow(false)
      }}
      >Hide</button>
      <button
      onClick = {(e) => {
        setShow(!show)
      }}
      >Toggle</button>
    </div>
  )
}

export default LearnUseState3
