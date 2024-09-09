// name, price, quantity, description

import React, { useState } from "react";

const Product = () => {
    let [name, setName] = useState("")
    let [price, setPrice] = useState()
    let [quantity, setQuantity] = useState()
    let [description, setDescription] = useState("")
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Product details submitted");
        console.log(name)
        console.log(price)
        console.log(quantity)
        console.log(description)
    }
    }
    >
      <div>
        <label>Name:</label>
        <input type="text" placeholder="Name"
        onChange={(e) => {
            setName(e.target.value)
        }}
        ></input>
        <label>Price:</label>
        <input type="number"
                onChange={(e) => {
                    setPrice(e.target.value)
                }}
        ></input>
        <label>Quantity:</label>
        <input type="number"
                onChange={(e) => {
                    setQuantity(e.target.value)
                }}
        ></input>
        <label>Description:</label>
        <textarea placeholder="This product is ...."
                onChange={(e) => {
                    setDescription(e.target.value)
                }}
        ></textarea>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Product;
