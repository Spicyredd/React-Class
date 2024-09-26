import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateUser = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [age, setAge] = useState("");
  let params = useParams();
  const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("clicked")
      let data = {
          name: name,
          email: email,
          password: password,
          age: age,
        };
    console.log(data)
    try {
      let result = await axios({
        url: `https://66ecf37e380821644cdac893.mockapi.io/user/${params.id}`,
        method: "put",
        data: data,
    }
);
toast.success("User Updated Successfully");
console.log(result);
} catch (error) {
    console.log(error.message);
    toast.error("Unable to Update user");
}
};
const getData = async () => {
  try {
    let result = await axios({
      url: `https://66ecf37e380821644cdac893.mockapi.io/user/${params.id}`,
      method: "get",
    });
    let data = result.data
    setName(data.name);
    setEmail(data.email);
    setPassword(data.password);
    setAge(data.age);
    console.log(result);
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
          <label htmlFor="email">Email</label>
          <input
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
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

export default UpdateUser;
