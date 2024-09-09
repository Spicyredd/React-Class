import React from 'react'

const ButtonClick = () => {
  return (
    <div>
      <button
      onClick = {(e) => {
        console.log("Button is clicked")
      }}
      >Button 1</button>
    </div>
  )
}

export default ButtonClick
