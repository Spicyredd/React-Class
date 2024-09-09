import React from "react";

const TernaryOperator = () => {
    /* 
    replacement of is else statement
    */
  // let isMarried = true
  // let output = isMarried === true? "He is married" : "He is unmarried"
  // console.log(output)
  //   let age = 30;
  //   let output = age >= 18 ? "He can enter bar" : "He can not enter bar";
  //   console.log(output)

  //   let age = 40;
  //   let output =
  //     age === 1
  //       ? "Age is 1"
  //       : age === 2
  //       ? "Age is 2"
  //       : age === 3
  //       ? "Age is 3"
  //       : "None";
  //   console.log(output);
  let gender = "male";
  let output =
  gender === "male"
  ? "He is male"
  : gender === "female"
  ? "She is female"
  : "Other";
  console.log(output);
  let isMarried = false
  return <div>
    {
        gender === "male"?<p>He is male.</p>:gender === "female"?<p>She is female.</p>:"Other"

    }
    <p>isMarried = {isMarried === true? "yes":"no"}</p>
  </div>;
};

export default TernaryOperator;
