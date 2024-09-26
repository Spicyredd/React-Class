import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateProduct = () => {
  let [name, setName] = useState("");
  let [quantity, setQuantity] = useState();
  let [price, setPrice] = useState();
  let params = useParams();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("clicked");
    let data = {
      name: name,
      quantity: quantity,
      price: price,
    };
    console.log(data);
    try {
      let result = await axios({
        url: `https://66ecf37e380821644cdac893.mockapi.io/product/${params.id}`,
        method: "put",
        data: data,
      });
      toast.success("Product Updated Successfully");
      console.log(result);
    } catch (error) {
      console.log(error.message);
      toast.error("Unable to Update Product");
    }
  };
  const getData = async () => {
    try {
      let result = await axios({
        url: `https://66ecf37e380821644cdac893.mockapi.io/product/${params.id}`,
        method: "get",
      });
      let data = result.data;
      setName(data.name);
      setPrice(data.price);
      setQuantity(data.quantity);
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);

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
          <label htmlFor="Quantity">Quantity</label>
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
        <button type="submit">Update</button>
      </div>
    </form>
  );
};

export default UpdateProduct;
