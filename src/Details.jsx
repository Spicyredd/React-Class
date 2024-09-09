import React from "react";
const Details = () => {
  return (
    <div>
      <p style={{ backgroundColor: "red", color: "white" }}>
        Name: Rishav Beejukchhen
      </p>
      <p style={{ backgroundColor: "yellow", color: "blue" }}>
        Father's Name: Arjun Bahadur Beejukchhen
      </p>
      <p style={{ backgroundColor: "green", color: "cyan" }}>
        Mother's Name: Rita Rajbahak
      </p>

      <p className="success">Product created successfully</p>
      <p className="error">Unable to create product</p>
      <p className="warning">Some features of product missing</p>

      <p className="card">Check</p>
      <img src = "./logo192.png" alt = "This is text"></img>
    </div>
  );
};

export default Details;
