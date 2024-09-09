import React from 'react'
import { Navigate } from 'react-router-dom'

const Error = () => {
  // return (
  //   <div>
  //     404 Page
  //   </div>
  // )
  //or
  return(
    <Navigate to = "/contact"></Navigate>
  )
}

export default Error
