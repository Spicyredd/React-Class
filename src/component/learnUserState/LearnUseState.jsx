import React, { useState } from "react";

const LearnUseState = () => {
//   let name = "rishav"

  let [name, setName] = useState("rishav");
  let [age, setAge] = useState(21)

  return (
    <div>
      <p>My name is {name}</p>
      <p>My age is {age}</p>
      <button
      onClick = {(e) => {
        if (name === "Abiral"){
          setName("Rishav")
          setAge(21)
        }
        else{
        setName("Abiral")
        setAge(22)
    }
      }}
      >Change Info</button>
      <button
      onClick = {(e) => {
        setAge(23)
      }}
      >Change Age</button>
    </div>
  );
};

export default LearnUseState;
