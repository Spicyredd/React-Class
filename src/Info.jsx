import React from 'react'

const Info = ({name, address, college}) => {
  return (
    <div>
      <p>My name is {name}</p>
      <p>My address is {address}</p>
      <p>My college is {college}</p>
      <button>Click Me</button>
    </div>
  )
}

export default Info
