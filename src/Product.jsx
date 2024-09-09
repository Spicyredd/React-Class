import React from 'react'

const Product = ({name, price, quantity}) => {
  return (
    <div>
      <p>Product name:{name}</p>
      <p>Product price:{price}</p>
      <p>Product name:{quantity}</p>
    </div>
  )
}

export default Product
