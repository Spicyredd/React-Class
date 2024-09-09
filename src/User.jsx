import React from 'react'

const User = ({name, age, isMarried}) => {
  let status = ""
  if (isMarried){
    status = "Married"
  }
  else{
    status = "Single"
  }
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Marriage Status: {status}</p>
    </div>
  )
}

export default User
