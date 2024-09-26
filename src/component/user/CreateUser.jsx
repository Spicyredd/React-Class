import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const CreateUser = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [age, setAge] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
        name:name,
        email:email,
        password:password,
        age:age
    }
    try {
      let result = await axios({
          url: "https://66ecf37e380821644cdac893.mockapi.io/user",
          method: "post",
          data: data,
        });
        toast.success("User Created Successfully")
        console.log(result)
        setName("")
        setEmail("")
        setPassword("")
        setAge("")
    }
    catch(error){
      console.log(error.message)
      toast.error("Unable to create user")
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
        <button type="submit">Register</button>
      </div>
    </form>
  );
};

export default CreateUser;


/*
Send data to Backend
    url => 
    method => 
*/