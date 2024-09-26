import React from "react";
import { Route, Routes } from "react-router-dom";
import ReadAllProduct from "./product/ReadAllProduct";
import CreateProduct from "./product/CreateProduct";
import ReadAllUser from "./user/ReadAllUser";
import CreateUser from "./user/CreateUser";
import ReadSpecificUser from "./user/ReadSpecificUser";
import UpdateUser from "./user/UpdateUser";
import ReadSpecificProduct from "./product/ReadSpecificProduct";
import UpdateProduct from "./product/UpdateProduct";

const MyRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/user" element={<ReadAllUser></ReadAllUser>}></Route>
        <Route path="/user/create" element={<CreateUser></CreateUser>}></Route>
        <Route
          path="/product"
          element={<ReadAllProduct></ReadAllProduct>}
        ></Route>
        <Route
          path="/product/create"
          element={<CreateProduct></CreateProduct>}
        ></Route>
        <Route
          path="/user/:id"
          element={<ReadSpecificUser></ReadSpecificUser>}
        ></Route>
        <Route
          path="/user/update/:id"
          element={<UpdateUser></UpdateUser>}
        ></Route>
        <Route
          path="product/:id"
          element={<ReadSpecificProduct></ReadSpecificProduct>}
        ></Route>
        <Route
          path="product/update/:id"
          element={<UpdateProduct></UpdateProduct>}
        ></Route>
      </Routes>
    </div>
  );
};

export default MyRoute;
