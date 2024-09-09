import React from "react";

const Form1 = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("form is submitted successfully.");
      }}
    >
      <div>
        <input type="text"></input>
        <hr></hr>
        <input type="email"></input>
        <hr></hr>
        <input type="password"></input>
        <hr></hr>
        <input type="number"></input>
        <hr></hr>
        <input type="checkbox"></input>
        <hr></hr>

        <textarea></textarea>
        <br></br>

        <select>
          <option value="nepal">Nepal</option>
          <option value="china">China</option>
          <option value="japan">Japan</option>
        </select>
      </div>
      <div>
        <button type="submit">Send</button>
      </div>
    </form>
  );
};

export default Form1;