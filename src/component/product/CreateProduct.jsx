import axios from "axios";
import React, { useState } from "react";

const CreateProduct = () => {
  let [name, setName] = useState("");
  let [price, setPrice] = useState();
  let [quantity, setQuantity] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      name: name,
      price: price,
      quantity: quantity,
    };
    try {
      let result = await axios({
        url: "https://66ecf37e380821644cdac893.mockapi.io/product",
        method: "post",
        data: data,
      });
      console.log(result);
      setName("");
      setPrice("");
      setQuantity("");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            id="price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor="quantity">Quantity</label>
          <input
            id="quantity"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div>
        <button type="submit">Register</button>
      </div>
    </form>
  );
};

export default CreateProduct;
