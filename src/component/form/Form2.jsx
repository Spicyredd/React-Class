import React, { useState } from "react";

const Form2 = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [isMarried, setisMarried] = useState(false);
  let [country, setCountry] = useState("nepal");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(name);
        console.log(email);
        console.log(password);
        console.log(isMarried);
        console.log(country)
      }}
    >
      <div>
        <label>Name</label>
        <input
          type="text"
          value = {name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          value = {email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value = {password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
      </div>
      <div>
        <label>IsMarried</label>
        <input
          type="checkbox"
          checked = {isMarried}
          onChange={(e) => {
            setisMarried(e.target.checked);
          }}
        ></input>
      </div>
      <div>
        <select
        onClick={(e) => {
          setCountry(e.target.value);
        }}>
          <option value = "nepal">Nepal</option>
          <option value = "india">India</option>
          <option value = "bhutan">Bhutan</option>
        </select>
      </div>
      

      <div>
        <button type="submit">Send</button>
      </div>
    </form>
  );
};

export default Form2;
