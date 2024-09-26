import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ReadAllProduct = () => {
  let [products, setproducts] = useState([]);
  /*
  hit api on page load
  api give s data
  set data to method
  */
  const navigate = useNavigate()
  const getData = async () => { 
try {
  
      let result = await axios({
        url: "https://66ecf37e380821644cdac893.mockapi.io/product",
        method: "get",
      })
      console.log(result.data)
      setproducts(result.data)
} catch (error) {
toast.error("Unable to get data")
}
  };
  useEffect(() => {
    getData();
  }, []);

  return <div>
    {products.map((value, i) => {
      return(
        <div style = {{border: "solid red 2px", marginBottom: "10px"}}>
<p>Product: {value.name}</p>
<p>Price: {value.price}</p>
<p>Quantity: {value.quantity}</p>
<div>
              <button
                onClick={() => {
                  navigate(`/product/${value.id}`);
                }}
              >
                View
              </button>
              <button
                onClick={() => {
                  navigate(`/product/update/${value.id}`);
                }}
              >
                Update
              </button>
              <button
                onClick={async () => {
                  try {
                    await axios({
                      url: `https://66ecf37e380821644cdac893.mockapi.io/product/${value.id}`,
                      method: "delete",
                    });
                    toast.success("Product Deleted Successfully");
                  } catch (error) {
                    toast.error("Unable To Delete Product");
                  }
                  getData();
                }}
              >
                Delete
              </button>
            </div>
        </div>
      )
    })}
    
  </div>;
}

export default ReadAllProduct
